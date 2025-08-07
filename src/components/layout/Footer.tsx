'use client'

import { Mail, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white h-auto md:h-[310px] w-full">
      <div className="max-w-[1080px] mx-auto px-4 py-8 flex flex-col justify-between h-full">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-lg font-bold mb-2 !text-white">VINFAST THĂNG LONG</h3>
            <p>Showroom Ô Tô VinFast Thăng Long</p>
            <p>Địa Chỉ:Số 68 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 !text-white">HỖ TRỢ KHÁCH HÀNG</h3>
            <p>Hotline: 0783382001</p>
            <p>Email: <a href="mailto:tuantv.0308@gmail.com" className="no-underline">tuantv.0308@gmail.com</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 !text-white">FOLLOW</h3>
            <div className="flex gap-4 mt-2">
              <a href="mailto:tuantv.0308@gmail.com" aria-label="Gửi email" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Mail size={20} />
              </a>
              <a href="tel:0783382001" aria-label="Gọi điện thoại" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Phone size={20} />
              </a>
              <a href="https://www.youtube.com/@vinfastthanglong" aria-label="Kênh YouTube" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row md:items-center justify-between py-6 text-gray-400'>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2 md:mb-0 text-sm border-b border-gray-700 pb-2">
              <Link className="hover:text-white transition-colors duration-200" href="/">TRANG CHỦ</Link>
              <Link className="hover:text-white transition-colors duration-200" href="/trai-nghiem-khach-hang">TRẢI NGHIỆM KHÁCH HÀNG</Link>
              <Link className="hover:text-white transition-colors duration-200" href="/lien-he">LIÊN HỆ</Link>
              <Link className="hover:text-white transition-colors duration-200 uppercase" href="/chinh-sach-quyen-rieng-tu">Chính sách quyền riêng tư</Link>
            </div>

            <div className="text-xs pt-2">
              Copyright 2025 © https://vinfastthanglong.com
            </div>
          </div>
          <a className='text-sm text-center md:text-right hover:text-white transition-colors duration-200 mt-4 md:mt-0' href="#">VinFast Thăng Long - Hà Nội</a>
        </div>
      </div>
    </footer>
  )
}
