import { useRef, useState, useEffect } from 'react'
import { projects, personal } from '../data/portfolio'
import { GitFork, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.06 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

export default function Projects() {
  const { ref, v } = useFade()
  const p = projects[0]

  return (
    <section id="projects" ref={ref} className="section" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow" style={{ justifyContent:'center' }}>Portfolio</p>
          <h2 className="section-title">Featured <span className="text-grad-cyan">Projects</span></h2>
          <p className="section-desc" style={{ margin:'12px auto 0', textAlign:'center' }}>
            Real-world applications combining AI intelligence with full-stack engineering.
          </p>
        </div>

        {/* Featured card */}
        <div
          className="card"
          style={{
            overflow:'hidden', padding:0,
            opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(24px)',
            transition:'all 0.7s 0.1s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s',
          }}
        >
          <div style={{ display:'grid', gridTemplateColumns:'1fr' }} className="project-card-grid">
            {/* Image panel */}
            <div style={{ position:'relative', minHeight:260, background:'var(--bg-card-2)', overflow:'hidden' }} className="project-img-panel">
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(99,202,236,0.08) 0%, rgba(240,180,41,0.04) 100%)' }} />
              {p.image ? (
                <img src={p.image} alt={p.title}
                  style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.5s var(--ease)' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                />
              ) : (
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100%', fontSize:64 }}>{p.icon}</div>
              )}

              {/* Label overlay */}
              <div style={{ position:'absolute', top:20, left:20 }}>
                <span className="chip" style={{ fontSize:11, backdropFilter:'blur(8px)', background:'rgba(4,6,15,0.7)' }}>{p.icon} {p.label}</span>
              </div>
            </div>

            {/* Content panel */}
            <div style={{ padding:'36px 40px', display:'flex', flexDirection:'column', gap:20, justifyContent:'space-between' }}>
              <div>
                {/* Title */}
                <div style={{ marginBottom:6 }}>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:28, color:'var(--t1)', letterSpacing:'-0.02em', lineHeight:1 }}>{p.title}</h3>
                  <p style={{ fontSize:14, color:'var(--t2)', marginTop:4 }}>{p.subtitle}</p>
                </div>

                {/* Highlights */}
                <div style={{ display:'flex', flexDirection:'column', gap:9, marginTop:20 }}>
                  {p.highlights.map((h, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                      <CheckCircle2 size={14} style={{ color:'var(--cyan)', marginTop:2, flexShrink:0 }} />
                      <span style={{ fontSize:13.5, color:'var(--t2)', lineHeight:1.55 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:24 }}>
                  {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display:'flex', gap:12, flexWrap:'wrap', paddingTop:20, borderTop:'1px solid var(--border)' }}>
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-secondary" id="proj-github"
                >
                  <GitFork size={14} /> View Code
                </a>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary" id="proj-live"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
                <p style={{ display:'flex', alignItems:'center', gap:6, fontSize:12.5, color:'var(--t3)', marginLeft:'auto' }}>
                  More on{' '}
                  <a href={personal.github} target="_blank" rel="noopener noreferrer"
                    style={{ color:'var(--cyan)', textDecoration:'none', fontWeight:600 }}
                  >
                    GitHub <ExternalLink size={11} style={{ display:'inline', marginLeft:2 }} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){
          .project-card-grid{ grid-template-columns:1fr 1fr !important; }
          .project-img-panel{ min-height:100% !important; }
        }
      `}</style>
    </section>
  )
}
