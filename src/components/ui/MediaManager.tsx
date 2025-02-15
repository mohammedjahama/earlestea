'use client'

import { useState } from 'react'
import { OptimizedImage } from './OptimizedImage'
import { VideoPlayer } from './VideoPlayer'
import { MediaUploader } from './MediaUploader'
import { MediaDialog } from './MediaDialog'
import { useMedia } from '@/contexts/MediaContext'
import { cn } from '@/lib/utils'

interface MediaItem {
  id: string
  type: 'image' | 'video'
  thumbnailId?: string
}

interface MediaManagerProps {
  initialMedia?: MediaItem[]
  onSelect?: (media: MediaItem) => void
  className?: string
}

export const MediaManager = ({
  initialMedia = [],
  onSelect,
  className = ''
}: MediaManagerProps) => {
  const [media, setMedia] = useState<MediaItem[]>(initialMedia)
  const [error, setError] = useState<string | null>(null)
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const { getMediaUrl } = useMedia()

  const handleUploadComplete = (id: string, type: 'image' | 'video') => {
    const newMedia: MediaItem = { id, type }
    setMedia([newMedia, ...media])
    setError(null)
  }

  const handleError = (error: string) => {
    setError(error)
  }

  const handleMediaClick = (item: MediaItem) => {
    if (onSelect) {
      onSelect(item)
    } else {
      setSelectedMedia(item)
    }
  }

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex gap-4">
        <MediaUploader
          type="image"
          onUploadComplete={(id) => handleUploadComplete(id, 'image')}
          onError={handleError}
        />
        <MediaUploader
          type="video"
          onUploadComplete={(id) => handleUploadComplete(id, 'video')}
          onError={handleError}
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-500 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map((item) => (
          <div
            key={item.id}
            className={cn(
              'relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all',
              onSelect && 'cursor-pointer'
            )}
            onClick={() => handleMediaClick(item)}
          >
            {item.type === 'image' ? (
              <OptimizedImage
                imageId={item.id}
                alt="Media gallery item"
                className="object-cover"
                variant="thumbnail"
              />
            ) : (
              <div className="relative w-full h-full">
                <VideoPlayer
                  videoId={item.id}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls={false}
                  muted
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <MediaDialog
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
          mediaId={selectedMedia.id}
          mediaType={selectedMedia.type}
        />
      )}
    </div>
  )
}
