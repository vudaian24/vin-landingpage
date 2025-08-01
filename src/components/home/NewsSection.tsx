'use client'

import Image from 'next/image'
import Link from 'next/link'
import ButtonCustom from '../ui/ButtonCustom'
import Modal from '../ui/Modal'
import { useState } from 'react'

const NewsSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mainVideo = {
    image: '/images/news/vinfast-news.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=xxxxxxxxxxx',
    alt: 'VinFast Video',
  }

  const newsItems = [
    {
      image: '/images/news/video-thumb-1.jpg',
      title: 'Hướng dẫn sử dụng trạm sạc',
      link: '/bai-viet/huong-dan-su-dung-tram-sac',
    },
    {
      image: '/images/news/video-thumb-2.jpg',
      title: 'Pin và trạm sạc ô tô điện',
      link: '/bai-viet/pin-va-tram-sac-o-to-dien',
    },
    {
      image: '/images/news/video-thumb-3.jpg',
      title: 'Thiết bị sạc di động',
      link: '/bai-viet/thiet-bi-sac-di-dong',
    },
  ]

  return (
    <section className="bg-[#f0f0f0] py-12">
      <div className="container mx-auto px-4 max-w-[1080px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">TIN TỨC & SỰ KIỆN</h2>
          <ButtonCustom
            href="#"
            label="XEM THÊM"
            variant="primary"
            className="text-xs"
          />
        </div>

        <p className="text-gray-600 mb-6 max-w-4xl">
          Những mẫu xe VinFast hoàn toàn mới, sự kết hợp tinh hoa giữa công nghệ tối tân và thiết kế sang trọng.
          Cập nhật thông tin và bảng giá sản phẩm mới nhất từ VinFast Thăng Long - Hà Nội.
        </p>

        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          {/* Left Column */}
          <div className="relative w-full lg:w-2/3 h-full">
            <Image
              src={mainVideo.image}
              alt={mainVideo.alt}
              width={720}
              height={400}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button aria-label="Play video" onClick={() => setIsOpen(true)} className="group w-[60px] h-[60px] rounded-full cursor-pointer border-2 border-white flex items-center justify-center transition-colors duration-300 hover:bg-[#1464f4] hover:border-[#1464f4]">
                <svg
                  className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 h-full flex flex-col gap-2">
            {newsItems.map((item, index) => (
              <article key={index} className="flex gap-3 bg-white rounded overflow-hidden shadow-sm flex-1">
                <Link href={item.link}>
                  <div className="relative w-[180px] h-[90px] sm:h-[110px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-fill"
                      sizes="(max-width: 640px) 180px"
                    />
                    {index === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button aria-label="Play video" onClick={() => setIsOpen(true)} className="group w-12 h-12 rounded-full border-2 border-white cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-[#1464f4] hover:border-[#1464f4]">
                          <svg
                            className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="flex flex-col justify-center p-2 pr-4">
                  <Link href={item.link} className='hover:!text-blue-600 text-sm font-semibold'>
                    {item.title}
                  </Link>
                  <Link href={item.link} className="text-blue-600 text-xs mt-2 hover:underline">
                    XEM THÊM
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/yZS0fbzquFU"
          title="Hướng dẫn sạc xe ô tô điện tại trạm sạc VinFast"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Modal>
    </section>
  )
}

export default NewsSection
