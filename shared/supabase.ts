import { createClient } from '@supabase/supabase-js'

type SupabaseEnv = { VITE_SUPABASE_URL: string; VITE_SUPABASE_ANON_KEY: string; VITE_SUPABASE_SERVICE_ROLE_KEY: string }

/*
Run this SQL in Supabase before using the apps:

alter table projects enable row level security;
alter table skills   enable row level security;
alter table about    enable row level security;
alter table contact  enable row level security;

create policy "public read projects" on projects for select using (visible = true);
create policy "admin all projects" on projects for all using (auth.role() = 'authenticated');
create policy "public read skills" on skills for select using (true);
create policy "admin all skills" on skills for all using (auth.role() = 'authenticated');
create policy "public read about" on about for select using (true);
create policy "admin all about" on about for all using (auth.role() = 'authenticated');
create policy "public read contact" on contact for select using (true);
create policy "admin all contact" on contact for all using (auth.role() = 'authenticated');
*/
const env = (import.meta as unknown as { env: SupabaseEnv }).env
const url = env.VITE_SUPABASE_URL
const anonKey = env.VITE_SUPABASE_ANON_KEY
const serviceRoleKey = env.VITE_SUPABASE_SERVICE_ROLE_KEY

export const supabase = createClient(url, anonKey)
// The admin app is intentionally local/private. Never ship this client to a public deployment.
export const supabaseAdmin = createClient(url, serviceRoleKey)
