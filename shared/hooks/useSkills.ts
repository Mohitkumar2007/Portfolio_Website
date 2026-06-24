import { useEffect, useState } from 'react'
import { supabase } from '../supabase-read'
import type { Skill } from '../types'
export function useSkills() { const [skills, setSkills] = useState<Skill[]>([]); const [loading, setLoading] = useState(true); useEffect(() => { supabase.from('skills').select('*').order('order_index').then(({ data }) => { setSkills((data ?? []) as Skill[]); setLoading(false) }) }, []); return { skills, loading } }
