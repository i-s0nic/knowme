import { ArrowUpRight } from "lucide-react";
import { awards, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const Achievements = () => (
  <section id="achievements" className="section site-container" tabIndex={-1}>
    <SectionHeading number="05" label="Recognition" title="Awards from my teams"
      description="Recognition from Microsoft and Fi for my work there." />
    <div className="awards-grid">
      {awards.map((award, index) => (
        <article className="award-card" key={award.title}>
          <div className="award-seal" aria-hidden="true"><span>{index === 0 ? "M" : "fi"}</span></div>
          <p className="eyebrow">{award.issuer}<span className="label-divider">/</span>{award.date}</p>
          <h3>{award.title}</h3><p>{award.description}</p>
        </article>
      ))}
    </div>
    <div className="section-tail"><a className="text-link" href={`${profile.linkedin}details/honors/`} target="_blank" rel="noopener noreferrer">View on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </section>
);

export default Achievements;
