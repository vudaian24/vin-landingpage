'use client'

import { useEffect, useState } from 'react'
import ContactModal from '../ui/ContactModal'

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    setIsOpen(true)
  }, [])
  return (
    <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
  )
}