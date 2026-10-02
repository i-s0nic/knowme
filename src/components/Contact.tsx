import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const Contact = () => (
  <section id="contact" className="contact-section" tabIndex={-1}>
    <div className="site-container">
      <p className="eyebrow">Get in touch</p>
      <div className="contact-heading"><h2>Say hello.</h2></div>
      <div className="contact-bottom">
        <p>Have a question about my work, or something you'd like to build together?<br />Send me an email.</p>
        <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{profile.email}<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
      <div className="contact-socials">
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
        {profile.github && <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>}
        <span>{profile.location}</span>
      </div>
    </div>
  </section>
);

export default Contact;
