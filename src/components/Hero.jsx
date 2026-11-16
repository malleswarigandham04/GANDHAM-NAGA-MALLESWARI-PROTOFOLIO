import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "../data";

function SocialLink({ href, label, children }) {
  if (!href) return null;
  return <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR ENTRY-LEVEL OPPORTUNITIES</p>
          <h1>Building digital<br /><em>experiences</em> with<br />intelligent ideas.</h1>
          <p className="hero-intro">
            I'm <strong>{profile.name}</strong>, an AI/ML graduate and aspiring Full Stack Developer.
            I enjoy turning ideas into practical applications through machine learning and web technologies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-outline" href={profile.resume} download>Download resume <Download size={16} /></a>
          </div>
          <div className="hero-socials">
            <SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink>
            <span className="social-note">SCROLL TO DISCOVER</span>
            <a className="scroll-link" href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src={profile.photo}
              alt={`${profile.name} profile`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "grid";
              }}
            />
            <div className="portrait-fallback"><span>{profile.shortName}</span><small>ADD YOUR PHOTO<br />TO public/profile.jpg</small></div>
          </div>
          <div className="visual-tag tag-top">AI / ML <span>✳</span></div>
          <div className="visual-tag tag-bottom">FULL STACK DEVELOPER</div>
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
        </div>
      </div>
      <div className="hero-bottom container">
        <span>BASED IN {profile.location.toUpperCase()}</span>
        <span>CURIOUS BY NATURE. BUILDER BY CHOICE.</span>
      </div>
    </section>
  );
}