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
              <a href="mailto:tuantv.0308@gmail.com" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Mail size={20} />
              </a>
              <a href="tel:0783382001" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Phone size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div className="text-[12px] flex flex-col items-start">
            <div className="flex gap-6 mb-2 md:mb-0 text-gray-500 border-b pb-1 border-gray-700">
              <Link className='hover:text-white' href="/">TRANG CHỦ</Link>
              <Link className='hover:text-white' href="/trai-nghiem-khach-hang">TRẢI NGHIỆM KHÁCH HÀNG</Link>
              <Link className='hover:text-white' href="/lien-he">LIÊN HỆ</Link>
            </div>
            <div className="text-gray-400 pt-1 text-[12px]">
              Copyright 2025 © https://vinfastthanglong.com
            </div>
          </div>
          <a className='text-gray-400 hover:text-white text-[14px]' href="#">VinFast Thăng Long - Hà Nội</a>
        </div>
      </div>
    </footer>
  )
}
