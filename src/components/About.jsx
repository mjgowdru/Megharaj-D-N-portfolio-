import { useRef, useState, useEffect } from 'react'
import { personal, bio, personalQuote } from '../data/portfolio'
import { GraduationCap, MapPin, Quote, Sparkles } from 'lucide-react'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.08 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

const FACTS = [
  { icon: <GraduationCap size={15} />, text: 'B.E. AI & ML · AIT Chikkamagalur', hi: 'CGPA 8.01' },
  { icon: <Sparkles size={15} />, text: 'VTU Youth Fest Representative', hi: '4 Years' },
  { icon: <MapPin size={15} />, text: 'Karnataka, India', hi: 'Open to Relocation' },
]

export default function About() {
  const { ref, v } = useFade()
  const [loaded, setLoaded] = useState(false)
  const [err, setErr] = useState(false)

  return (
    <section id="about" ref={ref} className="section" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:64, alignItems:'center' }} className="about-grid">
          {/* ── Photo column ── */}
          <div style={{ opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(-20px)', transition:'all 0.7s var(--ease-out)' }}
            className="about-photo-col"
          >
            <div style={{ position:'relative', maxWidth:360, margin:'0 auto' }}>
              {/* Corner accents */}
              <div style={{ position:'absolute', top:-10, left:-10, width:56, height:56, borderTop:'2px solid rgba(99,202,236,0.35)', borderLeft:'2px solid rgba(99,202,236,0.35)', borderRadius:'8px 0 0 0', pointerEvents:'none' }} />
              <div style={{ position:'absolute', bottom:-10, right:-10, width:56, height:56, borderBottom:'2px solid rgba(99,202,236,0.35)', borderRight:'2px solid rgba(99,202,236,0.35)', borderRadius:'0 0 8px 0', pointerEvents:'none' }} />

              {/* Image */}
              <div style={{ borderRadius:18, overflow:'hidden', border:'1px solid var(--border)', background:'var(--bg-card-2)', aspectRatio:'3/4' }}>
                {!err ? (
                  <img
                    src={personal.profilePhoto} alt="Prathiksha P Mallya"
                    onLoad={() => setLoaded(true)} onError={() => setErr(true)}
                    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block', opacity: loaded ? 1 : 0, transition:'opacity 0.5s' }}
                  />
                ) : (
                  <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:64 }} className="text-grad-cyan">PM</span>
                  </div>
                )}
              </div>

              {/* Name card */}
              <div style={{
                position:'absolute', bottom:20, left:16, right:16,
                background:'rgba(4,6,15,0.88)', backdropFilter:'blur(16px)',
                border:'1px solid var(--border-hi)', borderRadius:12,
                padding:'12px 16px',
              }}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'var(--t1)', marginBottom:2 }}>{personal.name}</div>
                <div style={{ fontSize:11.5, fontWeight:600, color:'var(--cyan)' }}>AI & ML Graduate · Java Full Stack Dev</div>
              </div>
            </div>
          </div>

          {/* ── Text column ── */}
          <div style={{ opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(20px)', transition:'all 0.7s 0.15s var(--ease-out)' }}>
            <p className="eyebrow">About Me</p>
            <h2 className="section-title" style={{ marginBottom:24 }}>
              Where <span className="text-grad-cyan">Artificial Intelligence</span>
              <br />meets <span className="text-grad-amber">Full Stack Engineering</span>
            </h2>

            <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:28 }}>
              {[bio.p1, bio.p2, bio.p3].map((p, i) => (
                <p key={i} style={{ fontSize:14.5, color:'var(--t2)', lineHeight:1.75 }}>{p}</p>
              ))}
            </div>

            {/* Quick facts */}
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
              {FACTS.map((f, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ width:32, height:32, borderRadius:8, background:'rgba(99,202,236,0.08)', border:'1px solid rgba(99,202,236,0.14)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)', flexShrink:0 }}>{f.icon}</span>
                  <span style={{ fontSize:13.5, color:'var(--t2)' }}>{f.text} —{' '}<span style={{ fontWeight:700, color:'var(--amber)' }}>{f.hi}</span></span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ borderLeft:'2px solid rgba(99,202,236,0.3)', paddingLeft:16, marginBottom:28 }}>
              <Quote size={14} style={{ color:'rgba(99,202,236,0.4)', marginBottom:8 }} />
              <p style={{ fontSize:13.5, color:'rgba(238,242,255,0.65)', fontStyle:'italic', lineHeight:1.7 }}>{personalQuote}</p>
            </div>

            {/* Stat pills */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {[['Deep Learning','CNN, LSTM, Transfer Learning'], ['Full Stack Java','Spring MVC, Hibernate'], ['State Winner','Data Visualization 2024']].map(([title, sub]) => (
                <div key={title} style={{ padding:'10px 16px', borderRadius:10, background:'var(--bg-card)', border:'1px solid var(--border)', transition:'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-hi)'; e.currentTarget.style.transform='translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='none' }}
                >
                  <div style={{ fontSize:12, fontWeight:700, color:'var(--t1)', marginBottom:2 }}>{title}</div>
                  <div style={{ fontSize:11, color:'var(--t3)' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){
          .about-grid{ grid-template-columns:1fr 1.2fr !important; }
        }
        .about-photo-col{ display:flex; justify-content:center; }
      `}</style>
    </section>
  )
}
