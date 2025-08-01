'use client'

import { ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export default function Modal({ open, onClose, children, className }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!open) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[999]"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={cn('fixed z-[10000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg max-w-3xl w-full overflow-hidden animate-modal', className)}

        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-2 right-2 text-gray-600 hover:text-black z-50 cursor-pointer"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Slot content */}
        {children}
      </div>
    </>
  )
}
