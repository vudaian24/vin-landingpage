'use client'

import { ReactNode } from "react"
import Modal from "./Modal"
import Image from "next/image"
import { Phone, Search, User } from "lucide-react"

interface ModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ModalProps) {
  return (
    <Modal open={open} onClose={onClose} className="w-[650px]">
      <div className="flex items-center justify-center py-2">
        <div className="w-[305px] h-[305px] relative">
          <Image
            src="/images/banner-vinfast-vf-9-01.jpg"
            alt="VF9"
            fill
            sizes="305px"
            className="object-cover"
          />
        </div>
        <div className="p-6 relative">
          <h2 className="!text-blue-600 font-bold text-base mb-4">
            BÁO GIÁ LĂN BÁNH & LÁI THỬ XE
          </h2>
          <form>
            <div className="flex items-center border-b border-gray-300 py-2 mb-4">
              <span className="mr-2 text-black text-sm"><User fill="currentColor" size={16} /></span>
              <input
                type="text"
                name="name"
                placeholder="Họ và tên"
                className="w-full outline-none text-sm placeholder-gray-500"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2 mb-4">
              <span className="mr-2 text-black text-sm"><Phone fill="currentColor" size={16} /></span>
              <input
                type="tel"
                name="phone"
                placeholder="Di động *"
                className="w-full outline-none text-sm placeholder-gray-500"
              />
            </div>
            <div className="flex items-center border border-gray-300 py-2 px-3 mb-4 rounded">
              <span className="mr-2 text-gray-600 text-sm"><Search /></span>
              <select
                name="car"
                className="w-full outline-none text-sm text-gray-700"
              >
                <option value="">Chọn xe</option>
                <option value="VF3">VF 3</option>
                <option value="VF6">VF 6</option>
                <option value="VF8">VF 8</option>
                <option value="VF9">VF 9</option>
              </select>
            </div>
            <div className="flex items-center mb-4 space-x-6 text-sm justify-center">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="payment"
                  value="installment"
                  className="accent-[#459bac]"
                />
                <span>Trả góp</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="payment"
                  value="full"
                  className="accent-[#459bac]"
                />
                <span>Trả thẳng</span>
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white w-fit px-4 py-2 hover:bg-blue-700 text-sm font-semibold"
              >
                NHẬN THÔNG TIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}