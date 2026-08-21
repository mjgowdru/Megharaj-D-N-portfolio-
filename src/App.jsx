import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const fn = () => setShowBtn(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      {/* Floating mobile contact button */}
      <a
        href="#contact"
        onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' }) }}
        aria-label="Go to Contact"
        style={{
          position:'fixed', bottom:24, right:24, zIndex:40,
          width:52, height:52, borderRadius:14,
          background:'linear-gradient(135deg,#3baed1,#63caec)',
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'#04060f', boxShadow:'0 8px 32px rgba(99,202,236,0.35)',
          transition:'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          opacity: showBtn ? 1 : 0,
          transform: showBtn ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(16px)',
          pointerEvents: showBtn ? 'auto' : 'none',
        }}
        className="md-hidden"
      >
        <Mail size={20} />
      </a>

      <style>{`
        @media(min-width:768px){ .md-hidden{ display:none !important; } }
      `}</style>
    </>
  )
}
