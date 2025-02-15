'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { VideoPlayer } from './VideoPlayer'

interface MediaDialogProps {
  isOpen: boolean
  onClose: () => void
  mediaId: string
  mediaType: 'image' | 'video'
  title?: string
  description?: string
  localImage?: string
  useLocalVideo?: boolean
}

export const MediaDialog = ({
  isOpen,
  onClose,
  mediaId,
  mediaType,
  title,
  description,
  localImage,
  useLocalVideo = false
}: MediaDialogProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-10 z-50 flex items-center justify-center"
          >
            <div className="relative w-full max-w-6xl mx-auto bg-black rounded-lg overflow-hidden">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative aspect-video">
                {mediaType === 'image' ? (
                  <Image
                    src={localImage || ''}
                    alt={title || 'Media preview'}
                    fill
                    className="object-contain"
                    priority
                  />
                ) : (
                  <VideoPlayer
                    videoId={mediaId}
                    className="w-full h-full"
                    controls
                    autoPlay
                    useLocalVideo={useLocalVideo}
                  />
                )}
              </div>

              {(title || description) && (
                <div className="p-4 bg-black text-white">
                  {title && (
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  )}
                  {description && (
                    <p className="text-gray-300">{description}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
