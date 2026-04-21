import { motion } from "framer-motion";

const Summary = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="mb-6">
                    Hello, I’m Saurabh Upadhayay — a Software Engineer at Microsoft focused on building scalable, reliable backend systems and cloud-native infrastructure. I enjoy solving complex engineering problems and designing systems that remain resilient under real-world production demands.
                  </motion.p>

                  <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="mb-6">
                    Previously, I’ve worked at LambdaTest, Fi Money, and Ridecell, where I designed and shipped systems across multi-region cloud environments, real-time data pipelines, workflow orchestration, and large-scale testing platforms.
                  </motion.p>

                  <motion.p {...fadeIn} transition={{ delay: 0.3 }} className="mb-6">
                    My core focus areas include system design, distributed systems, and building reliable infrastructure. I care deeply about clean architecture, observability, and writing code that continues to perform when things go wrong.
                  </motion.p>

                  <motion.p {...fadeIn} transition={{ delay: 0.4 }} className="mb-6">
                    Beyond engineering, I’m passionate about mentorship and community building. As a mentor at Masai, I help aspiring developers strengthen their foundations in Java, Python, and JavaScript while guiding them through competitive programming.
                  </motion.p>

                  <motion.p {...fadeIn} transition={{ delay: 0.5 }} className="mb-6">
                    I actively participate in coding competitions and continuously push myself to improve my problem-solving skills and technical depth.
                  </motion.p>

                  <motion.p {...fadeIn} transition={{ delay: 0.6 }}>
                    I’m always open to connecting with engineers and teams working on meaningful, large-scale problems. Let’s build something impactful.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Summary;