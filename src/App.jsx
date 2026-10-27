import './App.css'
import MotionProvider from './motion/MotionProvider'
import ScrollProgress from './motion/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </MotionProvider>
  )
}