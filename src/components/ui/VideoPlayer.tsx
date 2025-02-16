'use client'

import { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  playsInline?: boolean
  poster?: string
}

export const VideoPlayer = ({
  src,
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  playsInline = true,
  poster
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && autoPlay) {
      // Try to play when component mounts
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try again with muted
          video.muted = true
          video.play().catch(() => {
            console.warn('Video autoplay failed even with muted setting')
          })
        })
      }
    }
  }, [autoPlay])

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline={playsInline}
      autoPlay={autoPlay}
      poster={poster}
      onCanPlay={(e) => {
        if (autoPlay) {
          const video = e.currentTarget
          video.play().catch(() => {
            // If autoplay fails, try again with muted
            video.muted = true
            video.play().catch(() => {
              console.warn('Video autoplay failed even with muted setting')
            })
          })
        }
      }}
    />
  )
}
