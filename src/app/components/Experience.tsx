import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award , UserCog } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      icon: Briefcase,
      title: 'Creative Space - Interior Design Portfolio',
      organization: 'Freelance.',
      period: '2023 - 2024',
      description: 'Creative Space - An interior design portfolio website, showcasing furniture and design projects with an admin-managed gallery and contact form. URL -> www.creativespacehub.com ',
      type: 'Project'
    },
    {
      icon: Briefcase,
      title: 'Backend Developer',
      organization: 'Solution Hunter',
      period: '2024 - 2025',
      description: ' a startup specializing in tech solutions and marketing. ',
      type: 'work'
    },
    {
      icon: Award,
      title: 'College Mangement System',
      organization: 'Freelance',
      period: '2025',
      description: 'Built a role-based College Management System backend with secure JWT authentication, enabling course registration, GPA calculation, schedule management, and strict access control through a clean, RESTful architecture.',
      type: 'project'
    },
    {
      icon: Briefcase,
      title: 'Backend Developer',
      organization: 'ILC soft',
      period: '2025',
      description: 'Worked at ILC Soft, contributing to backend development across multiple projects using Django, Django REST Framework, and MySQL.',
      type: 'work'
    },
    {
      icon: Award,
      title: 'Django REST Framework Certification',
      organization: 'Professional Training',
      period: '2021',
      description: 'Advanced certification in building production-ready APIs with Django REST Framework.',
      type: 'certification'
    },
    {
      icon: GraduationCap,
      title: 'CS50’s Introduction to Computer Science',
      organization: 'Harvard University',
      period: '2020',
      description: 'Comprehensive introduction to computer science concepts and programming.',
      type: 'education'
    },
    {
      icon: GraduationCap,
      title: 'CS50’s Web Programming with Python and JavaScript',
      organization: 'Harvard University',
      period: '2019',
      description: 'Comprehensive introduction to web programming concepts and technologies.',
      type: 'education'
    },
    {
      icon: GraduationCap,
      title: 'Digital Transformation Course',
      organization: 'ministry of Defense Information Technology Department Information System Institute ',
      period: '2020',
      description: 'Comprehensive introduction to computer science concepts and programming.',
      type: 'education'
    },
    {
      icon: GraduationCap,
      title : 'Leadership & Team Management Course',
      organization: 'Enactus GOT Program , British University in Egypt (BUE)',
      period: '2023',
      type: 'volunteer'
    },
    {
      icon: UserCog,
      title: 'Project Management Team Leader',
      organization: 'Enactus Minya University',
      period: '2024 - 2025',
      type: 'volunteer'
    },
    {
      icon: UserCog,
      title: 'Tresurer',
      organization: 'IEEE Minya University Student Branch',
      period: '2025 - 2026',
      type: 'volunteer'
    },
    {
      icon:Award,
      title: 'Star of the 1st wave',
      organization: 'Enactus Minya University',
      period: '2023',
      type: 'volunteer'
    },
    {
      icon:Award,
      title : 'BASF Excellence Award',
      organization : 'Enactus Egypt',
      period: '2023',
      type: 'volunteer'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-[#0ea472]';
      case 'project':
        return 'bg-[#0c8c5f]';
      case 'education':
        return 'bg-[#0a7d5e]';
      case 'certification':
        return 'bg-[#0d9d68]';
      default:
        return 'bg-[#0ea472]';
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0ea472] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-[#0ea472] to-white bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea472] to-[#092E20] mx-auto mb-4" />
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            My professional journey and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0ea472] via-[#092E20] to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 ${getIconColor(item.type)} p-3 rounded-full border-4 border-black shadow-lg z-10`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-1/2 w-full`}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                    className="bg-gradient-to-br from-[#092E20]/60 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#0ea472]/20 shadow-xl hover:shadow-[#0ea472]/20 transition-all"
                  >
                    <div className="text-[#0ea472] text-sm mb-2">{item.period}</div>
                    <h3 className="text-xl text-white mb-1">{item.title}</h3>
                    <div className="text-gray-400 text-sm mb-3">{item.organization}</div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
