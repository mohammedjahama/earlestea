'use client'

import { motion } from 'framer-motion'
import { VideoPlayer } from '@/components/ui/VideoPlayer'

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          src="/videos/hero.mp4"
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 md:px-8 text-shadow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8 p-8 rounded-lg bg-black/50 backdrop-blur-md border border-white/10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif">
            EARLE SEBASTIAN
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Art Director & Creative Visionary
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Blending visual storytelling with mindful tea ceremonies to create transformative 
            experiences in music, fashion, and live events.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Tea Session
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
