import './App.css'
import Contact from './sections/Contact/Contact'
import Experience from './sections/Experience/Experience'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Navbar from './sections/Navbar/Navbar'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
