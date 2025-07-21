'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: string[]
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const prev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const next = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="relative w-[300px] sm:w-[400px] md:w-[600px] lg:w-[480px] xl:w-[520px] h-[338px] aspect-[3/1] bg-white border overflow-hidden">
        <Image
          src={images[selectedIndex]}
          alt={`Xe ${selectedIndex}`}
          fill
          className="object-contain"
        />

        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-1 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-1 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto overflow-y-hidden custom-scroll-x w-full max-w-[600px] px-1">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`min-w-[134px] h-[80px] border ${selectedIndex === index
              ? 'border-blue-600'
              : 'border-gray-300 opacity-70 hover:opacity-100'
              }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index}`}
              width={134}
              height={80}
              className="object-contain w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
