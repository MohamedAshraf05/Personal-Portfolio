import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Creative Space - Interior Design Portfolio',
      description: 'Creative Space - An interior design portfolio website, showcasing furniture and design projects with an admin-managed gallery and contact form.',
      tags: ['Django' , 'DRF' , 'MySQL' , 'HTML & CSS' , 'JavaScript'],
      demo: 'https://www.creativespacehub.com'
    },
    {
      title: 'College Management System',
      description: 'Built a role-based College Management System backend with secure JWT authentication, enabling course registration, GPA calculation, schedule management, and strict access control through a clean, RESTful architecture.',
      tags: ['Django', 'DRF', 'MySQL', 'JWT'],
      github: 'https://github.com/MohamedAshraf05/ibn-el-hitham.git',
    },
    {
      title: 'User Authentication API',
      description: 'A project focused on building a reusable authentication library using JWT-based authentication.',
      tags: ['Django', 'DRF', 'JWT'],
      github: 'https://github.com/MohamedAshraf05/UserAuthentication.git',
    },
    {
      title: 'Hand Healing - Telehealth Platform',
      description: 'Hand Healing is a telehealth platform that connects patients with doctors for online consultations, appointment booking, and secure medical interactions, with integrated scheduling, notifications, and payment handling for a seamless healthcare experience.',
      tags: ['Django', 'DRF' , "HTML & CSS" , "JavaScript" , 'MySQL', 'Celery' , 'Redis', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-[#0ea472] to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea472] to-[#092E20] mx-auto mb-4" />
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A showcase of my backend development work and API designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#092E20]/60 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 shadow-xl hover:shadow-2xl hover:shadow-[#0ea472]/20 transition-all h-full flex flex-col">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea472]/0 via-[#0ea472]/5 to-[#0ea472]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl mb-4 text-white group-hover:text-[#0ea472] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#092E20]/80 border border-[#0ea472]/40 rounded-full text-sm text-[#0ea472]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 relative z-10">
                  {project.github && (
                    <Button
                      className="flex-1 bg-[#0ea472]/20 hover:bg-[#0ea472] text-[#0ea472] hover:text-white border border-[#0ea472]/40 transition-all"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      className="flex-1 bg-[#0ea472] hover:bg-[#0c8c5f] text-white transition-all"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
