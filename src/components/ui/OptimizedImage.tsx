'use client'

import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}: OptimizedImageProps) => {
  // Use a regular img tag for static exports
  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
}
