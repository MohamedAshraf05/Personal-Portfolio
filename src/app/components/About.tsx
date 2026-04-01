import { motion } from 'motion/react';
import { Code2, Database, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable backend solutions'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimizing data models for performance'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building high-performance RESTful APIs'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-[#0ea472] to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea472] to-[#092E20] mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Backend Developer specializing in Django and Django REST Framework. 
              With a strong foundation in Python and a deep understanding of web architecture, 
              I focus on building robust, scalable, and high-performance backend systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise lies in designing RESTful APIs, optimizing database queries, implementing 
              caching strategies with Redis, and handling asynchronous tasks with Celery. I'm committed 
              to writing clean, maintainable code and following best practices in software engineering.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on solving complex problems, improving system performance, and continuously 
              learning new technologies to deliver exceptional backend solutions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-r from-[#092E20]/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 shadow-lg hover:shadow-[#0ea472]/20 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#0ea472]/20 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-[#0ea472]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
