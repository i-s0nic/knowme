import { Plus, ArrowUpRight } from "lucide-react";
import { education, certifications, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ScrollDetails from "./ScrollDetails";

const Education = () => (
  <section id="education" className="section site-container" tabIndex={-1}>
    <SectionHeading number="06" label="Education & certifications" title="Where I studied"
      description="I studied Information Technology at IET Lucknow, where I also took part in competitive programming." />
    <div className="learning-grid">
      <div className="degree-card">
        <p className="eyebrow">Education</p>
        <h3>{education[0].school}</h3><p>{education[0].degree}</p>
        <div className="degree-meta"><span>{education[0].period}</span><strong>{education[0].grade}</strong></div>
        <p className="degree-note">I also mentored fellow students at Fractal, our college coding club.</p>
        <ScrollDetails className="school-details">
          <summary><span>Earlier education</span><Plus size={17} aria-hidden="true" /></summary>
          <div className="detail-content">{education.slice(1).map((entry) => <div className="school-entry" key={entry.degree}><h4>{entry.school}</h4><p>{entry.degree}</p><p>{entry.period} / {entry.grade}</p></div>)}</div>
        </ScrollDetails>
      </div>
      <div className="certification-card">
        <p className="eyebrow">Courses and certificates</p>
        <h3>What else I've studied</h3>
        <p>Mostly algorithms and problem solving, with courses in communication and patent law too.</p>
        <ScrollDetails className="certification-details">
          <summary><span>Explore all {certifications.length} certifications</span><Plus size={17} aria-hidden="true" /></summary>
          <ul className="certification-list">{certifications.map((certificate) => <li key={certificate.title}><h4>{certificate.title}</h4><p>{certificate.issuer}<span className="label-divider">/</span>{certificate.date}</p></li>)}</ul>
        </ScrollDetails>
        <a className="text-link" href={`${profile.linkedin}details/certifications/`} target="_blank" rel="noopener noreferrer">Credentials on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);

export default Education;
