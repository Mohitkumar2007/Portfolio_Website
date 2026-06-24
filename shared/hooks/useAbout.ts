import { useEffect, useState } from 'react'
import { supabase } from '../supabase-read'
import type { About } from '../types'
export function useAbout() { const [about, setAbout] = useState<About | null>(null); const [loading, setLoading] = useState(true); useEffect(() => { supabase.from('about').select('*').limit(1).maybeSingle().then(({ data }) => { setAbout(data as About | null); setLoading(false) }) }, []); return { about, loading } }
