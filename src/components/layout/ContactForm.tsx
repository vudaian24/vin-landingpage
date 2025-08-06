'use client'

import { useEffect, useRef, useState } from 'react'
import ContactModal from '../ui/ContactModal'

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const isFirstRender = useRef(true)
  useEffect(() => {
    if(isFirstRender.current) {
      setIsOpen(true)
      isFirstRender.current = false
      return
    }
  }, [])
  return (
    <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
  )
}