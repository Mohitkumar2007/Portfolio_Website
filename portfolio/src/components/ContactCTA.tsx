import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { useContact } from '@shared/hooks/useContact'
import { Reveal } from './Reveal'

export function ContactCTA() {
  const { contact } = useContact()
  const email = contact?.email
  return <section id="contact" className="section"><div className="wrap"><Reveal><div className="contact-cta"><p className="eyebrow">Let’s connect</p><h2>Have an internship, project, or collaboration opportunity? Let’s build something useful with AI and data.</h2><div className="contact-actions"><a className="button button-primary" href={email ? `mailto:${email}` : '#'} aria-label="Email Mohit"><Mail size={16} />Email Me</a>{contact?.linkedin_url && <a href={contact.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="Open Mohit's LinkedIn profile"><Linkedin size={16} />LinkedIn <ArrowUpRight size={14} /></a>}{contact?.github_url && <a href={contact.github_url} target="_blank" rel="noopener noreferrer" aria-label="Open Mohit's GitHub profile"><Github size={16} />GitHub <ArrowUpRight size={14} /></a>}{contact?.resume_url && <a href={contact.resume_url} target="_blank" rel="noopener noreferrer" aria-label="Open Mohit's resume"><FileText size={16} />View résumé <ArrowUpRight size={14} /></a>}</div></div></Reveal></div></section>
}
