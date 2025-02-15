'use client'

import { motion } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
  category: string
}

const events: TimelineEvent[] = [
  {
    year: '2023',
    title: 'UEFA Champions League Final',
    description: 'Creative Direction for Opening Ceremony featuring global artists.',
    category: 'Live Events'
  },
  {
    year: '2020',
    title: 'The Voice',
    description: 'Show Direction for multiple episodes featuring Alicia Keys.',
    category: 'Television'
  },
  {
    year: '2018',
    title: 'Alicia Keys - HERE',
    description: 'Creative Direction for album campaign and visual identity.',
    category: 'Music'
  },
  {
    year: '2015',
    title: 'Afropunk Festival',
    description: 'Festival Creative Direction and Cultural Documentation.',
    category: 'Events'
  },
  {
    year: '2012',
    title: 'Red Hot + Cool',
    description: 'Creative Direction for AIDS awareness music project.',
    category: 'Social Impact'
  }
]

export default function CreativeTimeline() {
  return (
    <section id="timeline" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">CREATIVE JOURNEY</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of creative direction, cultural impact, and artistic innovation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-gray-800" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Year - Left Side on Desktop */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="hidden md:block absolute left-1/2 top-3 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white" />
                  <span className="inline-block md:hidden text-sm font-medium text-gray-400 mb-1">
                    {event.year}
                  </span>
                  <div className="md:pr-12">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-xl font-serif mb-2">{event.title}</h3>
                        <span className="hidden md:inline-block text-sm font-medium text-gray-400 mb-2">
                          {event.year}
                        </span>
                        <span className="inline-block px-2 py-1 text-xs rounded bg-gray-800 text-gray-300 mb-3">
                          {event.category}
                        </span>
                        <p className="text-gray-400">{event.description}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Content - Right Side on Desktop */}
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="md:pl-12">
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-xl font-serif mb-2">{event.title}</h3>
                        <span className="hidden md:inline-block text-sm font-medium text-gray-400 mb-2">
                          {event.year}
                        </span>
                        <span className="inline-block px-2 py-1 text-xs rounded bg-gray-800 text-gray-300 mb-3">
                          {event.category}
                        </span>
                        <p className="text-gray-400">{event.description}</p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://www.earlesebastian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Full Portfolio →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
