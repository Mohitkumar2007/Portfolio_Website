import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { useProjects } from '@shared/hooks/useProjects'
import type { Project } from '@shared/types'
import { Reveal } from './Reveal'

const categoryTerms = ['AI', 'ML', 'MongoDB', 'React', 'Django', 'Full Stack']
function categories(project: Project) { const text = `${project.title} ${project.stack?.join(' ')}`.toLowerCase(); return categoryTerms.filter(term => text.includes(term.toLowerCase())).slice(0, 2) }

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  const badges = categories(project)
  return <article className={`bento-project ${featured ? 'bento-featured' : ''}`}>
    <div className="project-media">{project.image_url ? <img src={project.image_url} alt={`${project.title} project preview`} loading="lazy" /> : <div className="project-placeholder"><Sparkles aria-hidden="true" /></div>}</div>
    <div className="bento-content"><div className="bento-meta"><span>0{index + 1}</span>{badges.map(badge => <span className="category-badge" key={badge}>{badge}</span>)}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack?.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-links">{project.github_url && <a href={project.github_url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} source code on GitHub`}><Github size={16}/>GitHub</a>}{project.demo_url && <a href={project.demo_url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}><ExternalLink size={16}/>Live Demo</a>}</div></div>
  </article>
}

export function ProjectBentoGrid(){const {projects,loading}=useProjects();const ordered=[...projects].sort((a,b)=>Number(b.featured)-Number(a.featured)||a.order_index-b.order_index);const [featured,...others]=ordered;return <section id="work" className="section"><div className="wrap"><Reveal><p className="eyebrow">Selected work</p><h2 className="title">Built to solve real problems.</h2></Reveal>{loading?<p className="muted">Loading projects…</p>:<div className="bento-grid">{featured&&<Reveal className="bento-main"><ProjectCard project={featured} index={0} featured/></Reveal>}{others.map((project,index)=><Reveal key={project.id ?? project.title} delay={index*.06} className="bento-small"><ProjectCard project={project} index={index+1} featured={false}/></Reveal>)}</div>}</div></section>}
