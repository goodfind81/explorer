import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

export const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

/** Client acting as the caller (their JWT), so RLS and auth.uid() apply. */
export function callerClient(req: Request): SupabaseClient {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
    auth: { persistSession: false },
  });
}

/** Client with the service role. Server-side only; never sent to the browser. */
export function serviceClient(): SupabaseClient {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
}

/** Returns the caller's user id when they are an active admin, else null. */
export async function requireAdmin(req: Request): Promise<{ uid: string; caller: SupabaseClient } | null> {
  const caller = callerClient(req);
  const { data: u } = await caller.auth.getUser();
  if (!u?.user) return null;
  const { data: ok, error } = await caller.rpc("is_admin");
  if (error || ok !== true) return null;
  return { uid: u.user.id, caller };
}

export const DOMAINS: Record<string, string[]> = {
  rw: ["Craft and Structure", "Information and Ideas", "Standard English Conventions", "Expression of Ideas"],
  math: ["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"],
};

export const SKILLS: Record<string, Record<string, string[]>> = {
  rw: {
    "Craft and Structure": ["Words in Context", "Text Structure and Purpose", "Cross-Text Connections"],
    "Information and Ideas": ["Central Ideas and Details", "Command of Evidence", "Inferences"],
    "Standard English Conventions": ["Boundaries", "Form, Structure, and Sense"],
    "Expression of Ideas": ["Transitions", "Rhetorical Synthesis"],
  },
  math: {
    "Algebra": ["Linear equations in one variable", "Linear functions", "Systems of linear equations", "Linear inequalities"],
    "Advanced Math": ["Equivalent expressions", "Nonlinear equations", "Nonlinear functions"],
    "Problem-Solving and Data Analysis": ["Ratios, rates, and proportions", "Percentages", "One-variable data", "Two-variable data", "Probability and conditional probability", "Inference from sample statistics"],
    "Geometry and Trigonometry": ["Area and volume", "Lines, angles, and triangles", "Right triangles and trigonometry", "Circles"],
  },
};
