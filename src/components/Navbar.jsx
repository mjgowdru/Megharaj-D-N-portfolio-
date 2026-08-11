import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { personal } from '../data/portfolio'

const navItems = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Journey',    href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '0 1.5rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
          background: scrolled
            ? 'rgba(11,11,15,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
          aria-label="Back to top"
        >
          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #F5C542, #D4A82A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.9rem',
              color: '#0B0B0F',
              letterSpacing: '-0.02em',
            }}
          >
            {personal.initials}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            {personal.firstName.toUpperCase()}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          className="hidden md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
              className={`nav-link ${activeLink === item.href ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="btn-accent"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-primary)',
            padding: '0.5rem',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-primary)',
          }}
        >
          <X size={26} />
        </button>

        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.75rem',
              color: activeLink === item.href
                ? 'var(--color-accent)'
                : 'var(--color-text-primary)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              animationDelay: `${i * 0.05}s`,
            }}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
          className="btn-accent"
          style={{ marginTop: '1rem' }}
        >
          Hire Me
        </a>
      </div>
    </>
  )
}
