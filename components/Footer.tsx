'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 border-t border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">CR</span>
          </div>
          <span className="text-white font-bold text-xl">Store</span>
        </div>
        
        <p className="text-white/60 mb-6 max-w-2xl mx-auto">
          The ultimate marketplace for Clash Royale accounts and boosting services. 
          Secure, fast, and reliable service for kings and queens worldwide.
        </p>
        
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Support
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Discord
          </a>
        </div>
        
        <div className="text-white/40 text-sm">
          © 2024 Clash Royale Store. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}