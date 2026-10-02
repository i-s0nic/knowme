import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RouteScroll from "@/components/RouteScroll";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

type Filter = "All" | "Personal" | "Professional";
const filters: Filter[] = ["All", "Personal", "Professional"];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter);

  return (
    <>
      <SEO title={`Projects | ${profile.name}`} path="projects"
        description="A collection of personal projects and professional contributions by Saurabh Upadhayay, from financial tools and community platforms to algorithms." />
      <Header />
      <main id="main-content" className="site-container projects-page" tabIndex={-1}>
        <Link to="/#projects" className="text-link page-back"><ArrowLeft size={15} aria-hidden="true" />Back to the portfolio</Link>
        <div className="projects-intro">
          <div><p className="eyebrow">Projects</p><h1>Things I've built.</h1></div>
          <p>Projects from college, things I built to learn, and a feature I worked on at Fi.</p>
        </div>
        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((item) => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <p className="project-count" role="status" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"} / {filter === "All" ? "all projects" : filter.toLowerCase()}</p>
        </div>
        <h2 className="sr-only">Project results</h2>
        {visibleProjects.length > 0 ? (
          <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}</div>
        ) : <p className="source-note">No projects in this category. Choose All to see the others.</p>}
      </main>
      <Footer />
      <RouteScroll />
      <ScrollReveal revision={filter} />
    </>
  );
};

export default Projects;
