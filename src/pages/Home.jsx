import About from '../sections/About'
import Contact from '../sections/Contact'
import Direction from '../sections/Direction'
import Experience from '../sections/Experience'
import GithubCta from '../sections/GithubCta'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Direction />
      <Skills />
      <GithubCta />
      <Contact />
    </>
  )
}
