import { Award, HeartHandshake } from "lucide-react";
import { achievements } from "../data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section className="section section-muted" id="achievements">
      <div className="container">
        <SectionHeading index="05" eyebrow="BEYOND THE SCREEN" title="Milestones &" accent="involvement." description="Experiences that reflect teamwork, participation, and a willingness to contribute beyond technical work." />
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <article className="achievement-card" key={item.title}>
              <span className="achievement-icon">{index === 3 ? <HeartHandshake size={20} /> : <Award size={20} />}</span>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              <span className="achievement-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}