import SectionHeading from './SectionHeading'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import { aboutParagraphs, facts, highlights, stats } from '../data/about'

export default function About() {
  const ref = useRevealOnScroll()

  return (
    <section id="about" className="section" ref={ref}>
      <SectionHeading eyebrow="01 / About" title="About me" />

      <div className="about-grid">
        <div className="about-text">
          {aboutParagraphs.map((text, i) => (
            <p key={i} data-reveal style={{ '--i': i + 1 }}>
              {text}
            </p>
          ))}

          <dl
            className="facts"
            data-reveal
            style={{ '--i': aboutParagraphs.length + 1 }}
          >
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="about-cards">
          {highlights.map((h, i) => (
            <li
              key={h.title}
              className="about-card"
              data-reveal
              style={{ '--i': i + 2 }}
            >
              <span className="card-index" aria-hidden="true">
                {`0${i + 1}`}
              </span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <ul className="stats">
        {stats.map((s, i) => (
          <li key={s.label} data-reveal style={{ '--i': i }}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}