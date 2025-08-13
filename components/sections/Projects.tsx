'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Online store where customers can easily shop for a variety of quality shoes, compare options, get personalized recommendations, and enjoy a smooth, hassle-free shopping experience on any device. It also has an admin panel where the owner can manage all the necessary things to keep the website updated.',
      image: '/img/foot-finesse.webp',
      technologies: ['Next', 'Typescript', 'Node.js', 'PostgreSQL', 'Stripe', 'Vercel'],
      githubUrl: 'https://github.com/VytautasAI/Foot-Finesse',
      liveUrl: 'https://foot-finesse-alpha.vercel.app',
      category: 'Full Stack Web App'
    },
    {
      title: 'Eventilyze App',
      description: 'Event Planner & Participation System, a secure and intuitive web platform designed for creating, managing, and participating in public and private events with optional registration fees. Built with Next.js and Tailwind CSS, the frontend provides a responsive, user-friendly interface that integrates seamlessly with the backend API to deliver a comprehensive event management experience.',
      image: '/img/eventlyze.webp',
      technologies: ['Next.js', 'Typescript','ShadCN/UI','Node.js', 'Prisma ORM', 'PostgreSQL', 'Vercel'],
      githubUrl: 'https://github.com/VytautasAI/eventlyze-client',
      liveUrl: 'https://eventlyze.vercel.app',
      category: 'Full Stack Web App'
    },
    {
      title: 'AI Chatbot',
      description: 'An advanced AI assistant that can understand and generate natural language, answer questions, solve problems, and create content in real time. It’s designed to adapt to different topics, tones, and contexts, making conversations feel human-like and interactive.',
      image: '/img/ai-chatbot.webp',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'OpenAI', 'Vercel'],
      githubUrl: 'https://github.com/VytautasAI/AIChatbot',
      liveUrl: 'https://ai-chatbot-professional.vercel.app',
      category: 'AI Chatbot'
    },
    {
      title: 'Banking App Dashboard',
      description: 'Modern landing page for fintechs and financial services, built with Vite, React, and TailwindCSS. Responsive interface, smooth animations, and elegant design.',
      image: '/img/landing-bank.webp',
      technologies: ['React', 'Vite', 'Typescript', 'TailwindCSS', 'Vercel'],
      githubUrl: 'https://github.com/VytautasAI/HooBank-Dashboard',
      liveUrl: 'https://hoobank.vercel.app',
      category: 'Web App'
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mt-2 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across
              different technologies and project types.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    width={500}
                    height={500}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-slate-100 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/30"
                    >
                      <Play size={24} />
                    </motion.button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link href={'https://github.com/VytautasAI?tab=repositories'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-card hover:shadow-xl transition-all duration-300"
              >
                <Github size={20} className="mr-2" />
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects