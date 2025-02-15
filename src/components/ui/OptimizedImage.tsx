'use client'

import Image from 'next/image'
import { getCloudflareImageUrl } from '@/lib/cloudflare'

interface OptimizedImageProps {
  imageId: string
  alt: string
  variant?: 'public' | 'thumbnail' | 'preview' | 'full'
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export const OptimizedImage = ({
  imageId,
  alt,
  variant = 'public',
  width,
  height,
  className = '',
  priority = false
}: OptimizedImageProps) => {
  const imageUrl = getCloudflareImageUrl(imageId, variant)

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}
