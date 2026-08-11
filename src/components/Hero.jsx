import { ArrowDown, ChevronRight, Download, Mail, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { personal, roles, tagline, stats } from '../data/portfolio'

function useTypewriter(words, speed = 110, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = deleting
      ? setTimeout(() => {
          setDisplay((d) => d.slice(0, -1))
          setCharIdx((c) => c - 1)
          if (charIdx - 1 === 0) {
            setDeleting(false)
            setWordIdx((w) => (w + 1) % words.length)
          }
        }, speed / 2)
      : setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause)
          }
        }, speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

function PhotoFrame({ src, name }) {
  const [loaded, setLoaded] = useState(false)
  const [err, setErr]       = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: 'clamp(260px, 36vw, 420px)',
        aspectRatio: '1 / 1',
        flexShrink: 0,
      }}
    >
      {/* Outer decorative ring — animated */}
      <div
        style={{
          position: 'absolute',
          inset: '-14px',
          borderRadius: '50%',
          border: '1.5px dashed rgba(245,197,66,0.25)',
          animation: 'spin-slow 18s linear infinite',
        }}
      />
      {/* Inner ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          border: '1px solid rgba(245,197,66,0.12)',
        }}
      />

      {/* Glow blob behind photo */}
      <div
        style={{
          position: 'absolute',
          inset: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,197,66,0.22) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Photo circle */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid rgba(245,197,66,0.35)',
          background: 'var(--color-surface-2)',
          boxShadow: '0 0 60px rgba(245,197,66,0.15), 0 20px 60px rgba(0,0,0,0.6)',
        }}
      >
        {!err ? (
          <img
            src={src}
            alt={`${name} — profile photo`}
            onLoad={() => setLoaded(true)}
            onError={() => setErr(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          />
        ) : (
          /* Fallback initials if image not found */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #F5C542, #D4A82A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
              }}
            >
              {personal.initials}
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>
              Add profile.jpg to /public
            </span>
          </div>
        )}
      </div>

      {/* Status badge — floating on photo */}
      {personal.available && (
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            right: '-4%',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.875rem',
            background: 'rgba(11,11,15,0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(74,222,128,0.3)',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#4ade80',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
          Open to Internships
        </div>
      )}

      {/* Location chip — top left */}
      <div
        style={{
          position: 'absolute',
          top: '6%',
          left: '-8%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.4rem 0.75rem',
          background: 'rgba(11,11,15,0.88)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '9999px',
          fontSize: '0.7rem',
          color: 'var(--color-text-secondary)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        <MapPin size={11} style={{ color: 'var(--color-accent)' }} />
        {personal.location}
      </div>

      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

export default function Hero() {
  const typed     = useTypewriter(roles)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.4 + 0.08,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width
        p.y = (p.y + p.vy + canvas.height) % canvas.height
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,197,66,${p.a})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.hypot(dx, dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(245,197,66,${0.045 * (1 - d / 110)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '5rem 1.5rem 3rem',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} aria-hidden="true" />

      {/* Ambient glows */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,66,0.06) 0%, transparent 70%)', top: '-150px', right: '5%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,66,0.04) 0%, transparent 70%)', bottom: '10%', left: '-5%', pointerEvents: 'none' }} />
      </div>

      {/* ── MAIN CONTENT — two column ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT — text */}
        <div style={{ flex: '1 1 340px', minWidth: 0 }}>

          {/* Greeting */}
          <p
            className="animate-fade-in"
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.75rem',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>👋</span>
            Hey there, I'm
          </p>

          {/* Name */}
          <h1
            className="font-display animate-fade-in-up"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: '0.75rem',
            }}
          >
            {personal.firstName}<br />
            <span className="gradient-text" style={{ fontSize: '0.65em', letterSpacing: '-0.01em' }}>
              D N
            </span>
          </h1>

          {/* Typewriter role */}
          <div
            className="animate-fade-in-up delay-200"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              fontWeight: 600,
              color: 'var(--color-accent)',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>—</span>
            {typed}
            <span style={{
              display: 'inline-block', width: '2px', height: '1.1em',
              background: 'var(--color-accent)', borderRadius: '1px',
              animation: 'fadeIn 0.7s ease infinite alternate',
            }} />
          </div>

          {/* Tagline */}
          <p
            className="animate-fade-in-up delay-300"
            style={{
              fontSize: 'clamp(0.875rem, 1.6vw, 1.05rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              maxWidth: '480px',
              marginBottom: '2rem',
              borderLeft: '2px solid rgba(245,197,66,0.3)',
              paddingLeft: '1rem',
            }}
          >
            {tagline}
          </p>

          {/* Buttons */}
          <div
            className="animate-fade-in-up delay-400"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}
          >
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-accent" id="hero-view-projects">
              <ChevronRight size={16} /> View Projects
            </a>
            <a href={personal.resumeUrl} className="btn-outline" id="hero-download-resume" download>
              <Download size={16} /> Resume
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-ghost" id="hero-contact">
              <Mail size={16} /> Contact
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up delay-500"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem 2.5rem' }}
          >
            {stats.map((s, i) => (
              <div key={s.label} style={{ paddingRight: i < stats.length - 1 ? '2.5rem' : 0, borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div className="font-display gradient-text" style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.2rem', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div
          className="animate-fade-in delay-300"
          style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <PhotoFrame src={personal.profilePhoto} name={personal.firstName} />
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          color: 'var(--color-text-muted)',
          textDecoration: 'none',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          zIndex: 2,
        }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={16} />
        Scroll
      </a>
    </section>
  )
}
