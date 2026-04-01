import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/MohamedAshraf05', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/m7mda4rf/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:m7md.a.abdelgaber@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#092E20] to-black border-t border-[#0ea472]/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0ea472] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl mb-2 bg-gradient-to-r from-[#0ea472] to-white bg-clip-text text-transparent">
              Mohamed Ashraf
            </div>
            <p className="text-gray-400 text-sm">Backend Developer | Django Specialist</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#092E20] border border-[#0ea472]/40 p-3 rounded-lg text-gray-400 hover:text-[#0ea472] hover:border-[#0ea472] transition-all shadow-lg hover:shadow-[#0ea472]/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#0ea472] hover:bg-[#0c8c5f] p-3 rounded-lg text-white shadow-lg shadow-[#0ea472]/50 hover:shadow-[#0ea472]/70 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#0ea472]/40 to-transparent" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-sm"
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Mohamed Ashraf Abd El-Gaber. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-[#0ea472] fill-[#0ea472]" /> and Django inspiration
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
