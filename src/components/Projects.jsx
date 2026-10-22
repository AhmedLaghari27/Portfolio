import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useRevealOnScroll()

  return (
    <section id="projects" className="section" ref={ref}>
      <SectionHeading eyebrow="02 / Projects" title="Things I've built" />

      <ul className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </ul>

      <p className="projects-more" data-reveal>
        More on{' '}
        <a href="https://github.com/AhmedLaghari27" target="_blank" rel="noopener noreferrer">
          my GitHub profile
        </a>
        .
      </p>
    </section>
  )
}