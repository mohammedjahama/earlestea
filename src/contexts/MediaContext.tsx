'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface MediaContextType {
  selectedMedia: string | null
  setSelectedMedia: (id: string | null) => void
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

const MediaContext = createContext<MediaContextType | undefined>(undefined)

export function MediaContextProvider({ children }: { children: ReactNode }) {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <MediaContext.Provider
      value={{
        selectedMedia,
        setSelectedMedia,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export function useMediaContext() {
  const context = useContext(MediaContext)
  if (context === undefined) {
    throw new Error('useMediaContext must be used within a MediaContextProvider')
  }
  return context
}
