import { useRef, MutableRefObject } from 'react'

export function useModalRef(): MutableRefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null)
  return ref
}
