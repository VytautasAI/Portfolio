'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Download, Code, Globe } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-green-100/30 dark:bg-green-900/20 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                <Code size={16} className="mr-2" />
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Vytautas
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              I help businesses launch and scale high-performance web applications — from AI-powered 
              SaaS platforms to real-time dashboards — using Next.js, TypeScript, Node.js, Supabase, 
              and AI APIs. My work is production-ready, scalable, and delivered on time.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
               href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold shadow-card hover:shadow-xl transition-all duration-300"
              >
                <Globe size={20} className="mr-2" />
                View My Work
              </motion.a>

              <motion.a
                href="/cv/VytautasBraukaResume.pdf"
                download="Vytautas_Brauka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold shadow-card hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/img/avatar.jpg"
                    alt="Vytautas Brauka"
                    className="w-full h-full object-cover"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-card"
              >
                <Globe className="text-blue-600" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-card"
              >
                <Code className="text-green-500" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

export default Hero