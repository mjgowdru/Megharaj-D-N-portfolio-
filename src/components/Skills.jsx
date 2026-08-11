import { useEffect, useRef, useState } from 'react'
import { skillGroups, extraTech } from '../data/portfolio'

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

function SkillBar({ name, level, visible, delay }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
        <span style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 700, opacity: visible ? 1 : 0, transition: `opacity 0.4s ${delay + 0.6}s` }}>
          {level}%
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: visible ? `${level}%` : '0%', transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" ref={ref} className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Expertise</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            The tools and technologies I reach for when building real-world applications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="glass-card" style={{ padding: '1.75rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${gi * 0.1}s, transform 0.7s ease ${gi * 0.1}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '1.25rem' }}>{group.emoji}</span>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} delay={gi * 0.1 + si * 0.08} />
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Also worked with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {extraTech.map((t) => <span key={t} className="skill-pill">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
