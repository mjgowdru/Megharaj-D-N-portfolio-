import { useEffect, useRef, useState } from 'react'
import { GraduationCap, MapPin, Code2, Cpu, Globe, Quote } from 'lucide-react'
import { personal, bio, education, personalQuote } from '../data/portfolio'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

const highlights = [
  {
    icon: <Cpu size={18} />,
    title: 'AI & Machine Learning',
    desc: 'Semantic similarity, NLP pipelines, transformer models — I build systems that understand language, not just parse it.',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Full-Stack Engineering',
    desc: 'Flask APIs, React UIs, MongoDB — from backend logic to deployed products, end to end.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Blockchain & Web3',
    desc: 'Solidity smart contracts, Web3.py, and decentralized verification systems.',
  },
]

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--color-bg)', position: 'relative' }}
    >
      <div className="skyline-divider" style={{ maxWidth: '600px', marginBottom: '5rem' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* ── TOP — header ── */}
        <div
          style={{
            marginBottom: '3.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s, transform 0.7s',
          }}
        >
          <p className="section-label">About Me</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              maxWidth: '700px',
            }}
          >
            Turning ideas into{' '}
            <span className="gradient-text">working software</span>
          </h2>
        </div>

        {/* ── MAIN GRID — photo left, content right ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
            marginBottom: '3rem',
          }}
        >
          {/* LEFT — photo + quick facts */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            {/* Photo card */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                background: 'var(--color-surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                marginBottom: '1.25rem',
              }}
            >
              <img
                src={personal.profilePhoto}
                alt={`${personal.name} — portrait`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div
                style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'absolute',
                  inset: 0,
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 900, color: 'var(--color-accent)', opacity: 0.4 }}>
                  {personal.initials}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Replace /public/profile.jpg</span>
              </div>

              {/* Overlay gradient at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(11,11,15,0.85) 0%, transparent 100%)',
              }} />

              {/* Name tag on photo */}
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                  {personal.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                  {personal.title}
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { icon: <GraduationCap size={14} />, text: `${education.degree} · ${education.semester}` },
                { icon: <GraduationCap size={14} />, text: education.university },
                { icon: <MapPin size={14} />, text: personal.location },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — bio + quote + highlights */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.975rem', lineHeight: 1.85, marginBottom: '1.1rem' }}>
              {bio.p1}
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.975rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              {bio.p2}
            </p>

            {/* Personal quote */}
            <blockquote
              style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(245,197,66,0.05)',
                border: '1px solid rgba(245,197,66,0.15)',
                borderLeft: '3px solid var(--color-accent)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '2rem',
                position: 'relative',
              }}
            >
              <Quote size={16} style={{ color: 'var(--color-accent)', opacity: 0.6, marginBottom: '0.375rem' }} />
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 500 }}>
                {personalQuote}
              </p>
            </blockquote>

            {/* Highlight cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="glass-card"
                  style={{
                    padding: '1.125rem 1.25rem',
                    display: 'flex',
                    gap: '0.875rem',
                    alignItems: 'flex-start',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.6s ease ${0.35 + i * 0.1}s, transform 0.6s ease ${0.35 + i * 0.1}s`,
                  }}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(245,197,66,0.1)', border: '1px solid rgba(245,197,66,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-accent)', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display" style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.2rem', color: 'var(--color-text-primary)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
