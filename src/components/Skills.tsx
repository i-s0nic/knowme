import { motion } from "framer-motion";

const skillsData = {
  technical: {
    Backend: ["Golang", "Backend Development", "Protocol Buffers", "gRPC", "Java", "Python"],
    Architecture: ["System Design", "Distributed Systems", "Microservices"],
    Performance: ["System Optimization", "Performance Tuning"],
    Infrastructure: ["Virtualization", "macOS Virtualization"],
    DevOps: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
    Database: ["Redis", "SQL", "PostgreSQL", "MySQL", "CockroachDB", "DynamoDB", "Snowflake"],
    Frontend: ["JavaScript", "NodeJS"],
    Systems: ["C++", "Linux"],
  } as Record<string, string[]>,
  tools: [
    "AWS", "Azure", "Docker", "Kinesis", "Terraform", "Git", "PostgreSQL", "MySQL",
    "CockroachDB", "Selenium", "CI/CD", "Temporal", "HyperExecute", "macOS", "Linux",
    "Snowflake", "Grafana", "Kafka", "NodeJS", "Consul", "SumoLogic", "OpenSearch", "DynamoDB",
  ],
  soft: [
    "Problem Solving", "Mentorship", "Technical Communication", "Team Collaboration",
    "Time Management", "Adaptability", "Leadership", "Ownership", "System Thinking",
  ],
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    whileHover={{ scale: 1.06, y: -2 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-full glass border border-border text-foreground/90 hover:border-primary/50 hover:text-primary cursor-default"
  >
    {children}
  </motion.span>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Expertise</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Specialized in backend systems, cloud infrastructure, and scalable architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {Object.entries(skillsData.technical).map(([category, items]) => (
            <div
              key={category}
              className="glass rounded-2xl p-5 border border-border hover:border-primary/40 transition"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-border"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-primary" /> Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-border"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-primary" /> Professional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.soft.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
