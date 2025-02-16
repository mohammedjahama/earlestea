'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoPlayer } from '@/components/ui/VideoPlayer'

const Tea = () => {
  return (
    <section id="tea" className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      {/* Earle Talking Video Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <VideoPlayer
            src="/videos/earletalking.mp4"
            className="w-full h-full object-cover"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            controls={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">BOOK A TEA SESSION</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience a unique creative consultation over a curated tea ceremony with Earle Sebastian.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Tea Products */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/sebastian-earle.jpg"
                  alt="Earle&apos;s Tea Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif">Tea Collection</h3>
                <p className="text-gray-300">
                  Take home Earle&apos;s personally selected tea blends, each chosen to inspire creative conversations and moments of clarity.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors">
                    Shop Tea Collection
                  </button>
                  <a 
                    href="https://www.earlesebastian.com/memoirs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center border border-white px-8 py-3 rounded hover:bg-white/10 transition-colors"
                  >
                    Purchase Earle&apos;s Memoir
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Consultation Booking */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif mb-6">Schedule Your Session</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="session" className="block text-sm font-medium mb-2">
                  Session Type
                </label>
                <select
                  id="session"
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
                >
                  <option value="virtual">Virtual Tea Session (45 min)</option>
                  <option value="inperson">In-Person Tea Experience (90 min)</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
                  placeholder="Tell me about your project or vision&hellip;"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors"
              >
                Request Session
              </button>
            </form>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            Virtual sessions include a curated tea package. In-person sessions are held in Earle&apos;s New York studio, offering an intimate creative consultation over a traditional tea ceremony.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Tea
