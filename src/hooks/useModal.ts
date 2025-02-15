'use client'

import { createContext, useContext, ReactNode } from 'react'

interface ModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
