export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}