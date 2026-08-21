import { useRef, useState, useEffect } from 'react'
import { certifications } from '../data/portfolio'
import { BookOpen, Cpu, Zap, BadgeCheck } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.06 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

const ICONS = [BookOpen, Cpu, Zap]

export default function Certifications() {
  const { ref, v } = useFade()

  return (
    <section id="certifications" ref={ref} className="section" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow" style={{ justifyContent:'center' }}>Credentials</p>
          <h2 className="section-title">Certifications & <span className="text-grad-cyan">Workshops</span></h2>
          <p className="section-desc" style={{ margin:'12px auto 0', textAlign:'center' }}>
            Professional training, technical workshops, and hackathon certifications.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:16, maxWidth:960, margin:'0 auto' }} className="cert-grid">
          {certifications.map((cert, i) => {
            const Icon = ICONS[i] || BookOpen
            return (
              <div
                key={cert.title}
                className="card"
                style={{
                  padding:'24px 28px',
                  display:'flex', flexDirection:'column', gap:0,
                  opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(20px)',
                  transition: `all 0.65s ${i * 0.12}s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s`,
                }}
              >
                {/* Top row */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:'rgba(99,202,236,0.07)', border:'1px solid rgba(99,202,236,0.13)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)' }}>
                    <Icon size={17} />
                  </div>
                  <div style={{ width:28, height:28, borderRadius:8, background:'rgba(240,180,41,0.07)', border:'1px solid rgba(240,180,41,0.14)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--amber)' }}>
                    <BadgeCheck size={13} />
                  </div>
                </div>

                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14.5, color:'var(--t1)', lineHeight:1.35, marginBottom:6 }}>{cert.title}</h3>
                <p style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', color:'var(--cyan)', marginBottom:12 }}>{cert.issuer}</p>
                <p style={{ fontSize:13, color:'var(--t3)', lineHeight:1.65, flex:1 }}>{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media(min-width:700px){ .cert-grid{ grid-template-columns:repeat(3,1fr) !important; } }
      `}</style>
    </section>
  )
}
