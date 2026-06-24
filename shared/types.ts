export interface Project { id?: string; title: string; description?: string | null; image_url?: string | null; github_url?: string | null; demo_url?: string | null; stack: string[]; featured: boolean; visible: boolean; order_index: number }
export interface Skill { id?: string; name: string; category: string; order_index?: number }
export interface TimelineEntry { year: string; title: string; description: string }
export interface About { id?: string; bio: string; timeline: TimelineEntry[] | string }
export interface Contact { id?: string; email?: string | null; linkedin_url?: string | null; github_url?: string | null; resume_url?: string | null }
