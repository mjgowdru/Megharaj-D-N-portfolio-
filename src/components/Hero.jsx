import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/portfolio'
import { Download, ArrowRight, Mail, MapPin, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ROLES = ['AI & ML Engineer', 'Java Full Stack Developer', 'Computer Vision Engineer', 'Deep Learning Developer']
const STATS = [
  { n: '8.01', sub: 'CGPA' },
  { n: '4 mo', sub: 'Internship' },
  { n: '1st',  sub: 'State Award' },
  { n: '4 yr', sub: 'VTU Fest' },
]

function useTypewriter(words) {
  const [display, setDisplay] = useState('')
  const [wIdx, setWIdx]       = useState(0)
  const [cIdx, setCIdx]       = useState(0)
  const [del,  setDel]        = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(word.slice(0, cIdx + 1))
        if (cIdx + 1 === word.length) setTimeout(() => setDel(true), 1800)
        else setCIdx(c => c + 1)
      } else {
        setDisplay(word.slice(0, cIdx - 1))
        if (cIdx - 1 === 0) { setDel(false); setWIdx(w => (w + 1) % words.length); setCIdx(0) }
        else setCIdx(c => c - 1)
      }
    }, del ? 36 : 72)
    return () => clearTimeout(t)
  }, [cIdx, del, wIdx, words])

  return display
}

function useFadeIn() {
  const ref = useRef(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, v }
}

function Particle({ canvas }) {
  useEffect(() => {
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const pts = []
    let raf, W, H

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 55; i++)
      pts.push({ x: Math.random() * 1600, y: Math.random() * 900, vx: (Math.random() - .5) * .15, vy: (Math.random() - .5) * .15, r: Math.random() * 1.1 + .3 })

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99,202,236,0.35)'; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
        if (d < 100) {
          ctx.beginPath()
          ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
          ctx.strokeStyle = `rgba(99,202,236,${0.06 * (1 - d / 100)})`
          ctx.lineWidth = .6; ctx.stroke()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [canvas])
  return null
}

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const { ref, v } = useFadeIn()
  const canvasRef = useRef(null)

  return (
    <section id="hero" ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        overflow: 'hidden',
      }}
      className="dot-grid"
    >
      {/* canvas */}
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }} />
      <Particle canvas={canvasRef.current} />

      {/* Ambient blobs */}
      <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(99,202,236,0.07) 0%, transparent 70%)', filter:'blur(40px)' }} />
        <div style={{ position:'absolute', bottom:'0%', left:'-8%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(240,180,41,0.04) 0%, transparent 70%)', filter:'blur(40px)' }} />
      </div>

      <div className="container" style={{ position:'relative', zIndex:1, paddingTop:100, paddingBottom:80 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 60,
          alignItems: 'center',
        }} className="hero-grid">
          {/* ── LEFT CONTENT ── */}
          <div style={{ opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(24px)', transition: 'all 0.7s var(--ease-out)' }}>
            {/* Status pill */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
              padding:'6px 14px', borderRadius:999, border:'1px solid rgba(99,202,236,0.2)',
              background:'rgba(99,202,236,0.06)', fontSize:12, fontWeight:600, color:'var(--cyan)',
            }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--cyan)', boxShadow:'0 0 8px var(--cyan)', animation:'glow 2s ease-in-out infinite' }} />
              Available for Opportunities
            </div>

            {/* Name */}
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:900, letterSpacing:'-0.03em', lineHeight:1.08, marginBottom:20 }}>
              <span style={{ display:'block', fontSize:'clamp(14px,2.5vw,18px)', fontWeight:700, color:'var(--t2)', letterSpacing:0, marginBottom:4 }}>
                Hi there, I'm
              </span>
              <span style={{ display:'block', fontSize:'clamp(36px,6vw,64px)', color:'var(--t1)' }}>
                Prathiksha
              </span>
              <span style={{ display:'block', fontSize:'clamp(36px,6vw,64px)' }} className="text-grad-cyan">
                P Mallya
              </span>
            </h1>

            {/* Typewriter */}
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24, minHeight:36 }}>
              <div style={{ width:3, height:24, borderRadius:3, background:'var(--cyan)', flexShrink:0 }} />
              <span style={{ fontFamily:'var(--font-display)', fontSize:'clamp(14px,2vw,18px)', fontWeight:600, color:'var(--t2)' }}>
                {typed}
                <span style={{ display:'inline-block', width:2, height:'1em', background:'var(--cyan)', marginLeft:2, verticalAlign:'middle', animation:'glow 0.8s ease-in-out infinite' }} />
              </span>
            </div>

            {/* Bio */}
            <p style={{ fontSize:15, color:'var(--t2)', lineHeight:1.75, maxWidth:520, marginBottom:36, borderLeft:'2px solid rgba(99,202,236,0.25)', paddingLeft:16 }}>
              B.E. AI & ML graduate from AIT Chikkamagalur with hands-on experience in Deep Learning, Computer Vision, and Java Full Stack Development. State-level data visualization winner.
            </p>

            {/* CTAs */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:12, marginBottom:48 }}>
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior:'smooth' }) }}
                className="btn btn-primary" id="hero-projects" style={{ padding:'11px 22px' }}
              >
                View Projects <ArrowRight size={15} />
              </a>
              <a href={personal.resumeUrl} download className="btn btn-secondary" id="hero-resume" style={{ padding:'11px 22px' }}>
                <Download size={15} /> Download Resume
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' }) }}
                className="btn btn-ghost" id="hero-contact" style={{ padding:'11px 22px' }}
              >
                <Mail size={15} /> Contact
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, borderRadius:14, overflow:'hidden', border:'1px solid var(--border)', background:'var(--border)' }}>
              {STATS.map((s, i) => (
                <div key={s.sub} style={{ background:'var(--bg-card)', padding:'16px 8px', textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:800, letterSpacing:'-0.03em' }} className="text-grad-amber">{s.n}</div>
                  <div style={{ fontSize:10.5, fontWeight:600, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:3 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display:'flex', alignItems:'center', gap:16, marginTop:28 }}>
              <span style={{ fontSize:11, fontWeight:600, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'0.12em' }}>Find me on</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:7, fontSize:13, fontWeight:500, color:'var(--t2)', textDecoration:'none', padding:'6px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-card)', transition:'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,202,236,0.3)'; e.currentTarget.style.color='var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--t2)' }}
              >
                <FaGithub size={14} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:7, fontSize:13, fontWeight:500, color:'var(--t2)', textDecoration:'none', padding:'6px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-card)', transition:'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,202,236,0.3)'; e.currentTarget.style.color='var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--t2)' }}
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
              <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'var(--t3)' }}>
                <MapPin size={12} className="text-cyan" /> Karnataka, India
              </div>
            </div>
          </div>

          {/* ── RIGHT PHOTO ── */}
          <div style={{ display:'flex', justifyContent:'center', opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(24px)', transition:'all 0.8s 0.15s var(--ease-out)' }}
            className="hero-photo-col"
          >
            <div style={{ position:'relative' }} className="anim-float">
              {/* Glow ring */}
              <div style={{ position:'absolute', inset:-16, borderRadius:28, background:'radial-gradient(ellipse, rgba(99,202,236,0.15) 0%, transparent 70%)', filter:'blur(20px)', pointerEvents:'none' }} />
              {/* Border gradient */}
              <div style={{ position:'absolute', inset:-2, borderRadius:24, background:'linear-gradient(135deg,rgba(99,202,236,0.4),rgba(99,202,236,0.05) 50%,rgba(240,180,41,0.15))', padding:2, borderRadius:24 }}>
                <div style={{ width:'100%', height:'100%', borderRadius:22, background:'var(--bg-card)' }} />
              </div>

              {/* Photo */}
              <div style={{ position:'relative', width:'clamp(240px,30vw,320px)', aspectRatio:'3/4', borderRadius:22, overflow:'hidden', background:'var(--bg-card-2)', zIndex:1 }}>
                <img
                  src={personal.profilePhoto} alt="Prathiksha P Mallya"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }}
                  onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                />
                <div style={{ display:'none', position:'absolute', inset:0, alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8 }}>
                  <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:56 }} className="text-grad-cyan">PM</span>
                </div>
                {/* Bottom vignette */}
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(4,6,15,0.5) 0%, transparent 50%)', pointerEvents:'none' }} />
              </div>

              {/* Status badge */}
              <div style={{
                position:'absolute', bottom:16, left:'50%', transform:'translateX(-50%)',
                whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:8,
                padding:'8px 16px', borderRadius:999,
                background:'rgba(4,6,15,0.88)', backdropFilter:'blur(12px)',
                border:'1px solid rgba(99,202,236,0.2)', zIndex:2,
                fontSize:12, fontWeight:700, color:'var(--cyan)',
              }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px #22c55e' }} />
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior:'smooth' }) }}
        style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5, textDecoration:'none', color:'var(--t3)', fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', transition:'color 0.2s', animation:'fadeUp 1s 1s both' }}
        onMouseEnter={e => e.currentTarget.style.color='var(--cyan)'}
        onMouseLeave={e => e.currentTarget.style.color='var(--t3)'}
      >
        <ChevronDown size={16} style={{ animation:'float 2s ease-in-out infinite' }} />
        Scroll
      </a>

      <style>{`
        @media(min-width:900px){
          .hero-grid{ grid-template-columns:1fr 1fr !important; }
          .hero-photo-col{ justify-content:flex-end !important; }
        }
        @keyframes glow{ 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes float{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fadeUp{ from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
      `}</style>
    </section>
  )
}
