'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Cloud, Smartphone, Palette, Zap, Globe } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'Next.js (App Router)', level: 95 },
        { name: 'React', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js (2 & 3)', level: 85 },
        { name: 'Tailwind CSS', level: 95 }
      ],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js (Express/Fastify)', level: 92 },
        { name: 'Ruby on Rails', level: 85 },
        { name: 'Python (Django/FastAPI)', level: 82 },
        { name: 'Laravel', level: 80 }
      ],
      color: 'green'
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      skills: [
        { name: 'Supabase', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 82 }
      ],
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'AI & LLM Integration',
      skills: [
        { name: 'OpenAI API', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'Claude API', level: 88 },
        { name: 'Vercel AI SDK', level: 82 }
      ],
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'API Development',
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'tRPC', level: 88 },
        { name: 'GraphQL', level: 85 },
        { name: 'WebSockets', level: 90 }
      ],
      color: 'pink'
    },
    {
      icon: Cloud,
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Vercel', level: 92 },
        { name: 'AWS Lambda', level: 88 },
        { name: 'Cloudflare Workers', level: 85 },
        { name: 'Docker', level: 80 }
      ],
      color: 'indigo'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500'
    }
    return colors[color as keyof typeof colors] || 'bg-blue-500'
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Skills & Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mt-2 mb-6">
              Technical Proficiency
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive skill set built through years of hands-on experience 
              with cutting-edge technologies and development practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${getColorClasses(category.color)}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills