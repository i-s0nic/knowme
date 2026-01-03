
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Phone, Send, CheckCircle, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-300/20 via-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full mb-6 max-w-32 mx-auto"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to explore collaboration opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4"
                >
                  <Phone className="w-5 h-5 text-white" />
                </motion.div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 to-cyan-50/80 hover:from-blue-100/80 hover:to-cyan-100/80 transition-all duration-300 border border-blue-100/50 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mr-6 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 font-medium">usaurabh207@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-6 rounded-2xl bg-gradient-to-r from-purple-50/80 to-pink-50/80 hover:from-purple-100/80 hover:to-pink-100/80 transition-all duration-300 border border-purple-100/50 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl mr-6 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600 font-medium">Noida, Uttar Pradesh, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-6 rounded-2xl bg-gradient-to-r from-indigo-50/80 to-blue-50/80 hover:from-indigo-100/80 hover:to-blue-100/80 transition-all duration-300 border border-indigo-100/50 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-4 rounded-2xl mr-6 shadow-lg">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h4>
                    <p className="text-gray-600">
                      <a href="https://www.linkedin.com/in/is0nic" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/ls0nic
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-6 rounded-2xl bg-gradient-to-r from-gray-50/80 to-slate-50/80 hover:from-gray-100/80 hover:to-slate-100/80 transition-all duration-300 border border-gray-100/50 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-2xl mr-6 shadow-lg">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">GitHub</h4>
                    <p className="text-gray-600">
                      <a href="https://github.com/Saurabh-Upadhayay" className="text-gray-700 hover:text-gray-900 transition-colors font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                        github.com/Saurabh-Upadhayay
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-100/50"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mr-3"
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
                Open to Opportunities
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm currently open to new opportunities in software engineering and backend development. 
                If you're looking for a motivated, skilled, and collaborative engineer ready to make an impact, 
                let's connect and discuss how we can work together.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4"
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </motion.div>
              Send a Message
            </h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 rounded-2xl p-8 text-center border border-green-200/50 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-3">Message Sent!</h4>
                <p className="text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 flex items-center">
                      <User className="w-4 h-4 mr-2 text-purple-600" />
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-3 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-cyan-600" />
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Project Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-3">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                    placeholder="I'd like to discuss a potential project..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 px-8 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-500 flex items-center justify-center shadow-xl hover:shadow-purple-500/25 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
