// Admin-only: create logins for any section (username + password), rename, reset passwords, delete accounts.
// Everyone signs in with a username; behind the scenes it maps to <username>@STUDENT_EMAIL_DOMAIN.
// section: g4 (4th Grade Explorer) | psat | sat. role: student | parent (parents are for g4).
import { cors, json, requireAdmin, serviceClient } from "../_shared/common.ts";

const DOMAIN = Deno.env.get("STUDENT_EMAIL_DOMAIN") ?? "students.kidostutor.com";
const USERNAME = /^[a-z0-9_.-]{3,30}$/;
const MIN_PASSWORD = 6; // Supabase Auth's own minimum

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Use POST." }, 405);

  const who = await requireAdmin(req);
  if (!who) return json({ error: "Only admins can manage accounts." }, 403);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "Send a JSON body." }, 400); }
  const admin = serviceClient();

  try {
    switch (body.action) {
      case "create": {
        const username = String(body.username ?? "").trim().toLowerCase();
        const password = String(body.password ?? "");
        const display_name = String(body.display_name ?? "").trim().slice(0, 60);
        const section = ["g4", "psat", "sat"].includes(String(body.section)) ? String(body.section) : "psat";
        const role = body.role === "parent" ? "parent" : "student";
        if (!USERNAME.test(username)) return json({ error: "Usernames are 3–30 characters: lowercase letters, numbers, dot, dash or underscore." }, 400);
        const must_change_password = body.must_change_password === true;
        if (password.length < MIN_PASSWORD) return json({ error: `Passwords need at least ${MIN_PASSWORD} characters.` }, 400);
        const { data, error } = await admin.auth.admin.createUser({
          email: `${username}@${DOMAIN}`, password, email_confirm: true,
          user_metadata: { username, display_name, section },
          app_metadata: { created_by_admin: true },
        });
        if (error) {
          const taken = /already|registered|exists/i.test(error.message);
          return json({ error: taken ? `The username “${username}” is already taken.` : error.message }, taken ? 409 : 400);
        }
        // The signup trigger makes a basic active profile; set role and the password flag here.
        const { error: e2 } = await admin.from("profiles")
          .update({ role, section, display_name, active: true, must_change_password }).eq("id", data.user!.id);
        if (e2) return json({ error: e2.message }, 400);
        return json({ id: data.user?.id, username });
      }
      case "rename": {
        // The username is also the login (username@DOMAIN), so the auth email changes with it.
        const id = String(body.user_id ?? "");
        const username = String(body.username ?? "").trim().toLowerCase();
        const display_name = String(body.display_name ?? "").trim().slice(0, 60);
        if (!USERNAME.test(username)) return json({ error: "Usernames are 3–30 characters: lowercase letters, numbers, dot, dash or underscore." }, 400);
        const { data: cur, error: e0 } = await admin.from("profiles").select("username, role").eq("id", id).single();
        if (e0) return json({ error: e0.message }, 400);
        if (username !== cur.username) {
          if (cur.role === "admin") return json({ error: "Admins sign in with their email; change it in the Supabase dashboard." }, 400);
          const { data: taken } = await admin.from("profiles").select("id").eq("username", username).maybeSingle();
          if (taken) return json({ error: `The username “${username}” is already taken.` }, 409);
          const { error } = await admin.auth.admin.updateUserById(id, { email: `${username}@${DOMAIN}`, email_confirm: true });
          if (error) return json({ error: error.message }, 400);
        }
        const { error: e2 } = await admin.from("profiles").update({ username, display_name }).eq("id", id);
        if (e2) return json({ error: e2.message }, 400);
        return json({ ok: true });
      }
      case "set_password": {
        const id = String(body.user_id ?? ""); const password = String(body.password ?? "");
        if (password.length < MIN_PASSWORD) return json({ error: `Passwords need at least ${MIN_PASSWORD} characters.` }, 400);
        const { error } = await admin.auth.admin.updateUserById(id, { password });
        if (error) return json({ error: error.message }, 400);
        const { error: e2 } = await admin.from("profiles").update({ must_change_password: body.must_change_password === true }).eq("id", id);
        if (e2) return json({ error: e2.message }, 400);
        return json({ ok: true });
      }
      case "delete": {
        const id = String(body.user_id ?? "");
        if (id === who.uid) return json({ error: "You can’t delete your own account." }, 400);
        const { error } = await admin.auth.admin.deleteUser(id);
        if (error) return json({ error: error.message }, 400);
        return json({ ok: true });
      }
      default:
        return json({ error: "Unknown action. Use create, rename, set_password or delete." }, 400);
    }
  } catch (e) {
    return json({ error: (e as Error).message ?? "Something went wrong." }, 500);
  }
});
