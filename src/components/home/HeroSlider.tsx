'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Props {
  images: { src: string; alt: string }[]
}

export default function HeroSlider(
  { images }: Props
) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null)
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const changeSlide = (newIndex: number, dir: 'left' | 'right') => {
    setPrev(current)
    setCurrent(newIndex)
    setDirection(dir)
  }

  const nextSlide = () => {
    changeSlide((current + 1) % images.length, 'right')
  }

  const prevSlide = () => {
    changeSlide((current - 1 + images.length) % images.length, 'left')
  }

  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 50000)
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    }
  }, [current])

  const handleHoldStart = (dir: 'prev' | 'next') => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    const fn = dir === 'next' ? nextSlide : prevSlide
    fn()
    holdIntervalRef.current = setInterval(fn, 50000)
  }

  const handleHoldEnd = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current)
    autoSlideRef.current = setInterval(nextSlide, 50000)
  }

  return (
    <div className="relative w-full overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] group">
      {images.map((image, index) => {
        const isCurrent = index === current
        const isPrev = index === prev
        const isFirstImage = index === 0 && prev === null

        let animationClass = ''
        if (isCurrent && prev !== null) {
          animationClass = direction === 'right' ? 'slide-in-right' : 'slide-in-left'
        } else if (isPrev) {
          animationClass = direction === 'right' ? 'slide-out-left' : 'slide-out-right'
        }

        return (
          (isCurrent || isPrev) && (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full ${isFirstImage ? '' : 'transition-opacity duration-700'
                } ${animationClass} z-0`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover"
                priority={isFirstImage || isCurrent}
                sizes="100vw"
              />
            </div>
          )
        )
      })}

      <button
        onMouseDown={() => handleHoldStart('prev')}
        onMouseUp={handleHoldEnd}
        onMouseLeave={handleHoldEnd}
        className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onMouseDown={() => handleHoldStart('next')}
        onMouseUp={handleHoldEnd}
        onMouseLeave={handleHoldEnd}
        className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 z-50 flex -translate-x-1/2 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index === current) return
              changeSlide(index, index > current ? 'right' : 'left')
            }}
            className={`relative p-3 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block h-4 w-4 rounded-full ${current === index ? 'bg-white' : 'bg-white/50'}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
