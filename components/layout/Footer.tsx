'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/VytautasAI', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vytautas-brauka', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vytautasbriauka66@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-slate-100 mb-2">Vytautas Brauka</h3>
            <p className="text-slate-400 dark:text-slate-500">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center text-slate-400 dark:text-slate-500">
            Made by Vytautas Brauka
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer