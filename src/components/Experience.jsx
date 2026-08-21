import { useRef, useState, useEffect } from 'react'
import { experiences } from '../data/portfolio'
import { Briefcase, Building2, Clock, ChevronRight } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.08 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

export default function Experience() {
  const { ref, v } = useFade()

  return (
    <section id="experience" ref={ref} className="section" style={{ background:'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow">Work History</p>
          <h2 className="section-title">Professional <span className="text-grad-cyan">Experience</span></h2>
          <p className="section-desc">Industrial training and hands-on internship experience.</p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:20, maxWidth:820 }}>
          {experiences.map((exp, i) => (
            <article
              key={exp.role}
              className="card"
              style={{
                padding:'28px 32px',
                opacity: v ? 1 : 0,
                transform: v ? 'none' : 'translateY(20px)',
                transition: `all 0.7s ${i * 0.12}s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s`,
              }}
            >
              {/* Top row */}
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16, marginBottom:20, paddingBottom:20, borderBottom:'1px solid var(--border)', flexWrap:'wrap' }}>
                <div style={{ display:'flex', alignItems:'flex-start', gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:11, background:'rgba(99,202,236,0.08)', border:'1px solid rgba(99,202,236,0.14)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)', flexShrink:0 }}>
                    <Briefcase size={19} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17, color:'var(--t1)', marginBottom:4 }}>{exp.role}</h3>
                    <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'var(--t2)' }}>
                      <Building2 size={13} style={{ color:'var(--cyan)', flexShrink:0 }} />
                      {exp.company}
                    </div>
                  </div>
                </div>
                <span className="chip" style={{ whiteSpace:'nowrap', flexShrink:0 }}>
                  <Clock size={11} /> {exp.duration}
                </span>
              </div>

              {/* Responsibilities */}
              <div style={{ marginBottom:20 }}>
                <p style={{ fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.14em', color:'var(--t3)', marginBottom:12 }}>Key Responsibilities</p>
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  {exp.responsibilities.map((r, ri) => (
                    <div key={ri} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                      <ChevronRight size={13} style={{ color:'var(--cyan)', marginTop:3, flexShrink:0 }} />
                      <span style={{ fontSize:13.5, color:'var(--t2)', lineHeight:1.6 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                {exp.tech.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
