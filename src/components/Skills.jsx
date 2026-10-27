import SectionHeading from './SectionHeading'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const ref = useRevealOnScroll()

  return (
    <section id="skills" className="section" ref={ref}>
      <SectionHeading eyebrow="03 / Skills" title="Tools & technologies" />

      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const GroupIcon = group.icon
          return (
            <article
              key={group.title}
              className={`skill-group${group.featured ? ' featured' : ''}`}
              data-reveal
              style={{ '--i': i % 2 }}
            >
              <header className="skill-group-head">
                <span className="skill-group-icon" aria-hidden="true">
                  <GroupIcon size={22} stroke={1.75} />
                </span>
                <h3>{group.title}</h3>
              </header>

              <ul className="skill-list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <li key={skill.name} className="skill-chip">
                      <Icon size={18} stroke={1.75} aria-hidden="true" />
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}