'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { MediaDialog } from '@/components/ui/MediaDialog'
interface Project {
  id: number
  title: string
  src: string
  type: 'image' | 'video'
  description: string
  category: string
  thumbnail?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alicia Keys - HERE",
    src: "/images/alicia-keys-here-album-cover-paola-kudacki.jpeg",
    type: "image",
    description: "Creative Direction for Album Campaign",
    category: "Music"
  },
  {
    id: 2,
    title: "Jay Z & Alicia Keys - Empire State of Mind",
    src: "/videos/empire-state-of-mind.mp4",
    type: "video",
    thumbnail: "/images/thumbnailearlealicia.jpeg",
    description: "Live Performance Direction",
    category: "Music"
  },
  {
    id: 3,
    title: "Afropunk Festival 2015",
    src: "/videos/afropunk-2015.mp4",
    type: "video",
    thumbnail: "/images/afropunk2015.jpeg",
    description: "Festival Creative Direction",
    category: "Events"
  },
  {
    id: 4,
    title: "Afropunk Moments I",
    src: "/images/afro1.jpeg",
    type: "image",
    description: "Cultural Documentation",
    category: "Events"
  }
]

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (
      prevIndex + newDirection < 0 
        ? projects.length - 1 
        : prevIndex + newDirection >= projects.length 
          ? 0 
          : prevIndex + newDirection
    ))
  }

  return (
    <>
      <section id="portfolio" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-8">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif">SELECTED WORKS</h2>
          <a 
            href="https://www.earlesebastian.com/memoirs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-lg border-b-2 border-white/50 hover:border-white transition-colors"
          >
            Read Earle&apos;s Memoirs →
          </a>
        </div>
        
        <div className="relative w-full max-w-6xl mx-auto h-[60vh] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full h-full cursor-pointer"
              onClick={() => setDialogOpen(true)}
            >
              <div className="relative w-full h-full">
                <div className="relative w-full h-full">
                  <OptimizedImage
                    src={projects[currentIndex].type === 'video' ? projects[currentIndex].thumbnail || '' : projects[currentIndex].src}
                    alt={projects[currentIndex].title}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={cn(
                      "px-2 py-1 text-xs rounded",
                      projects[currentIndex].type === "video" 
                        ? "bg-red-500" 
                        : "bg-blue-500"
                    )}>
                      {projects[currentIndex].type.toUpperCase()}
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-gray-700">
                      {projects[currentIndex].category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-3xl mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{projects[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              paginate(-1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              paginate(1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {projects.map((_: Project, idx: number) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  idx === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <MediaDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        src={projects[currentIndex].src}
        mediaType={projects[currentIndex].type}
        title={projects[currentIndex].title}
        description={projects[currentIndex].description}
      />
    </>
  )
}
