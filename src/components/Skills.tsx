import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const Skills = () => (
  <section id="skills" className="skills-chapter" tabIndex={-1}>
    <div className="site-container section">
      <SectionHeading number="04" label="Skills" title="Tools I work with"
        description="Languages and tools I've used at work, in personal projects and while teaching." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.title}</h3><p>{group.description}</p>
            <ul className="skill-items">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
