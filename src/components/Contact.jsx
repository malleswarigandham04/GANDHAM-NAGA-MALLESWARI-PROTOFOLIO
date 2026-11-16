import { ArrowUpRight, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "../data";

function ContactSocial({ href, label, icon }) {
  if (!href) return null;
  const Icon = icon;
  return <a className="contact-social" href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={19} /></a>;
}

export default function Contact() {
  const hasEmail = Boolean(profile.email);
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="eyebrow"><span className="section-index">06</span> / GET IN TOUCH</p>
        <div className="contact-grid">
          <div>
            <h2>Have a good<br />project in <em>mind?</em></h2>
            <p className="contact-intro">I'm open to entry-level opportunities, internships, and meaningful collaborations. Let's connect.</p>
            {hasEmail
              ? <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} /></a>
              : <p className="setup-notice">Add your email in <code>src/data.js</code> to activate the email contact link.</p>}
          </div>
          <div className="contact-details">
            <div className="contact-detail"><Mail size={18} /><span>{profile.email || "Add your professional email"}</span></div>
            <div className="contact-detail"><MapPin size={18} /><span>{profile.location}</span></div>
            <div className="contact-socials">
              <ContactSocial href={profile.github} label="GitHub" icon={Github} />
              <ContactSocial href={profile.linkedin} label="LinkedIn" icon={Linkedin} />
            </div>
            <p className="fine-print">Social icons appear after you add your profile URLs in <code>src/data.js</code>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}