import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import SystemSketch from '../components/SystemSketch'
import { site } from '../data/site'
import { scrollToId } from '../utils/scrollToId'

export default function Hero() {
  return (
    <section id="home" className="section pt-16 sm:pt-20">
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow">Software Developer · {site.location}</p>
          <h1 className="display mt-4 text-[2.7rem] text-ink sm:text-6xl lg:text-[4.4rem]">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-ink/90">{site.role}</p>
          <p className="mt-5 max-w-xl text-muted">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('projects')
              }}
            >
              View Projects
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('contact')
              }}
            >
              Contact Me
            </Button>
          </div>
          <SocialLinks className="mt-8" />
        </Reveal>
        <Reveal delay={120} className="hidden justify-center sm:flex lg:justify-end">
          <div className="card w-full max-w-md p-6">
            <SystemSketch />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
