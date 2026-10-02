import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/portfolio";
import TypingTitle from "./TypingTitle";

const Hero = () => {
  const [motionPaused, setMotionPaused] = useState(() => document.documentElement.dataset.motion === "paused");
  const [firstName, ...lastName] = profile.name.split(" ");

  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused ? "paused" : "running";
  }, [motionPaused]);

  return (
    <section id="home" className="hero site-container" tabIndex={-1}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-status"><span className="status-dot" />{profile.role} at {profile.company}</p>
          <p className="hero-greeting">Hi, I'm</p>
          <h1>{firstName}<br /><span>{lastName.join(" ")}</span></h1>
          <TypingTitle paused={motionPaused} />
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-location"><MapPin size={15} aria-hidden="true" />{profile.location}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#work">Explore my work <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link className="button button-secondary" to="/#contact">Get in touch <Mail size={16} aria-hidden="true" /></Link>
          </div>
          <div className="hero-socials">
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} aria-hidden="true" /></a>}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} aria-hidden="true" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email Saurabh"><Mail size={19} aria-hidden="true" /></a>
            <button className="motion-toggle" type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused((paused) => !paused)}>
              {motionPaused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
              {motionPaused ? "Resume motion" : "Pause motion"}
            </button>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-ring" aria-hidden="true" />
          <figure className="portrait-photo">
            <img src={`${import.meta.env.BASE_URL}portrait.webp`} alt={profile.name} width="770" height="1000" fetchPriority="high" />
          </figure>
          <div className="portrait-badge">
            <span className="eyebrow">Currently building</span>
            <strong>Windows onboarding</strong>
            <span>{profile.company}</span>
          </div>
        </div>
      </div>
      <div className="career-strip" aria-label="Engineering experience">
        <span className="eyebrow">Where I've<br />{" "}built software</span>
        <span className="company-name company-microsoft"><span className="microsoft-mark" aria-hidden="true"><i /><i /><i /><i /></span>Microsoft</span>
        <span className="company-name">TestMu AI<span className="company-detail">formerly LambdaTest</span></span>
        <span className="company-name company-fi">fi<span className="company-detail">money</span></span>
        <span className="company-name">Ridecell<span className="company-dot" aria-hidden="true">.</span></span>
      </div>
    </section>
  );
};

export default Hero;
