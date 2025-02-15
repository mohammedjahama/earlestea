'use client'

import { useState, useRef } from 'react'
import { useMedia } from '@/contexts/MediaContext'

interface MediaUploaderProps {
  type: 'image' | 'video'
  onUploadComplete: (id: string) => void
  onError: (error: string) => void
  className?: string
}

export const MediaUploader = ({
  type,
  onUploadComplete,
  onError,
  className = ''
}: MediaUploaderProps) => {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { uploadMedia } = useMedia()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setProgress(0)

    try {
      const id = await uploadMedia(file)
      onUploadComplete(id)
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Upload failed')
    } finally {
      setUploading(false)
      setProgress(0)

      // Reset input
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept={type === 'image' ? 'image/*' : 'video/*'}
        onChange={handleFileChange}
        disabled={uploading}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
      >
        {uploading ? (
          <div className="flex items-center space-x-2">
            <span>Uploading... {progress}%</span>
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          `Upload ${type === 'image' ? 'Image' : 'Video'}`
        )}
      </button>
    </div>
  )
}
