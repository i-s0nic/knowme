import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Institute of Engineering and Technology",
    degree: "Bachelor of Technology - BTech",
    field: "Information Technology",
    period: "2019 - 2023",
  },
  {
    school: "Gyan Deep Senior Secondary Public School",
    degree: "Intermediate",
    field: "PCM",
    period: "April 2017 - April 2018",
  },
  {
    school: "Gyan Deep Senior Secondary Public School",
    degree: "High School",
    field: "",
    period: "April 2015 - April 2016",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Academic Background</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground">
            BTech in Information Technology with a strong foundation in engineering and competitive coding.
          </p>
        </motion.div>

        <div className="space-y-4">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition flex gap-4 items-start shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-bold text-foreground">{edu.school}</h3>
                  <span className="text-xs text-muted-foreground font-medium">{edu.period}</span>
                </div>
                <p className="text-primary font-medium text-sm mt-1">{edu.degree}</p>
                {edu.field && <p className="text-muted-foreground text-sm mt-1">{edu.field}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
