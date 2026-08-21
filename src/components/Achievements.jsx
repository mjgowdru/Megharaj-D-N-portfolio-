import { useRef, useState, useEffect } from 'react'
import { achievements } from '../data/portfolio'
import { Trophy, Presentation, Users, Star } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.06 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

const ICONS = [Trophy, Presentation, Users, Star]

export default function Achievements() {
  const { ref, v } = useFade()

  return (
    <section id="achievements" ref={ref} className="section" style={{ background:'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow" style={{ justifyContent:'center' }}>Recognition</p>
          <h2 className="section-title">Key <span className="text-grad-cyan">Achievements</span></h2>
          <p className="section-desc" style={{ margin:'12px auto 0', textAlign:'center' }}>
            Awards, competitions, leadership, and university representation milestones.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:16 }} className="ach-grid">
          {achievements.map((item, i) => {
            const Icon = ICONS[i] || Trophy
            return (
              <div
                key={item.title}
                className="card"
                style={{
                  padding:'24px 28px',
                  display:'flex', gap:18, alignItems:'flex-start',
                  opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(20px)',
                  transition: `all 0.65s ${i * 0.1}s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s`,
                }}
              >
                {/* Icon */}
                <div style={{ width:44, height:44, borderRadius:11, background:'rgba(240,180,41,0.08)', border:'1px solid rgba(240,180,41,0.16)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--amber)', flexShrink:0 }}>
                  <Icon size={18} />
                </div>

                <div style={{ flex:1, minWidth:0 }}>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:15, color:'var(--t1)', lineHeight:1.3, marginBottom:3 }}>{item.title}</h3>
                  <p style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', color:'var(--cyan)', marginBottom:10 }}>{item.subtitle}</p>
                  <p style={{ fontSize:13.5, color:'var(--t2)', lineHeight:1.65, marginBottom:8 }}>{item.description}</p>
                  <p style={{ fontSize:11.5, color:'var(--t3)', fontStyle:'italic' }}>{item.institution}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media(min-width:700px){ .ach-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
