// One Supabase project backs every section (4th Grade Explorer, PSAT, SAT).
// The publishable key is safe to publish: row-level security decides what each login can do.
export const SUPABASE_URL = "https://lairmjaqsqyqbrcatubm.supabase.co";
export const SUPABASE_KEY = "sb_publishable_5Za7731n8QQu7xykFmiNYg_MraLKf7b";

// Usernames map to <username>@STUDENT_EMAIL_DOMAIN behind the scenes; no email is ever sent.
// Must match the STUDENT_EMAIL_DOMAIN secret on the admin-users edge function.
export const STUDENT_EMAIL_DOMAIN = "students.kidostutor.com";
