import { useEffect, useState } from 'react'
import { supabase } from '../supabase-read'
import type { Contact } from '../types'
export function useContact() { const [contact, setContact] = useState<Contact | null>(null); const [loading, setLoading] = useState(true); useEffect(() => { supabase.from('contact').select('*').limit(1).maybeSingle().then(({ data }) => { setContact(data as Contact | null); setLoading(false) }) }, []); return { contact, loading } }
