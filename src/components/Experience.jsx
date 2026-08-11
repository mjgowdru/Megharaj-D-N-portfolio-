import { useEffect, useRef, useState } from 'react'
import { Briefcase, Code2, Trophy, Mic, GitBranch, Plus } from 'lucide-react'
import { activities } from '../data/portfolio'

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

const CATEGORY_ICONS = {
  'Internships':         <Briefcase size={18} />,
  'Academic Projects':   <Code2 size={18} />,
  'Hackathons':          <Trophy size={18} />,
  'Technical Events':    <Mic size={18} />,
  'Open-Source Learning':<GitBranch size={18} />,
}

const STATUS_COLOR = {
  'Open':     '#4ade80',
  'Ongoing':  '#F5C542',
  'Upcoming': '#94A3B8',
  'Active':   '#4ade80',
  'Learning': '#a78bfa',
}

export default function Experience() {
  const [ref, visible] = useInView()

  return (
    <section id="experience" ref={ref} className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Activities</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Experience & <span className="gradient-text">Activities</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', maxWidth: '460px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            How I'm growing beyond the classroom — one project, event, and collaboration at a time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {activities.map((activity, i) => {
            const color = STATUS_COLOR[activity.status] || '#94A3B8'
            const icon  = CATEGORY_ICONS[activity.category] || <Briefcase size={18} />
            return (
              <article key={activity.category} className="glass-card" style={{ padding: '1.75rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245,197,66,0.08)', border: '1px solid rgba(245,197,66,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                      {activity.category}
                    </span>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: `${color}14`, border: `1px solid ${color}28`, fontSize: '0.65rem', fontWeight: 700, color, flexShrink: 0 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: color }} />
                    {activity.status}
                  </span>
                </div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: '0.975rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {activity.title}
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '0.875rem' }}>
                  {activity.description}
                </p>
                <div style={{ padding: '0.45rem 0.75rem', background: 'rgba(245,197,66,0.05)', border: '1px solid rgba(245,197,66,0.1)', borderRadius: 'var(--radius-sm)', fontSize: '0.73rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  {activity.note}
                </div>
              </article>
            )
          })}

          {/* Placeholder card */}
          <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: 'var(--radius-xl)', background: 'transparent', opacity: visible ? 1 : 0, transition: `opacity 0.7s ease ${activities.length * 0.1}s` }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
              <Plus size={18} />
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              More experiences added as the journey unfolds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
