import { motion } from 'motion/react';

export function Skills() {
  const skills = [
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'Django', level: 95, category: 'backend' },
    { name: 'Django REST Framework', level: 90, category: 'backend' },
    { name: 'PostgreSQL', level: 85, category: 'database' },
    { name: 'Redis', level: 80, category: 'database' },
    { name: 'Celery', level: 85, category: 'backend' },
    { name: 'Docker', level: 80, category: 'devops' },
    { name: 'Git & GitHub', level: 90, category: 'devops' },
    { name: 'REST APIs', level: 95, category: 'backend' },
    { name: 'CI/CD', level: 75, category: 'devops' },
    { name: 'JavaScript', level: 70, category: 'frontend' },
    { name: 'HTML', level: 85, category: 'frontend' },
    { name: 'CSS', level: 80, category: 'frontend' },
    { name: 'System Design', level: 70, category: 'architecture' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'backend':
        return 'from-[#0ea472] to-[#092E20]';
      case 'database':
        return 'from-[#0ea472] to-[#0a7d5e]';
      case 'devops':
        return 'from-[#0c8c5f] to-[#0a6b4a]';
      case 'frontend':
        return 'from-[#0a6b4a] to-[#085939]';
      case 'architecture':
        return 'from-[#0d9d68] to-[#0a7d5e]';
      default:
        return 'from-[#0ea472] to-[#092E20]';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0ea472] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-[#0ea472] to-white bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea472] to-[#092E20] mx-auto mb-4" />
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            My technical toolkit for building robust backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-r from-[#092E20]/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 shadow-lg hover:shadow-[#0ea472]/30 transition-all">
                <div className="flex justify-between mb-3">
                  <span className="text-white group-hover:text-[#0ea472] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[#0ea472]">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'REST', 'Git'].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-6 py-3 bg-gradient-to-r from-[#092E20] to-black border border-[#0ea472]/40 rounded-full text-[#0ea472] backdrop-blur-sm shadow-lg hover:shadow-[#0ea472]/50 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
