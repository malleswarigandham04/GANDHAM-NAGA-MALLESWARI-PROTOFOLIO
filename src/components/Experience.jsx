import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { experience, education } from "../data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading index="04" eyebrow="THE JOURNEY SO FAR" title="Experience &" accent="education." />
        <div className="journey-grid">
          <div>
            <div className="journey-label"><BriefcaseBusiness size={18} /> EXPERIENCE</div>
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-dot" />
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.organization} · {item.location}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
          <div>
            <div className="journey-label"><GraduationCap size={18} /> EDUCATION</div>
            {education.map((item) => (
              <article className="timeline-item" key={item.institution}>
                <span className="timeline-dot" />
                <p className="timeline-period">{item.year}</p>
                <h3>{item.qualification}</h3>
                <p className="timeline-org">{item.institution}</p>
                <p className="timeline-text">{item.location}</p>
                <p className="timeline-text">{item.specialization}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}