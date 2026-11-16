import { Code2, BrainCircuit, Database, Wrench } from "lucide-react";
import { skills } from "../data";
import SectionHeading from "./SectionHeading";

const icons = [Code2, Code2, Database, BrainCircuit, Wrench];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading index="02" eyebrow="WHAT I WORK WITH" title="Tools of the" accent="trade." description="A growing toolkit across software development and machine learning. I keep this list focused on technologies I can discuss and demonstrate." />
        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-card" key={group.group}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="card-number">0{index + 1}</span></div>
                <h3>{group.group}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            );
          })}
        </div>
        <p className="fine-print">Note: Update this list to reflect your current confidence and hands-on experience before sharing your portfolio.</p>
      </div>
    </section>
  );
}