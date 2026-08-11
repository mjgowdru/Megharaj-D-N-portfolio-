import { useEffect, useRef, useState } from 'react'
import { GitFork, ExternalLink, Layers } from 'lucide-react'
import { projects } from '../data/portfolio'

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

// gradient backgrounds keyed by accent
const BG_MAP = {
  '#F5C542': 'linear-gradient(135deg, rgba(245,197,66,0.1) 0%, rgba(245,197,66,0.02) 100%)',
  '#63b3ed': 'linear-gradient(135deg, rgba(99,179,237,0.1) 0%, rgba(99,179,237,0.02) 100%)',
}

function ProjectCard({ project, visible, delay }) {
  const [hovered, setHovered] = useState(false)
  const bg = BG_MAP[project.accentColor] || 'rgba(255,255,255,0.02)'

  return (
    <article
      id={`project-${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        border: `1px solid ${hovered ? project.accentColor + '40' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: hovered ? `0 12px 50px rgba(0,0,0,0.4), 0 0 40px ${project.accentColor}14` : '0 4px 32px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Corner glow */}
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: `radial-gradient(circle, ${project.accentColor}14 0%, transparent 70%)`, opacity: hovered ? 1 : 0, transition: 'opacity 0.4s', pointerEvents: 'none' }} />

      <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: project.accentColor }}>
        {project.label}
      </span>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <span style={{ fontSize: '1.4rem' }}>{project.icon}</span>
            <h3 className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', color: 'var(--color-text-primary)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              {project.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
            {project.subtitle}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub — ${project.title}`}
              style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              <GitFork size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo — ${project.title}`}
              style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
        {project.description}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', listStyle: 'none' }}>
        {project.highlights.map((h) => (
          <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: project.accentColor, flexShrink: 0, marginTop: '0.45rem' }} />
            {h}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.25rem' }}>
        {project.tech.map((t) => (
          <span key={t} className="tech-tag" style={{ borderColor: `${project.accentColor}30`, color: project.accentColor, background: `${project.accentColor}0d` }}>
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const [ref, visible] = useInView()

  return (
    <section id="projects" ref={ref} className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>
            <Layers size={12} /> Selected Work
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            End-to-end applications combining AI, blockchain, and full-stack engineering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} visible={visible} delay={i * 0.15} />
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>
            More coming —{' '}
            <a href={projects[0]?.githubUrl || '#'} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
              follow on GitHub
            </a>{' '}
            for updates.
          </p>
        </div>
      </div>
    </section>
  )
}
