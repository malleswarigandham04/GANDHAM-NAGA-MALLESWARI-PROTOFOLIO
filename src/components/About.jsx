import SectionHeading from "./SectionHeading";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container">
        <SectionHeading index="01" eyebrow="A LITTLE INTRODUCTION" title="More than a" accent="title." />
        <div className="about-grid">
          <div className="about-statement">
            <span className="big-quote">“</span>
            <h3>I like understanding how things work — then building something useful with that knowledge.</h3>
          </div>
          <div className="about-copy">
            <p>
              I'm a Computer Science graduate from RVR & JC College of Engineering, Guntur,
              with an interest in Artificial Intelligence, Machine Learning, and Full Stack Development.
            </p>
            <p>
              I've explored machine learning through projects in fraud detection, house-price prediction,
              and fingerprint-image classification. I also enjoy creating responsive web interfaces with React.
            </p>
            <p>
              I'm looking for an opportunity to apply my technical foundation, learn from experienced teams,
              and contribute to practical software solutions.
            </p>
            <div className="about-note"><Sparkles size={17} /><span>Always learning. Always improving.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}