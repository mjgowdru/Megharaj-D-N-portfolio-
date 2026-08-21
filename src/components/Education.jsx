import { useRef, useState, useEffect } from 'react'
import { educationList } from '../data/portfolio'
import { GraduationCap, Calendar, Award } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.08 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

export default function Education() {
  const { ref, v } = useFade()

  return (
    <section id="education" ref={ref} className="section" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow">Academic Background</p>
          <h2 className="section-title">Education <span className="text-grad-cyan">Timeline</span></h2>
          <p className="section-desc">My academic journey from PUC to engineering in Artificial Intelligence.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:20, maxWidth:900 }} className="edu-grid">
          {educationList.map((edu, i) => (
            <div
              key={edu.degree}
              className="card"
              style={{
                padding:'28px 32px',
                opacity: v ? 1 : 0,
                transform: v ? 'none' : 'translateY(20px)',
                transition: `all 0.7s ${i * 0.15}s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s`,
              }}
            >
              <div style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
                {/* Icon */}
                <div style={{ width:44, height:44, borderRadius:11, background:'rgba(99,202,236,0.08)', border:'1px solid rgba(99,202,236,0.14)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)', flexShrink:0 }}>
                  <GraduationCap size={20} />
                </div>

                <div style={{ flex:1, minWidth:0 }}>
                  {/* Degree */}
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:'var(--t1)', lineHeight:1.3, marginBottom:4 }}>{edu.degree}</h3>
                  <p style={{ fontSize:13.5, color:'var(--t2)', marginBottom:12 }}>{edu.institution}</p>

                  {/* Detail */}
                  <p style={{ fontSize:13, color:'var(--t3)', lineHeight:1.65, marginBottom:16 }}>{edu.details}</p>

                  {/* Meta */}
                  <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                    <span style={{ display:'flex', alignItems:'center', gap:6, fontSize:12.5, color:'var(--t3)' }}>
                      <Calendar size={12} style={{ color:'var(--cyan)' }} /> {edu.duration}
                    </span>
                    <span style={{ display:'flex', alignItems:'center', gap:6, fontSize:12.5, fontWeight:700 }} className="text-grad-amber">
                      <Award size={12} /> {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(min-width:700px){ .edu-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
