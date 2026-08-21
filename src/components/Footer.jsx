import { Mail, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../data/portfolio'

const NAV = [
  ['About','#about'],['Skills','#skills'],['Projects','#projects'],
  ['Experience','#experience'],['Education','#education'],
  ['Achievements','#achievements'],['Certifications','#certifications'],['Contact','#contact'],
]

function goto(href, e) {
  e?.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background:'var(--bg-soft)', borderTop:'1px solid var(--border)', padding:'56px 0 32px' }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:40, marginBottom:48, paddingBottom:40, borderBottom:'1px solid var(--border)' }} className="footer-top">
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <span style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#3baed1,#63caec)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:13, color:'#04060f', boxShadow:'0 4px 12px rgba(99,202,236,0.22)' }}>PM</span>
              <div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'var(--t1)', lineHeight:1 }}>Prathiksha P Mallya</div>
                <div style={{ fontSize:11, color:'var(--cyan)', fontWeight:600, marginTop:2 }}>AI & ML · Full Stack Developer</div>
              </div>
            </div>
            <p style={{ fontSize:12.5, color:'var(--t3)', lineHeight:1.7, maxWidth:260 }}>
              Building intelligent AI solutions and robust full-stack applications. Open to exciting opportunities.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--t3)', marginBottom:16 }}>Navigation</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px 20px' }}>
              {NAV.map(([label, href]) => (
                <a key={href} href={href}
                  onClick={(e) => goto(href, e)}
                  style={{ fontSize:13, color:'var(--t2)', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color='var(--cyan)'}
                  onMouseLeave={e => e.target.style.color='var(--t2)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--t3)', marginBottom:16 }}>Connect</p>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {[
                { icon:<FaGithub size={14}/>, label:'GitHub', href:personal.github },
                { icon:<FaLinkedin size={14}/>, label:'LinkedIn', href:personal.linkedin },
                { icon:<Mail size={14}/>, label:personal.email, href:`mailto:${personal.email}` },
              ].map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:8, fontSize:12.5, color:'var(--t2)', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--t2)'}
                >
                  <span style={{ color:'var(--cyan)' }}>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, flexWrap:'wrap' }}>
          <p style={{ fontSize:11.5, color:'var(--t3)', fontWeight:500 }}>
            © {new Date().getFullYear()} Prathiksha P Mallya · Built with React & Vite
          </p>
          <button
            onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            aria-label="Back to top"
            style={{ width:36, height:36, borderRadius:9, background:'rgba(99,202,236,0.07)', border:'1px solid rgba(99,202,236,0.15)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)', cursor:'pointer', transition:'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(99,202,236,0.18)'; e.currentTarget.style.borderColor='rgba(99,202,236,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(99,202,236,0.07)'; e.currentTarget.style.borderColor='rgba(99,202,236,0.15)' }}
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @media(min-width:700px){ .footer-top{ grid-template-columns:1.2fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  )
}
