import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Star, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: Math.max(0, element.offsetTop - 100),
        behavior: "smooth",
      });
    }
  };

  return (
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f7faff] via-white to-[#e0f2fe]">
        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            ["-top-40 -left-40", "from-[#a78bfa]/20 via-[#60a5fa]/20 to-[#22d3ee]/20", 40],
            ["-bottom-40 -right-40", "from-[#60a5fa]/20 via-[#a78bfa]/20 to-[#f472b6]/20", 35],
            ["top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "from-[#c4b5fd]/10 to-[#e0e7ff]/10", 25],
          ].map(([pos, gradient, dur], i) => (
              <motion.div
                  key={i}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
                  className={`absolute ${pos} w-96 h-96 bg-gradient-to-br ${gradient} rounded-full blur-3xl`}
              />
          ))}
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-16 items-stretch min-h-[85vh]"
          >
            {/* Left */}
            <div className="flex flex-col justify-center text-center lg:text-left space-y-10">
              <motion.div variants={itemVariants}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, delay: 1 }}
                    className="h-1.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-full mb-8 max-w-32 mx-auto lg:mx-0"
                />
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">
                  Saurabh
                  <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mt-1">
                  Upadhayay
                </span>
                </h1>
              </motion.div>

              <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-gray-800 font-medium glass-effect-strong rounded-3xl p-8 shadow-xl border border-white/40 backdrop-blur-md"
              >
                <span className="font-semibold text-purple-700">Backend Specialist</span> delivering{' '}
                <span className="font-semibold text-blue-700">high-performance</span>,{' '}
                <span className="font-semibold text-cyan-700">secure</span>, and{' '}
                <span className="font-semibold text-purple-700">scalable systems</span> across platforms.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-6 justify-center lg:justify-start">
                <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 shadow-xl"
                >
                  <Rocket className="w-5 h-5" /> Contact <ArrowRight className="w-5 h-5" />
                </motion.button>
                <Link
                    to="/projects"
                    className="glass-effect-strong border-2 border-gray-300 hover:border-purple-500 text-gray-900 font-bold py-4 px-8 rounded-xl flex items-center gap-3 shadow-md"
                >
                  <Star className="w-5 h-5 text-yellow-500" /> Projects <Sparkles className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Background aura */}
                <motion.div
                    animate={{ scale: [1, 1.03, 1], rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 14, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-blue-300/30 to-cyan-300/30 rounded-3xl blur-2xl"
                />

                {/* Info Card */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative glass-effect-strong border-2 border-white/60 p-10 rounded-3xl shadow-3xl backdrop-blur-md"
                >
                  <div className="space-y-4 mb-6">
                    {[
                      { icon: "🚀", text: "SDE @ Microsoft" },
                      { icon: "⚙️", text: "Backend Engineering" },
                      { icon: "⚡", text: "Performance Tuning" },
                      { icon: "🧠", text: "System Design" }
                    ].map(({ icon, text }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center p-4 rounded-xl glass-effect border border-white/30"
                        >
                          <div className="w-10 h-10 text-xl flex items-center justify-center bg-white rounded-xl mr-4">
                            {icon}
                          </div>
                          <span className="text-gray-800 font-medium">{text}</span>
                        </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "4+", label: "Years", color: "from-purple-700 to-purple-800" },
                      { value: "10+", label: "Projects", color: "from-blue-700 to-blue-800" },
                      { value: "5+", label: "Tech Stack", color: "from-cyan-700 to-cyan-800" }
                    ].map(({ value, label, color }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-100 to-white border border-white/40"
                        >
                          <div className={`text-3xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs font-bold text-gray-600">{label}</div>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
