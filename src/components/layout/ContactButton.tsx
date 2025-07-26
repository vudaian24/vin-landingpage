'use client'
import Image from 'next/image'

interface ContactButtonProps {
  iconUrl?: string
  alt: string
  link: string
  isPhone?: boolean
  background?: string
  children?: React.ReactNode
  backgroundIcon?: string
}

export default function ContactButton({ iconUrl, alt, link, isPhone = false, background = 'bg-[#00adef]', children, backgroundIcon = 'bg-[#63b5f7]' }: ContactButtonProps) {
  return (
    <div className="relative w-16 h-16 animate-ping-slow">
      <div className={`absolute inset-0  opacity-20 rounded-full animate-ping ${background}`} />
      <div className={`absolute inset-0 flex items-center justify-center rounded-full  ${background} shadow-md pulse-zoom`}>
        <a
          href={link}
          target={isPhone ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          <div className={`flex items-center justify-center p-2 rounded-full ${backgroundIcon}`}>
            {iconUrl && (
              <Image
                className="shake-rotate"
                src={iconUrl}
                alt={alt}
                width={25}
                height={25}
                style={{ width: '25px', height: '25px' }}
              />
            )}
          </div>
        </a>
      </div>
      {children}
    </div>
  )
}
