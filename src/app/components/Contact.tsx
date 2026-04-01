import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Phone, Download, FileText, Calendar, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const handleDownloadCV = () => {
    // This would link to your actual CV PDF file
    // For now, it's a placeholder
    const link = document.createElement('a');
    link.href = "/Mohamed_Ashraf's_CV.pdf"; // Replace with actual CV path
    link.download = "Mohamed_Ashraf's_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'MohamedAshraf05',
      url: 'https://github.com/MohamedAshraf05',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:shadow-gray-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'm7mda4rf',
      url: 'https://www.linkedin.com/in/m7mda4rf/',
      color: 'from-blue-700 to-blue-900',
      hoverColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: Mail,
      label: 'Email',
      username: 'm7md.a.abdelgaber@gmail.com',
      url: 'mailto:m7md.a.abdelgaber@gmail.com',
      color: 'from-[#0ea472] to-[#092E20]',
      hoverColor: 'hover:shadow-[#0ea472]/20'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'm7md.a.abdelgaber@gmail.com',
      description: 'Feel free to reach out anytime',
      link: 'mailto:m7md.a.abdelgaber@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+20 106 588 8392',
      description: 'Available Sun-Fri, 9AM-6PM',
      link: 'tel:+201065888391'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      description: 'Open to remote opportunities',
      link: null
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Available for Projects',
      description: 'Ready to start immediately',
      link: null
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Code Quality', value: '99%' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-[#092E20] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea472] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#092E20] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-[#0ea472] to-white bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea472] to-[#092E20] mx-auto mb-4" />
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Let's discuss how I can help with your backend development needs
          </p>
        </motion.div>

        {/* CV Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#092E20] via-[#0a0a0a] to-[#092E20] backdrop-blur-sm p-8 rounded-2xl border-2 border-[#0ea472]/40 shadow-2xl shadow-[#0ea472]/20 relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea472]/0 via-[#0ea472]/10 to-[#0ea472]/0 animate-pulse" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-[#0ea472]/20 p-6 rounded-2xl border border-[#0ea472]/40">
                  <FileText className="w-12 h-12 text-[#0ea472]" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">Download My Resume</h3>
                  <p className="text-gray-400">Get a detailed overview of my experience and skills</p>
                </div>
              </div>
              <Button
                onClick={handleDownloadCV}
                className="bg-[#0ea472] hover:bg-[#0c8c5f] text-white px-8 py-6 rounded-xl shadow-lg shadow-[#0ea472]/50 hover:shadow-[#0ea472]/70 transition-all hover:scale-105 flex items-center gap-3 text-lg"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#092E20]/60 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 text-center"
            >
              <div className="text-3xl md:text-4xl text-[#0ea472] mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="block bg-gradient-to-r from-[#092E20]/60 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 hover:border-[#0ea472]/60 transition-all shadow-lg hover:shadow-[#0ea472]/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0ea472]/20 p-4 rounded-xl group-hover:bg-[#0ea472]/30 transition-all">
                        <info.icon className="w-6 h-6 text-[#0ea472]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        <div className="text-white text-lg mb-1 group-hover:text-[#0ea472] transition-colors">{info.value}</div>
                        <div className="text-sm text-gray-500">{info.description}</div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-gradient-to-r from-[#092E20]/60 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0ea472]/20 p-4 rounded-xl">
                        <info.icon className="w-6 h-6 text-[#0ea472]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        <div className="text-white text-lg mb-1">{info.value}</div>
                        <div className="text-sm text-gray-500">{info.description}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="bg-gradient-to-r from-[#092E20]/60 to-black/60 backdrop-blur-sm p-8 rounded-xl border border-[#0ea472]/20 shadow-lg">
              <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#0ea472]" />
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`flex items-center gap-4 bg-gradient-to-r ${social.color} p-4 rounded-xl shadow-lg ${social.hoverColor} transition-all border border-white/10`}
                  >
                    <div className="bg-white/10 p-3 rounded-lg">
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm">{social.label}</div>
                      <div className="text-white/80 text-xs">{social.username}</div>
                    </div>
                    <div className="text-white/60">→</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-[#092E20]/60 to-black/60 backdrop-blur-sm p-8 rounded-xl border border-[#0ea472]/20 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#0ea472] rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-[#0ea472] rounded-full animate-ping" />
                </div>
                <div>
                  <h3 className="text-xl text-[#0ea472] mb-2">Currently Available</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I'm actively looking for exciting backend development opportunities and freelance projects. Open to full-time positions and contract work.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#0ea472]/20">
                <h4 className="text-white mb-3">What I Can Help With:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0ea472] rounded-full" />
                    RESTful API Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0ea472] rounded-full" />
                    Django & DRF Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0ea472] rounded-full" />
                    Database Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0ea472] rounded-full" />
                    System Architecture Consulting
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}