'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Tabs } from './ui/tabs'

const navigationTabs = [
  { title: 'Portfolio', value: 'portfolio', content: null },
  { title: 'Journey', value: 'timeline', content: null },
  { title: 'Philosophy', value: 'philosophy', content: null },
  { title: 'Tea Shop', value: 'shop', content: null },
  { title: 'Book a Session', value: 'consultation', content: null },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (value: string) => {
    const element = document.getElementById(value)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="/" className="text-white text-xl font-serif">
          EARLE SEBASTIAN
        </a>

        <Tabs
          tabs={navigationTabs}
          containerClassName="bg-transparent"
          tabClassName="text-white/80 hover:text-white transition-colors"
          activeTabClassName="bg-white/10"
          contentClassName="hidden"
        />
      </div>
    </motion.nav>
  )
}
