import { useRef, useState, useEffect } from 'react'
import { skillGroups } from '../data/portfolio'
import { Code2, Brain, Layers, Globe, Database, Wrench } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.06 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

const ICONS = [Code2, Brain, Layers, Globe, Database, Wrench]

export default function Skills() {
  const { ref, v } = useFade()

  return (
    <section id="skills" ref={ref} className="section" style={{ background:'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow" style={{ justifyContent:'center' }}>Technical Expertise</p>
          <h2 className="section-title">Skills & <span className="text-grad-cyan">Technologies</span></h2>
          <p className="section-desc" style={{ margin:'12px auto 0', textAlign:'center' }}>
            My toolkit spanning AI/ML, full-stack development, databases, and engineering tools.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(1,1fr)', gap:16 }} className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[i] || Code2
            return (
              <div
                key={group.category}
                className="card"
                style={{
                  padding:'24px',
                  opacity: v ? 1 : 0,
                  transform: v ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.6s ${i * 0.07}s var(--ease-out), transform 0.6s ${i * 0.07}s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s`,
                }}
              >
                {/* Card header */}
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16, paddingBottom:16, borderBottom:'1px solid var(--border)' }}>
                  <div style={{ width:36, height:36, borderRadius:9, background:'rgba(99,202,236,0.08)', border:'1px solid rgba(99,202,236,0.14)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)', flexShrink:0 }}>
                    <Icon size={17} />
                  </div>
                  <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'var(--t1)' }}>
                    {group.category}
                  </span>
                </div>

                {/* Pills */}
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {group.skills.map(skill => (
                    <span key={skill} className="pill">{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media(min-width:640px){ .skills-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:1024px){ .skills-grid{ grid-template-columns:repeat(3,1fr) !important; } }
      `}</style>
    </section>
  )
}
