import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const ProjectPreview = () => (
  <section id="projects" className="section site-container" tabIndex={-1}>
    <SectionHeading number="03" label="Projects" title="A few things I've built"
      description="A feature I built at Fi, alongside personal projects from my time learning web development and algorithms." />
    <div className="project-preview-grid">{projects.slice(0, 2).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    <div className="section-tail"><span>{projects.length} projects</span><Link to="/projects" className="text-link">All projects <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
  </section>
);

export default ProjectPreview;
