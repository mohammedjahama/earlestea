'use client'

import { useRef } from 'react'

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
    />
  )
}
