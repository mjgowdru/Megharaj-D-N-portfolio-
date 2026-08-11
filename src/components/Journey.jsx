import { useEffect, useRef, useState } from 'react'
import { Code, BookOpen, Cpu, Layout, Target } from 'lucide-react'
import { journeyItems } from '../data/portfolio'

function useInView(threshold = 0.1) {
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

const STATUS_COLOR = {
  'Active':      '#4ade80',
  'In Progress': '#F5C542',
  'Upcoming':    '#94A3B8',
  'Done':        '#a78bfa',
}

const ICONS = [<Code size={18} />, <BookOpen size={18} />, <Cpu size={18} />, <Layout size={18} />, <Target size={18} />]

export default function Journey() {
  const [ref, visible] = useInView()

  return (
    <section id="journey" ref={ref} className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Continuous Learning</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', maxWidth: '460px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            A structured roadmap from fundamentals to production-ready engineering.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '20px', top: '12px', bottom: '12px', width: '1px', background: 'linear-gradient(180deg, var(--color-accent) 0%, rgba(245,197,66,0.1) 100%)', opacity: 0.3 }} aria-hidden="true" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {journeyItems.map((item, i) => {
              const color = STATUS_COLOR[item.status] || '#94A3B8'
              return (
                <div key={item.title} style={{ display: 'flex', gap: '1.5rem', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-24px)', transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s` }}>
                  <div style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '12px', background: 'var(--color-surface-2)', border: '1px solid rgba(245,197,66,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', marginTop: '0.125rem', position: 'relative', zIndex: 1, boxShadow: '0 0 0 4px var(--color-surface)' }}>
                    {ICONS[i] || <Code size={18} />}
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', display: 'block', marginBottom: '0.2rem' }}>{item.phase}</span>
                        <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                      </div>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.22rem 0.7rem', borderRadius: '9999px', background: `${color}14`, border: `1px solid ${color}28`, fontSize: '0.68rem', fontWeight: 700, color }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color }} />
                        {item.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '0.875rem' }}>{item.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {item.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
