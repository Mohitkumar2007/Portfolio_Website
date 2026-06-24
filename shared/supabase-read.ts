import { createClient } from '@supabase/supabase-js'
type PublicEnv = { VITE_SUPABASE_URL: string; VITE_SUPABASE_ANON_KEY: string }
const env = (import.meta as unknown as { env: PublicEnv }).env

// Deliberately separate from supabase.ts so the public bundle cannot include the service-role client.
export const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)
