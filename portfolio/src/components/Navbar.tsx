import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [['#work','Work'],['#skills','Skills'],['#about','About'],['#contact','Contact']] as const
export function Navbar(){const [open,setOpen]=useState(false);return <nav className="site-nav"><div className="wrap nav"><a className="brand" href="#top" aria-label="Mohit Kumar A — return to top">Mohit Kumar A<span>·</span></a><div className="links desktop-links" aria-label="Page sections">{links.map(([href,label])=><a href={href} key={href}>{label}</a>)}</div><button className="menu-toggle" type="button" aria-label={open?'Close navigation menu':'Open navigation menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button></div>{open&&<div className="mobile-menu" aria-label="Mobile page sections">{links.map(([href,label])=><a href={href} key={href} onClick={()=>setOpen(false)}>{label}</a>)}</div>}</nav>}
