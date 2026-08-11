import { GitFork, Link, Mail, ArrowUp } from 'lucide-react'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Journey',    href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const socials = [
  { icon: <GitFork size={16} />, href: personal.github,   label: 'GitHub'   },
  { icon: <Link size={16} />,    href: personal.linkedin,  label: 'LinkedIn' },
  { icon: <Mail size={16} />,    href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer role="contentinfo" style={{ background: 'var(--color-bg)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <span style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'linear-gradient(135deg, #F5C542, #D4A82A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: '#0B0B0F' }}>
                {personal.initials}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                {personal.name}
              </span>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '230px' }}>
              {personal.title}. Building intelligent systems with Python, NLP, and scalable backend technologies.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + location */}
          <div>
            <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '1.25rem', padding: '0.5rem 0.875rem', background: 'rgba(245,197,66,0.05)', border: '1px solid rgba(245,197,66,0.1)', borderRadius: 'var(--radius-md)', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              📍 {personal.location}
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              © {new Date().getFullYear()} {personal.name}. Built with React + Vite + Tailwind.
            </p>
          </div>
          <button onClick={scrollToTop} aria-label="Scroll to top"
            style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245,197,66,0.08)', border: '1px solid rgba(245,197,66,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(245,197,66,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(245,197,66,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
