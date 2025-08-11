'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      institution: 'ProQual AB',
      degree: "Bachelor's degree",
      field: 'Advanced Software Development',
      duration: 'Aug 2023 - Apr 2024',
      location: 'Remote',
      description: 'Advanced studies focusing on modern development practices, AI integration, and full-stack technologies.',
      highlights: [
        'Large Language Models (LLM) and AI integration',
        'Advanced Ruby on Rails development',
        'Modern JavaScript frameworks and Redux.js',
        'Retrieval-Augmented Generation (RAG) systems'
      ],
      technologies: ['LLM', 'Ruby on Rails', 'SASS', 'Python', 'RAG', 'Bootstrap', 'CSS', 'HTML', 'MySQL', 'GitHub', 'Git', 'Redux.js', 'JavaScript'],
      recent: true
    },
    {
      institution: 'City & Guilds of London Art School',
      degree: "Bachelor's degree",
      field: 'Computer Science',
      duration: 'Oct 2013 - Sep 2014',
      location: 'London, United Kingdom',
      description: 'Intensive computer science program with focus on practical web development and e-commerce solutions.',
      highlights: [
        'Core web technologies: HTML, CSS, JavaScript, PHP, MySQL',
        'Created full e-commerce website with user authentication',
        'Implemented secure payment processing systems',
        'Database design and optimization techniques'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      recent: false
    },
    {
      institution: 'University of Hertfordshire',
      degree: 'Bachelor of Science - BS',
      field: 'Computer Software Engineering',
      duration: 'Sep 2010 - Aug 2013',
      location: 'Hertfordshire, United Kingdom',
      description: 'Comprehensive software engineering program covering software development lifecycle, databases, and web applications.',
      highlights: [
        'Software Engineering fundamentals and best practices',
        'Database design and management systems',
        'Web Application Development methodologies',
        'Final project: Real-time event tracking platform using PHP and MySQL'
      ],
      technologies: ['Software Engineering', 'Databases', 'Web Development', 'PHP', 'MySQL'],
      recent: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Award size={16} className="mr-2" />
              Academic Background
            </div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Education
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Strong educational foundation in computer science and software engineering, providing the theoretical knowledge for practical development expertise.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                          <GraduationCap size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                            {edu.institution}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                              edu.recent 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                            }`}>
                              {edu.recent ? 'Recent' : 'Foundation'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 font-medium">
                        {edu.field}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2 lg:ml-6 mt-4 lg:mt-0">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar size={14} className="mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <MapPin size={14} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
                      <BookOpen size={16} className="mr-2 text-blue-500" />
                      Key Learning Areas
                    </h5>
                    <div className="grid gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Technologies & Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education