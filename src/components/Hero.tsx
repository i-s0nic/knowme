import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react";

const TITLES = ["SDE-2 at Microsoft", "Backend Engineer", "Distributed Systems"];

const useTyping = (words: string[], speed = 80, pause = 1600) => {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
};

const Hero = () => {
  const typed = useTyping(TITLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs font-medium text-primary mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for opportunities
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Saurabh
              <br />
              <span className="text-gradient-primary">Upadhayay</span>
            </h1>

            <div className="mt-6 h-9 text-xl md:text-2xl font-semibold text-foreground/90">
              <span>{typed}</span>
              <span className="inline-block w-[3px] h-6 ml-1 bg-primary align-middle animate-blink" />
            </div>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed">
              Backend & Distributed Systems Engineer. I build systems that scale.
            </p>

            <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Noida, India</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/Saurabh-Upadhayay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border text-foreground font-semibold hover:border-primary/50 transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>

            <div className="mt-8 flex gap-3 justify-center lg:justify-start">
              {[
                { Icon: Github, href: "https://github.com/Saurabh-Upadhayay", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/is0nic", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:usaurabh207@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Rotating glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)) 0%, transparent 30%, hsl(var(--primary-glow)) 60%, transparent 90%, hsl(var(--primary)) 100%)",
                  filter: "blur(2px)",
                }}
              />
              {/* Inner mask to make it a ring */}
              <div className="absolute inset-[6px] rounded-full bg-background" />
              {/* Pulsing outer glow */}
              <div className="absolute inset-2 rounded-full animate-pulse-glow" />

              {/* REPLACE: profile photo here */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                <img src="/SU.jpg" alt="Saurabh Upadhayay" className="w-full h-full object-cover" />
              </div>

              {/* Floating chip */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 glass-strong rounded-xl px-4 py-2 shadow-elegant border border-primary/30"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Currently</p>
                <p className="text-sm font-bold text-foreground">SDE-2 @ Microsoft</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
