import { useEffect, useRef, useState } from 'react'
import { Mail, GitFork, Link, Send, MapPin, MessageSquare } from 'lucide-react'
import { personal } from '../data/portfolio'

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

export default function Contact() {
  const [ref, visible] = useInView()
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending,   setSending]   = useState(false)

  const contactInfo = [
    { icon: <Mail size={16} />,    label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
    { icon: <GitFork size={16} />, label: 'GitHub',   value: 'github.com/megharajdn', href: personal.github },
    { icon: <Link size={16} />,    label: 'LinkedIn', value: 'linkedin.com/in/megharajdn', href: personal.linkedin },
    { icon: <MapPin size={16} />,  label: 'Location', value: personal.location, href: null },
  ]

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Wire to Formspree / EmailJS here — see portfolio guide
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>
            <MessageSquare size={12} /> Get In Touch
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', maxWidth: '460px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            Open to internships, project collaborations, and conversations about AI & software engineering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Contact info */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ready to collaborate?</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you're a recruiter, fellow student, or engineer with an interesting problem — I'd love to hear from you. I typically respond within 24–48 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactInfo.map((item, i) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-16px)', transition: `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.6s ease ${0.1 + i * 0.08}s` }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245,197,66,0.07)', border: '1px solid rgba(245,197,66,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.1rem' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {personal.available && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '9999px', fontSize: '0.78rem', color: '#4ade80', fontWeight: 600 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                Available for internships & collaborations
              </div>
            )}
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: '2rem', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✅</div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Message Sent!</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Thanks for reaching out. I'll reply within 24–48 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form" noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  {[
                    { id: 'contact-name',  name: 'name',  type: 'text',  label: 'Name',  placeholder: 'Your name' },
                    { id: 'contact-email', name: 'email', type: 'email', label: 'Email', placeholder: 'your@email.com' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.375rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{f.label}</label>
                      <input id={f.id} name={f.name} type={f.type} required placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} className="form-input" />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.375rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Subject</label>
                  <input id="contact-subject" name="subject" type="text" required placeholder="Internship / Collaboration / ..." value={form.subject} onChange={handleChange} className="form-input" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.375rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Message</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} className="form-input" style={{ resize: 'vertical', minHeight: '120px' }} />
                </div>
                <button type="submit" id="contact-submit" className="btn-accent" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                  {sending ? (
                    <><span style={{ width: '15px', height: '15px', border: '2px solid rgba(0,0,0,0.25)', borderTopColor: '#0B0B0F', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
