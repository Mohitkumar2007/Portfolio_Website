import { useEffect, useState } from 'react'
import { supabase } from '../supabase-read'
import type { Project } from '../types'
export function useProjects() { const [projects, setProjects] = useState<Project[]>([]); const [loading, setLoading] = useState(true); useEffect(() => { supabase.from('projects').select('*').order('order_index').then(({ data }) => { setProjects((data ?? []) as Project[]); setLoading(false) }) }, []); return { projects, loading } }
