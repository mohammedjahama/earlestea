'use client'

import { motion } from 'framer-motion'
import { OptimizedImage } from './ui/OptimizedImage'

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">EARLE SEBASTIAN</h3>
            <p className="text-gray-400">
              Art Director & Creative Visionary
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/earlesebastian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/earlesebastian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Work */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Work</h3>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a 
                  href="https://www.earlesebastian.com/memoirs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Memoirs
                </a>
              </li>
            </ul>
          </div>

          {/* Tea */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tea Experience</h3>
            <ul className="space-y-2">
              <li>
                <a href="#philosophy" className="text-gray-400 hover:text-white transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#consultation" className="text-gray-400 hover:text-white transition-colors">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <p className="text-gray-400">
              For business inquiries:
              <br />
              <a
                href="mailto:contact@earlesebastian.com"
                className="text-white hover:text-gray-200 transition-colors"
              >
                contact@earlesebastian.com
              </a>
            </p>
            <p className="text-gray-400">
              Based in New York City
              <br />
              Available Worldwide
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Earle Sebastian. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
