'use client'

import Image from 'next/image'

interface ImageWithCaptionProps {
  src: string
  alt: string
  caption: string
  className?: string
  capTionCenter?: boolean
}

export const ImageWithCaption = ({ src, alt, caption, className, capTionCenter = true }: ImageWithCaptionProps) => {
  return (
    <div className={className}>
      <div className="relative w-full aspect-[2236/1000]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <div className={`bg-black/5 ${capTionCenter ? 'text-center italic' : 'text-left'} text-sm  p-2`}>{caption}</div>
    </div>
  )
}
