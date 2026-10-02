import { ArrowUpRight, Plus } from "lucide-react";
import { type Project } from "@/data/portfolio";
import ScrollDetails from "./ScrollDetails";
import ProjectIllustration from "./ProjectIllustration";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <article className={`project-card project-tone-${index % 3}`} data-project={project.id}>
      <div className="project-cover" aria-hidden="true">
        <span className="project-cover-index">{String(index + 1).padStart(2, "0")}</span>
        <ProjectIllustration project={project.id} />
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.category}{project.period && <><span className="label-divider">/</span>{project.period}</>}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technology-list">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
        <ScrollDetails className="project-details">
          <summary><span>About this project<span className="sr-only">: {project.title}</span></span><Plus size={17} aria-hidden="true" /></summary>
          <div className="detail-content">
            <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            {project.technologies.length > 4 && <><h4>Also built with</h4><p>{project.technologies.slice(4).join(", ")}</p></>}
          </div>
        </ScrollDetails>
        {project.link && <a className="text-link project-external" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>
    </article>
  );
};

export default ProjectCard;
