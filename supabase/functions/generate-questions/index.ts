// Admin-only: ask Claude for new SAT-style questions aimed at given skills, save them as DRAFTS.
// Nothing reaches students until an admin reviews and publishes it.
import { cors, DOMAINS, json, requireAdmin, SKILLS } from "../_shared/common.ts";

const API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const MODEL = Deno.env.get("ANTHROPIC_MODEL") ?? "claude-sonnet-5-5";
const SECTIONS: Record<string, { label: string; levels: number[] }> = {
  psat: { label: "PSAT 8/9 and PSAT 10: easy to medium", levels: [1, 2] },
  sat: { label: "PSAT/NMSQT and SAT: medium to hard", levels: [2, 3] },
};

type Focus = { domain: string; skill?: string };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Use POST." }, 405);
  const who = await requireAdmin(req);
  if (!who) return json({ error: "Only admins can generate questions." }, 403);
  if (!API_KEY) return json({ error: "ANTHROPIC_API_KEY is not set. Add it with `supabase secrets set`." }, 500);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "Send a JSON body." }, 400); }
  const subject = body.subject === "math" ? "math" : body.subject === "rw" ? "rw" : null;
  if (!subject) return json({ error: "subject must be rw or math." }, 400);
  const section = SECTIONS[String(body.section)] ? String(body.section) : "sat";
  const count = Math.max(1, Math.min(8, Number(body.count) || 5));
  const focus = (Array.isArray(body.focus) ? body.focus : [])
    .filter((f: Focus) => DOMAINS[subject].includes(f?.domain))
    .map((f: Focus) => ({ domain: f.domain, skill: SKILLS[subject][f.domain].includes(String(f.skill)) ? f.skill : undefined }));
  const note = String(body.note ?? "").slice(0, 500);

  // Style references and recent topics, so new questions match the bank and don't repeat it.
  const db = who.caller;
  const focusDomains = focus.length ? focus.map((f: Focus) => f.domain) : DOMAINS[subject];
  const { data: examples } = await db.from("ascend_questions")
    .select("domain,skill,level,passage,question,choices,answer_index,accept,explanation")
    .eq("subject", subject).eq("status", "published").in("domain", focusDomains).limit(40);
  const shuffled = (examples ?? []).sort(() => Math.random() - 0.5);
  const refs = shuffled.slice(0, 2);
  const { data: recent } = await db.from("ascend_questions").select("passage,question")
    .eq("subject", subject).order("created_at", { ascending: false }).limit(40);
  const avoid = (recent ?? []).map((r) => String(r.passage || r.question).slice(0, 70));

  const target = focus.length
    ? focus.map((f: Focus) => f.skill ? `${f.domain} → ${f.skill}` : `${f.domain} (any skill)`).join("; ")
    : "spread across all domains";

  const prompt = `Write ${count} ORIGINAL practice questions in the style of the digital SAT ${subject === "rw" ? "Reading and Writing" : "Math"} section for students preparing for the ${SECTIONS[section].label} difficulty.

Target skills: ${target}.
Allowed domains and skills: ${JSON.stringify(SKILLS[subject])}.
Use difficulty levels ${SECTIONS[section].levels.join(" or ")} (1 = easy, 2 = medium, 3 = hard).
${note ? `Teacher's note: ${note}\n` : ""}
Rules:
- Never copy or closely paraphrase College Board, Khan Academy or any published test question. Invent new passages, names and numbers.
${subject === "rw"
  ? `- Each question has a passage of 25–150 words (use "______" for a blank), an official-style stem, and exactly four choices with exactly one defensible answer. Wrong choices should be tempting for a specific, explainable reason.
- For Rhetorical Synthesis, put the student's notes in the passage, one per line starting with "• ", then a final line "Goal: ...".
- Use real-world facts only when certain; otherwise use clearly fictional people and places.`
  : `- About 1 in 4 questions should be typed-answer (student-produced response): "choices": null, "answer_index": null, and "accept" lists every acceptable form, e.g. ["2.5","5/2"].
- Others have exactly four choices. Write exponents as x^{2}. Use plain-text math with unicode (−, π, √, °).
- Solve every question yourself step by step BEFORE writing it, and check that exactly one choice is correct.`}
- "explanation": one to three sentences showing why the answer is right${subject === "math" ? " with the key steps" : ""}.
- Do not reuse these topics: ${JSON.stringify(avoid)}

Two published questions from our bank, for style only (do not copy):
${JSON.stringify(refs)}

Reply with only JSON in this shape:
{"questions":[{"domain":"...","skill":"...","level":2,"passage":"... or null","question":"...","choices":["...","...","...","..."] or null,"answer_index":0 or null,"accept":null or ["..."],"explanation":"..."}]}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: MODEL, max_tokens: 12000, messages: [{ role: "user", content: prompt }] }),
  });
  if (!res.ok) {
    const t = await res.text();
    return json({ error: `Claude API error ${res.status}: ${t.slice(0, 300)}` }, 502);
  }
  const out = await res.json();
  const text: string = (out.content ?? []).filter((b: { type: string }) => b.type === "text").map((b: { text: string }) => b.text).join("");
  let parsed: { questions?: unknown[] } | null = null;
  try { parsed = JSON.parse(text); } catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) { try { parsed = JSON.parse(m[0]); } catch { /* fall through */ } }
  }
  const list = Array.isArray(parsed?.questions) ? parsed!.questions : [];

  const rows = [];
  let skipped = 0;
  for (const raw of list) {
    const x = raw as Record<string, unknown>;
    const domain = String(x.domain ?? "");
    const typed = x.choices == null;
    const choices = Array.isArray(x.choices) ? (x.choices as unknown[]).map(String) : null;
    const accept = Array.isArray(x.accept) ? (x.accept as unknown[]).map(String).filter(Boolean) : null;
    const ai = Number(x.answer_index);
    const valid = DOMAINS[subject].includes(domain) && typeof x.question === "string" && x.question.trim() &&
      (typed ? !!accept?.length : choices?.length === 4 && Number.isInteger(ai) && ai >= 0 && ai <= 3);
    if (!valid) { skipped++; continue; }
    const skill = SKILLS[subject][domain].includes(String(x.skill)) ? String(x.skill) : SKILLS[subject][domain][0];
    const level = SECTIONS[section].levels.includes(Number(x.level)) ? Number(x.level) : SECTIONS[section].levels[0];
    rows.push({
      subject, level, domain, skill,
      passage: x.passage ? String(x.passage) : null,
      question: String(x.question), choices, answer_index: typed ? null : ai, accept: typed ? accept : null,
      explanation: String(x.explanation ?? ""), status: "draft", source: "ai", created_by: who.uid,
      notes: `AI draft (${MODEL}) for ${section}: ${target}`,
    });
  }
  if (!rows.length) return json({ error: "Claude’s reply had no usable questions. Try again or ask for fewer.", skipped }, 502);
  const { data, error } = await db.from("ascend_questions").insert(rows).select("id");
  if (error) return json({ error: error.message }, 400);
  return json({ inserted: data?.length ?? 0, skipped, ids: (data ?? []).map((r) => r.id) });
});
