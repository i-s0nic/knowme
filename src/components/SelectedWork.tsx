import { Plus } from "lucide-react";
import { stories } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import SystemIllustration from "./SystemIllustration";
import ScrollDetails from "./ScrollDetails";

const SelectedWork = () => (
  <section id="work" className="section site-container" tabIndex={-1}>
    <SectionHeading number="01" label="Selected work" title="What I've worked on"
      description="Some of the work I've done with my teams at Microsoft, TestMu AI and Fi." />
    <div className="work-grid">
      {stories.map((story, index) => (
        <article key={story.id} className={`story-card story-${story.id}`}>
          <SystemIllustration variant={index === 0 ? "windows" : index === 1 ? "hyperexecute" : "fi"} />
          <div className="story-content">
            <p className="eyebrow">{story.company}<span className="label-divider">/</span>{story.eyebrow}</p>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <div className="technology-list">{story.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <ScrollDetails className="story-details">
              <summary><span>What I worked on<span className="sr-only">: {story.title}</span></span><Plus size={18} aria-hidden="true" /></summary>
              <div className="detail-content">
                <ul>{story.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
              </div>
            </ScrollDetails>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SelectedWork;
