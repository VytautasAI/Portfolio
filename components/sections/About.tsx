'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const values = [
    {
      icon: Award,
      title: 'AI-Native Solutions',
      description: 'Building intelligent applications with OpenAI, Claude, and LangChain integration.',
    },
    {
      icon: Users,
      title: 'Real-Time Apps',
      description: 'Creating responsive applications with WebSockets and Redis streaming.',
    },
    {
      icon: Clock,
      title: 'Serverless First',
      description: 'Deploying edge functions and serverless solutions for optimal performance.',
    },
    {
      icon: Target,
      title: 'Production Ready',
      description: 'Delivering scalable, maintainable code that performs in real-world conditions.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mt-2 mb-6">
                Passionate about crafting digital solutions
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I&apos;m a dedicated Full Stack Developer with over 6 years of experience specializing in 
                AI-powered SaaS platforms, real-time applications, and serverless solutions. My expertise 
                spans modern web technologies with a focus on performance, scalability, and user experience.
              </p>
              
              <p>
                My core expertise includes Next.js with App Router and Server Components, AI/LLM integration 
                using OpenAI and Claude APIs, and building production-ready applications with TypeScript, 
                Node.js, and modern databases like Supabase and PostgreSQL.
              </p>
              
              <p>
                I take a product-first approach, focusing on clean, modular code that&apos;s built quickly 
                to a high standard. My clients choose me for reliable delivery, clear communication, 
                and proactive problem-solving that drives real business results.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Frontend</h4>
                  <p className="text-slate-600 dark:text-slate-400">Next.js, React, Vue.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Backend</h4>
                  <p className="text-slate-600 dark:text-slate-400">Node.js, Ruby on Rails, Python, Laravel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">AI & APIs</h4>
                  <p className="text-slate-600 dark:text-slate-400">OpenAI, Claude, LangChain, REST, GraphQL, tRPC</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Database & Cloud</h4>
                  <p className="text-slate-600 dark:text-slate-400">Supabase, PostgreSQL, AWS, Vercel, MongoDB</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-card transition-all duration-300"
              >
                <div className="mb-4">
                  <value.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About