'use client'
import { useState } from "react";
import Modal from "../ui/Modal";
import Image from "next/image";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[690px] h-[400px] absolute right-[20px] top-[200px] lg:right-[210px] lg:top-[200px] hidden md:block">
      <Image
        src="/images/hd-ps-b.jpg"
        alt="Video Modal"
        fill // Sử dụng fill để ảnh lấp đầy kích thước của div cha
        sizes="(max-width: 768px) 100vw, 690px" // Kích thước ảnh dựa trên w-[690px] và responsive
        className="object-cover" // Giữ nguyên object-cover để ảnh hiển thị đúng
        priority // Đặt priority vì đây có thể là một ảnh quan trọng hiển thị trên màn hình
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Play video"
          className="group w-16 h-16 rounded-full border-2 cursor-pointer border-white flex items-center justify-center transition-colors duration-300 hover:bg-[#1464f4] hover:border-[#1464f4]">
          <svg
            className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
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
    </div>
  )
}