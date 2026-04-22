import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Database, Globe, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tax Statement Generator & Backend Systems – Fi Money",
    description:
      "Built and optimized multiple backend services at Fi Money, including a tax statement generator for emailing income reports, server-driven UI orchestration, live SSE streams for real-time updates, and a high-scale communication scheduler. Implemented performance optimization with Kinesis + S3 + Snowflake for real-time analytics.",
    tech: ["Golang", "SQL", "Redis", "Protocol Buffers", "gRPC", "Temporal", "Kinesis", "Snowflake", "PostgreSQL"],
    link: "https://fi.money/",
    type: "Backend Systems",
    Icon: Database,
  },
  {
    title: "HyperExecute – LambdaTest",
    description:
      "Core contributor to HyperExecute platform — worked on scheduling engine for Kane AI & Accessibility, macOS virtualization, VM execution optimization, storage lifecycle management, and WebDriver mode integration for Selenium.",
    tech: ["Golang", "Kubernetes", "Redis", "Protocol Buffers", "gRPC", "Docker", "AWS", "Azure", "Terraform", "Temporal"],
    link: "https://www.lambdatest.com/hyperexecute",
    type: "Test Orchestration",
    Icon: Globe,
  },
  {
    title: "Data Structures & Algorithms Library",
    description:
      "A hand-built C++ library of optimized data structures and algorithms used in competitive programming. Includes segment trees, binary indexed trees, graph algorithms, and advanced DP patterns.",
    tech: ["C++", "STL", "DSA", "Algorithms", "Templates"],
    link: "https://i-s0nic.github.io/Code_It_Out/",
    type: "Competitive Programming",
    Icon: Code2,
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Saurabh Upadhayay";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Projects | Saurabh Upadhayay" description="Projects by Saurabh Upadhayay — backend systems, distributed infrastructure, and DSA libraries." />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Projects</h1>
            <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A showcase of backend systems, distributed infrastructure, and engineering work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl border border-border hover:border-primary/40 transition shadow-card overflow-hidden flex flex-col"
              >
                <div className="h-1 bg-gradient-primary" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                      <p.Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-primary px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5">
                      {p.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 my-5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md text-[11px] font-medium bg-secondary border border-border text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
                  >
                    {p.link.includes("github") ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    Visit
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass rounded-2xl p-8 border border-border text-center"
          >
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">More Projects Coming Soon</h2>
            <p className="text-muted-foreground">
              Constantly building. Stay tuned for new work in distributed systems and platform engineering.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
