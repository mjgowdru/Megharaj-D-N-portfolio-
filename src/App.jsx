import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Journey    from './components/Journey'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
