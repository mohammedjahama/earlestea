That's 199 until 25 yeah that's perfect'use client'

import React, { useState } from 'react'
import { useMediaContext } from '@/contexts/MediaContext'

interface MediaUploaderProps {
  file: string
}

export const MediaUploader = ({ file }: MediaUploaderProps) => {
  const { setSelectedMedia, setIsModalOpen } = useMediaContext()
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUpload = async () => {
    setIsUploading(true)
    setError(null)

    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval)
            return prev
          }
          return prev + 10
        })
      }, 500)

      // Simulate upload completion
      setTimeout(() => {
        clearInterval(interval)
        setUploadProgress(100)
        setIsUploading(false)
        setSelectedMedia(file)
        setIsModalOpen(true)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload file')
      setIsUploading(false)
    }
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">{file}</span>
        {!isUploading && uploadProgress < 100 && (
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Upload
          </button>
        )}
      </div>

      {isUploading && (
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-blue-500 rounded transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 mt-1">
            Uploading... {uploadProgress}%
          </span>
        </div>
      )}

      {error && (
        <div className="mt-2 text-sm text-red-500">
          Error: {error}
        </div>
      )}
    </div>
  )
}
