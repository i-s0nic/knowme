import { Plus } from "lucide-react";
import { roles, type Role } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ScrollDetails from "./ScrollDetails";
import CompanyLogo from "./CompanyLogo";

interface CompanyHistory {
  entry: Role;
  previousRoles: Role[];
}

const groupRoles = (kind: Role["kind"]) => {
  const groups: CompanyHistory[] = [];
  for (const entry of roles.filter((role) => role.kind === kind)) {
    const group = groups.find((item) => item.entry.company === entry.company);
    if (group) group.previousRoles.push(entry);
    else groups.push({ entry, previousRoles: [] });
  }
  return groups;
};

const RoleEntry = ({ entry, previousRoles }: CompanyHistory) => {
  const history = [entry, ...previousRoles];
  const grouped = previousRoles.length > 0;
  const period = grouped
    ? `${previousRoles[previousRoles.length - 1].period.split(" - ")[0]} - ${entry.period.split(" - ")[1]}`
    : entry.period;
  return (
  <ScrollDetails className="experience-entry" data-company={entry.company}>
    <summary>
      <span className="role-period">{period}{entry.current && <span className="current-label"><span className="status-dot" />Current</span>}</span>
      <span className="role-heading">
        <CompanyLogo company={entry.company} />
        <span><span className="role-company">{entry.company}</span><span className="role-title">{history.map((role) => role.role).join(" / ")}</span></span>
      </span>
      <span className="role-overview">{entry.summary}</span>
      <Plus size={20} aria-hidden="true" />
    </summary>
    <div className="role-detail">
      {history.map((role) => (
        <section className="role-section" key={role.id} aria-label={`${role.company}: ${role.role}`}>
          {grouped && <div className="role-section-heading"><h3>{role.role}</h3><span>{role.period}</span></div>}
          <p className="eyebrow">{role.team}<span className="label-divider">/</span>{role.location}</p>
          <ul className="role-contributions">
            {role.details.map((detail) => <li key={detail.title}><h4>{detail.title}</h4><p>{detail.description}</p></li>)}
          </ul>
          <div className="technology-list">{role.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </section>
      ))}
    </div>
  </ScrollDetails>
  );
};

const Experience = () => (
  <section id="experience" className="section site-container" tabIndex={-1}>
    <SectionHeading number="02" label="Experience" title="Where I've worked"
      description="I started with internships at Ridecell and Fi. Today, I work on Windows at Microsoft." />
    <h3 className="eyebrow experience-group-title">Engineering</h3>
    <div>{groupRoles("Engineering").map((group) => <RoleEntry key={group.entry.id} {...group} />)}</div>
    <div className="mentorship-heading"><h3>Teaching and mentoring</h3><p>Helping students work through algorithms and coding problems.</p></div>
    <div>{groupRoles("Mentorship").map((group) => <RoleEntry key={group.entry.id} {...group} />)}</div>
  </section>
);

export default Experience;
