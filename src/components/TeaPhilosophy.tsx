'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TeaPhilosophy() {
  return (
    <section id="philosophy" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">TEA PHILOSOPHY</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey into mindfulness, creativity, and the art of tea ceremony.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/sebastian-earle.jpg"
              alt="Earle Sebastian Tea Ceremony"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">The Art of Presence</h3>
              <p className="text-gray-300">
                In the fast-paced world of creative direction, tea ceremony becomes a sanctuary 
                of mindfulness. Each cup is an invitation to pause, reflect, and connect with 
                the present moment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Creative Catalyst</h3>
              <p className="text-gray-300">
                Tea is not just a beverage; it&apos;s a creative catalyst. The ritual of tea preparation 
                and sharing opens channels of inspiration, fostering meaningful conversations 
                and breakthrough ideas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Cultural Bridge</h3>
              <p className="text-gray-300">
                Drawing from diverse tea traditions, we create a unique experience that bridges 
                cultures and perspectives. Each blend tells a story of heritage, innovation, 
                and artistic vision.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <blockquote className="text-xl italic">
                &ldquo;Tea ceremony is where mindfulness meets creativity. It&apos;s in these moments 
                of stillness that our most powerful ideas emerge.&rdquo;
              </blockquote>
              <p className="mt-4 text-gray-400">— Earle Sebastian</p>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900 p-8 rounded-lg"
          >
            <h4 className="text-xl font-serif mb-4">Mindful Selection</h4>
            <p className="text-gray-400">
              Each tea in our collection is thoughtfully chosen for its unique character 
              and ability to enhance creative focus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-neutral-900 p-8 rounded-lg"
          >
            <h4 className="text-xl font-serif mb-4">Artisanal Blending</h4>
            <p className="text-gray-400">
              Our signature blends are crafted to inspire, combining traditional wisdom 
              with contemporary creative energy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900 p-8 rounded-lg"
          >
            <h4 className="text-xl font-serif mb-4">Shared Experience</h4>
            <p className="text-gray-400">
              Whether virtual or in-person, our tea sessions create space for meaningful 
              connection and creative dialogue.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
