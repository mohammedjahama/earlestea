'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { getCloudflareImageUrl, getCloudflareVideoUrl } from '@/lib/cloudflare'

interface MediaContextType {
  uploadMedia: (file: File) => Promise<string>
  getMediaUrl: (id: string, type: 'image' | 'video', variant?: string) => string
  isUploading: boolean
  uploadProgress: number
}

const MediaContext = createContext<MediaContextType | undefined>(undefined)

export function MediaProvider({ children }: { children: ReactNode }) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const uploadMedia = useCallback(async (file: File): Promise<string> => {
    setIsUploading(true)
    setUploadProgress(0)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const isImage = file.type.startsWith('image/')
      const endpoint = isImage 
        ? 'https://api.cloudflare.com/client/v4/images/v1'
        : 'https://api.cloudflare.com/client/v4/stream'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${isImage 
            ? process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_TOKEN 
            : process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_TOKEN}`
        },
        body: formData
      })

      const data = await response.json()
      if (!data.success) {
        throw new Error(data.errors[0]?.message || 'Upload failed')
      }

      return isImage ? data.result.id : data.result.uid
    } catch (error) {
      console.error('Upload error:', error)
      throw error
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }, [])

  const getMediaUrl = useCallback((id: string, type: 'image' | 'video', variant?: string) => {
    return type === 'image'
      ? getCloudflareImageUrl(id, variant as any)
      : getCloudflareVideoUrl(id)
  }, [])

  return (
    <MediaContext.Provider value={{
      uploadMedia,
      getMediaUrl,
      isUploading,
      uploadProgress
    }}>
      {children}
    </MediaContext.Provider>
  )
}

export function useMedia() {
  const context = useContext(MediaContext)
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider')
  }
  return context
}
