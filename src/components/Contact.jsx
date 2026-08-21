import { useRef, useState, useEffect } from 'react'
import { personal } from '../data/portfolio'
import { Mail, Phone, Send, CheckCircle, MapPin } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function useFade() {
  const ref = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.06 })
    if (ref.current) o.observe(ref.current); return () => o.disconnect()
  }, [])
  return { ref, v }
}

const INFO = [
  { icon: <Mail size={15} />, label: 'Email', val: personal.email, href: `mailto:${personal.email}` },
  { icon: <Phone size={15} />, label: 'Phone', val: personal.phone, href: `tel:${personal.phone}` },
  { icon: <FaLinkedin size={14} />, label: 'LinkedIn', val: 'linkedin.com/in/prathiksha-p-mallyya', href: personal.linkedin },
  { icon: <FaGithub size={14} />, label: 'GitHub', val: 'github.com/prathzeee26', href: personal.github },
  { icon: <MapPin size={14} />, label: 'Location', val: 'Karnataka, India · Open to Remote', href: null },
]

function Label({ children }) {
  return <p style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--t3)', marginBottom:6 }}>{children}</p>
}

export default function Contact() {
  const { ref, v } = useFade()
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  const update = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setBusy(true)
    const msg = { ...form, id: Date.now(), at: new Date().toLocaleString() }
    try {
      const prev = JSON.parse(localStorage.getItem('portfolio_messages') || '[]')
      localStorage.setItem('portfolio_messages', JSON.stringify([msg, ...prev]))
      console.log('%c📬 Message received', 'color:#63caec;font-weight:bold;font-size:14px', msg)
    } catch (_) {}
    await new Promise(r => setTimeout(r, 1100))
    setBusy(false)
    setDone(true)
  }

  return (
    <section id="contact" ref={ref} className="section" style={{ background:'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:64, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(16px)', transition:'all 0.6s var(--ease-out)' }}>
          <p className="eyebrow" style={{ justifyContent:'center' }}>Contact</p>
          <h2 className="section-title">
            Let's <span className="text-grad-cyan">Work</span>{' '}
            <span className="text-grad-amber">Together</span>
          </h2>
          <p className="section-desc" style={{ margin:'12px auto 0', textAlign:'center' }}>
            Open to full-time roles, internships, freelance projects, and technical collaborations.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:32, alignItems:'start', maxWidth:1040, margin:'0 auto' }} className="contact-grid">
          {/* LEFT — Info */}
          <div style={{ opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(-16px)', transition:'all 0.7s var(--ease-out)' }}>
            {/* Avatar strip */}
            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28, padding:'16px 20px', borderRadius:14, background:'var(--bg-card)', border:'1px solid var(--border)' }}>
              <div style={{ width:48, height:48, borderRadius:12, overflow:'hidden', background:'var(--bg-card-2)', border:'1px solid var(--border)', flexShrink:0 }}>
                <img src={personal.profilePhoto} alt={personal.name}
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}
                  onError={e => e.target.style.display='none'}
                />
              </div>
              <div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:15, color:'var(--t1)' }}>{personal.name}</div>
                <div style={{ fontSize:12, color:'var(--cyan)', fontWeight:600, marginTop:2 }}>AI/ML Engineer · Java Developer</div>
              </div>
              <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:6, fontSize:11.5, fontWeight:600, color:'#22c55e' }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 6px #22c55e' }} />
                Available
              </div>
            </div>

            {/* Contact items */}
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {INFO.map((item, i) => (
                <div key={item.label}
                  className="card"
                  style={{
                    padding:'14px 18px', display:'flex', alignItems:'center', gap:14,
                    opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(-12px)',
                    transition: `all 0.6s ${0.08 * i}s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s`,
                  }}
                >
                  <div style={{ width:34, height:34, borderRadius:9, background:'rgba(99,202,236,0.07)', border:'1px solid rgba(99,202,236,0.13)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)', flexShrink:0 }}>
                    {item.icon}
                  </div>
                  <div style={{ minWidth:0, flex:1 }}>
                    <div style={{ fontSize:9.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.14em', color:'var(--t3)', marginBottom:2 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ fontSize:13, color:'var(--t2)', textDecoration:'none', display:'block', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', transition:'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color='var(--cyan)'}
                        onMouseLeave={e => e.target.style.color='var(--t2)'}
                      >{item.val}</a>
                    ) : (
                      <span style={{ fontSize:13, color:'var(--t2)' }}>{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            className="card"
            style={{
              padding:'32px 36px',
              opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(16px)',
              transition:'all 0.7s 0.1s var(--ease-out), border-color 0.25s, box-shadow 0.25s, transform 0.25s',
            }}
          >
            {done ? (
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', gap:16, padding:'40px 0' }}>
                <div style={{ width:56, height:56, borderRadius:16, background:'rgba(99,202,236,0.08)', border:'1px solid rgba(99,202,236,0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)' }}>
                  <CheckCircle size={26} />
                </div>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--t1)' }}>Message Sent!</h3>
                <p style={{ fontSize:13.5, color:'var(--t2)', maxWidth:280, lineHeight:1.65 }}>
                  Thank you for reaching out. I'll reply within 24–48 hours.
                </p>
                <button onClick={() => { setDone(false); setForm({ name:'', email:'', subject:'', message:'' }) }}
                  className="btn btn-secondary" style={{ marginTop:8 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} id="contact-form" style={{ display:'flex', flexDirection:'column', gap:18 }}>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17, color:'var(--t1)', marginBottom:4 }}>Send a Message</h3>

                <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:14 }} className="form-row">
                  <div>
                    <Label>Your Name</Label>
                    <input name="name" type="text" required placeholder="Jane Smith"
                      value={form.name} onChange={update} className="field" id="contact-name"
                    />
                  </div>
                  <div>
                    <Label>Email Address</Label>
                    <input name="email" type="email" required placeholder="jane@company.com"
                      value={form.email} onChange={update} className="field" id="contact-email"
                    />
                  </div>
                </div>

                <div>
                  <Label>Subject</Label>
                  <input name="subject" type="text" placeholder="Job Opportunity / Collaboration / Hello"
                    value={form.subject} onChange={update} className="field" id="contact-subject"
                  />
                </div>

                <div>
                  <Label>Message</Label>
                  <textarea name="message" required rows={5} placeholder="Tell me about the opportunity or project..."
                    value={form.message} onChange={update}
                    className="field" id="contact-message"
                    style={{ resize:'vertical', minHeight:120 }}
                  />
                </div>

                <button type="submit" disabled={busy}
                  className="btn btn-primary" id="contact-submit"
                  style={{ width:'100%', padding:'13px', justifyContent:'center', fontSize:14 }}
                >
                  {busy ? (
                    <><span style={{ width:16, height:16, border:'2px solid rgba(255,255,255,0.3)', borderTopColor:'#04060f', borderRadius:'50%', animation:'spin 0.7s linear infinite', display:'inline-block' }} /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){ .contact-grid{ grid-template-columns:1fr 1.4fr !important; } }
        @media(min-width:600px){ .form-row{ grid-template-columns:1fr 1fr !important; } }
        @keyframes spin{ to{ transform:rotate(360deg); } }
      `}</style>
    </section>
  )
}
