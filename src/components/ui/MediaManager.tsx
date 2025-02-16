'use client'

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { MediaUploader } from './MediaUploader'
import { MediaDialog } from './MediaDialog'
export const MediaManager = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setSelectedFile(file)

    // Create preview URL
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    setIsDialogOpen(true)

    // Clean up preview URL when component unmounts
    return () => URL.revokeObjectURL(objectUrl)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
      'video/*': ['.mp4', '.webm']
    },
    maxFiles: 1
  })

  return (
    <div className="p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the file here...'
            : 'Drag & drop a file here, or click to select a file'}
        </p>
      </div>

      {selectedFile && preview && (
        <MediaDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          src={preview}
          mediaType={selectedFile.type.startsWith('image/') ? 'image' : 'video'}
          title={selectedFile.name}
        />
      )}
    </div>
  )
}
