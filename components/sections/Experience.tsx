'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Calendar, MapPin, ArrowUpRight, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: 'Upwork',
      position: 'Senior Full-Stack Web Developer | Next.js, Node.js, AI SaaS',
      duration: 'Jan 2019 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Delivering fast, scalable SaaS platforms, AI-powered dashboards, and serverless applications for over 40 global clients using cutting-edge technologies.',
      achievements: [
        'Delivered fast, scalable SaaS platforms and AI-powered dashboards for 40+ global clients',
        'Built full-stack applications using Next.js, TypeScript, Node.js, Supabase, and AI APIs',
        'Designed REST, GraphQL, and tRPC APIs with AWS Lambda, Vercel, and Cloudflare Workers',
        'Improved application performance by up to 50% through caching and optimization'
      ],
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'AI APIs', 'PostgreSQL', 'AWS', 'Supabase'],
      current: true
    },
    {
      company: 'BrightLayer Technologies',
      position: 'Full-Stack Developer | React, Node.js, PostgreSQL',
      duration: 'Aug 2016 - Dec 2018',
      location: 'Brighton, United Kingdom',
      type: 'Remote',
      description: 'Developed enterprise-grade web applications with React, Node.js, PostgreSQL, and RESTful APIs for complex business requirements.',
      achievements: [
        'Developed enterprise-grade web applications with React, Node.js, and PostgreSQL',
        'Led backend integrations and automated workflows using AWS S3 and Stripe APIs',
        'Collaborated with UI/UX teams to deliver responsive, mobile-friendly interfaces',
        'Reduced API response times by 40% through query optimization and Redis caching'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe', 'Redis', 'Tailwind CSS'],
      current: false
    },
    {
      company: 'PixelWave Solutions',
      position: 'Junior Web Developer | PHP, Laravel, JavaScript',
      duration: 'Jun 2014 - Jul 2016',
      location: 'Middlesbrough, United Kingdom',
      type: 'Remote',
      description: 'Built custom Laravel applications and migrated legacy PHP systems to modern frameworks while implementing secure authentication and payment systems.',
      achievements: [
        'Built custom Laravel applications and migrated legacy PHP systems',
        'Implemented secure authentication systems and payment gateways',
        'Applied HTML, CSS, JavaScript best practices for cross-browser compatibility',
        'Gained experience with Agile workflows, Git version control, and CI/CD pipelines'
      ],
      technologies: ['PHP', 'Laravel', 'JavaScript', 'HTML', 'CSS', 'Git', 'MySQL'],
      current: false
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-slate-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Briefcase size={16} className="mr-2" />
              Professional Experience
            </div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Career Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Building innovative solutions and driving technical excellence across diverse projects and organizations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Building size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                              exp.current 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                            }`}>
                              {exp.current ? 'Current' : exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 leading-tight">
                        {exp.position}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2 lg:ml-6 mt-4 lg:mt-0">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar size={14} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
                      <ArrowUpRight size={16} className="mr-2 text-green-500" />
                      Key Achievements
                    </h5>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
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

export default Experience