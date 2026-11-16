export default function SectionHeading({ index, eyebrow, title, accent, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="section-index">{index}</span> / {eyebrow}</p>
        <h2>{title} <em>{accent}</em></h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}