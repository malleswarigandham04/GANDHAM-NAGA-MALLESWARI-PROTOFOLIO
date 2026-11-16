import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

function ProjectLink({ href, children, label }) {
  if (!href) return <span className="project-link-disabled" title="Add your project URL in src/data.js">{children} {label}</span>;
  return <a className="project-link" href={href} target="_blank" rel="noreferrer">{children} {label}</a>;
}

export default function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <SectionHeading index="03" eyebrow="SELECTED WORK" title="Ideas turned into" accent="projects." description="A selection of academic, internship, and frontend work. Open each repository or demo after adding your verified project links." />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image"><img src={project.image} alt="" /><span className="project-number">{project.number}</span></div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="contribution"><strong>My work:</strong> {project.contribution}</p>
                <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-actions">
                  <ProjectLink href={project.github}><Github size={15} /> <span>GitHub</span></ProjectLink>
                  <ProjectLink href={project.demo}><ExternalLink size={15} /> <span>Live demo</span></ProjectLink>
                  <ArrowUpRight className="project-arrow" size={19} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}