import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'
import { Menu, X, Download } from 'lucide-react'

const LINKS = [
  ['About',          '#about'],
  ['Skills',         '#skills'],
  ['Projects',       '#projects'],
  ['Experience',     '#experience'],
  ['Education',      '#education'],
  ['Achievements',   '#achievements'],
  ['Certifications', '#certifications'],
  ['Contact',        '#contact'],
]

function goto(href, e) {
  e?.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open,     setOpen]       = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* ── Fixed Bar ── */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(4,6,15,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container" style={{ display:'flex', alignItems:'center', height:'64px', gap:'32px' }}>
          {/* Brand */}
          <a href="#hero" onClick={(e) => goto('#hero', e)}
            style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', flexShrink:0 }}
            id="nav-brand"
          >
            <span style={{
              width:34, height:34, borderRadius:10, flexShrink:0,
              background:'linear-gradient(135deg,#3baed1,#63caec)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'var(--font-display)', fontWeight:900, fontSize:13, color:'#04060f',
              boxShadow:'0 4px 16px rgba(99,202,236,0.25)',
            }}>
              PM
            </span>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'var(--t1)' }}>
              Prathiksha<span style={{ color:'var(--cyan)' }}>.dev</span>
            </span>
          </a>

          {/* Desktop links — centre */}
          <nav style={{ display:'flex', alignItems:'center', gap:'28px', flex:1, justifyContent:'center' }}
            className="hidden-mobile"
          >
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} onClick={(e) => goto(href, e)} className="nav-item">
                {label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display:'flex', alignItems:'center', gap:'10px', flexShrink:0, marginLeft:'auto' }}>
            <a href={personal.resumeUrl} download
              className="btn btn-primary hidden-mobile"
              style={{ padding:'8px 16px', fontSize:12 }}
              id="nav-resume"
            >
              <Download size={13} /> Resume
            </a>
            <button onClick={() => setOpen(true)}
              style={{ display:'none', padding:8, background:'none', border:'none', color:'var(--t2)', cursor:'pointer' }}
              className="show-mobile" aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div className={`mob-menu ${open ? 'open' : ''}`}>
        <button onClick={() => setOpen(false)}
          style={{ position:'absolute', top:20, right:20, background:'none', border:'none', color:'var(--t2)', cursor:'pointer' }}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:32 }}>
          <span style={{ width:38, height:38, borderRadius:10, background:'linear-gradient(135deg,#3baed1,#63caec)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:14, color:'#04060f' }}>PM</span>
          <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:'var(--t1)' }}>Prathiksha<span style={{color:'var(--cyan)'}}>.dev</span></span>
        </div>

        {LINKS.map(([label, href]) => (
          <a key={href} href={href}
            onClick={(e) => { goto(href, e); setOpen(false) }}
            style={{ fontSize:20, fontFamily:'var(--font-display)', fontWeight:600, color:'var(--t2)', textDecoration:'none', padding:'8px 0', transition:'color 0.2s' }}
            onMouseEnter={e => e.target.style.color='var(--cyan)'}
            onMouseLeave={e => e.target.style.color='var(--t2)'}
          >
            {label}
          </a>
        ))}

        <a href={personal.resumeUrl} download
          className="btn btn-primary" style={{ marginTop:24, padding:'12px 32px' }}
          onClick={() => setOpen(false)}
        >
          <Download size={15} /> Download Resume
        </a>
      </div>

      <style>{`
        @media(max-width:900px){ .hidden-mobile{display:none!important} }
        @media(min-width:901px){ .show-mobile{display:none!important} }
        @media(max-width:900px){ .show-mobile{display:flex!important} }
      `}</style>
    </>
  )
}
