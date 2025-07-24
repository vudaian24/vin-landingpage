'use client'

import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import Modal from '../ui/Modal'

interface CarVariant {
  name: string
  image: string
}

interface CarColorSliderProps {
  carVariants: CarVariant[]
}

export default function CarColorSlider({ carVariants }: CarColorSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [prevIndex, setPrevIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const thumbnailRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!thumbnailRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - thumbnailRef.current.offsetLeft)
    setScrollLeft(thumbnailRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !thumbnailRef.current) return
    e.preventDefault()
    const x = e.pageX - thumbnailRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // tốc độ kéo
    thumbnailRef.current.scrollLeft = scrollLeft - walk
  }

  const stopDragging = () => {
    setIsDragging(false)
  }

  const changeIndex = (dir: 'left' | 'right') => {
    setDirection(dir)
    setSelectedIndex(prev => {
      const nextIndex =
        dir === 'left' ? Math.max(prev - 1, 0) : Math.min(prev + 1, carVariants.length - 1)
      setPrevIndex(prev)
      return nextIndex
    })
  }


  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="relative group w-full flex justify-center bg-white rounded-xl overflow-hidden">
          <button
            onClick={() => changeIndex('left')}
            className="absolute left-1 top-1/2 p-2 cursor-pointer rounded-full opacity-0 z-20 group-hover:opacity-100 group-hover:-translate-y-1/2 translate-y-0 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 text-black" />
          </button>

          <div className="relative w-full h-[300px] overflow-hidden">
            {carVariants.map((car, index) => {
              let className = 'absolute top-0 left-0 w-full h-full object-contain pointer-events-none'

              if (index === selectedIndex) {
                className += direction === 'right' ? ' slide-in-right' : ' slide-in-left'
              } else if (index === prevIndex) {
                className += direction === 'right' ? ' slide-out-left' : ' slide-out-right'
              } else {
                className += ' opacity-0'
              }

              return (
                <img
                  key={index}
                  src={car.image}
                  alt={car.name}
                  className={className}
                />
              )
            })}
          </div>

          <button
            onClick={() => changeIndex('right')}
            className="absolute right-1 top-1/2 cursor-pointer p-2 rounded-full opacity-0 z-10 group-hover:opacity-100 group-hover:-translate-y-1/2 translate-y-0 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 text-black" />
          </button>
        </div>

        <div className="mt-3 pl-2">
          <button
            className="w-9 h-9 border rounded-full flex items-center justify-center text-gray-500 hover:bg-[#1464f4] hover:text-white cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <Expand className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 overflow-hidden">
          <div
            ref={thumbnailRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-1 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            {carVariants.map((car, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex-shrink-0 w-[100px] h-[60px] cursor-pointer rounded border transition-all duration-200 ${selectedIndex === index
                  ? 'border-[#1464f4]'
                  : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <img src={carVariants[selectedIndex].image} alt={carVariants[selectedIndex].name} />
      </Modal>
    </>
  )
}
