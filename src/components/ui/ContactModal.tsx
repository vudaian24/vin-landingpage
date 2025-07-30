'use client'

import Modal from "./Modal"
import Image from "next/image"
import { Phone, Search, User } from "lucide-react"
import { useEffect, useState } from "react"

interface ModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ModalProps) {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    car: '',
    pay_method: '',
  })

  useEffect(() => {
    setFormValues({
      name: '',
      phone: '',
      car: '',
      pay_method: '',
    })
  }, [open])


  const handleSubmit = async () => {
    const message = `
🧾 *Thông tin khách hàng*:
👤 Họ tên: ${formValues.name}
📞 SĐT: ${formValues.phone}
🚗 Xe quan tâm: ${formValues.car}
💳 Hình thức thanh toán: ${formValues.pay_method}
`;

    const res = await fetch(`https://api.telegram.org/bot7599022304:AAGNEH92jz9Z0R5KF36Iqf1HtUbaJKrBhKM/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: '6826964067',
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!res.ok) {
      throw new Error("Gửi Telegram thất bại");
    }

    onClose();
  }
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
            priority={true}
          />
        </div>
        <div className="p-6 relative">
          <h2 className="!text-blue-600 font-bold text-base mb-4">
            BÁO GIÁ LĂN BÁNH & LÁI THỬ XE
          </h2>
          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <span className="mr-2 text-black text-sm"><User fill="currentColor" size={16} /></span>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={formValues.name}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              className="w-full outline-none text-sm placeholder-gray-500"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <span className="mr-2 text-black text-sm"><Phone fill="currentColor" size={16} /></span>
            <input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
              placeholder="Di động *"
              className="w-full outline-none text-sm placeholder-gray-500"
            />
          </div>
          <div className="flex items-center border border-gray-300 py-2 px-3 mb-4 rounded">
            <span className="mr-2 text-gray-600 text-sm"><Search /></span>
            <label htmlFor="car-select" className="sr-only">Chọn xe</label>
            <select
              name="car"
              id="car-select"
              className="w-full outline-none text-sm text-gray-700"
              value={formValues.car}
              onChange={(e) => setFormValues({ ...formValues, car: e.target.value })}
            >
              <option value="">Chọn xe</option>
              <option value="VF3">Vinfast VF 3</option>
              <option value="VF5">Vinfast VF 5</option>
              <option value="VF6">Vinfast VF 6</option>
              <option value="VF7">Vinfast VF 7</option>
              <option value="VF8">Vinfast VF 8</option>
              <option value="VF9">Vinfast VF 9</option>
            </select>
          </div>
          <div className="flex items-center mb-4 space-x-6 text-sm justify-center">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="payment"
                value="Trả góp"
                onChange={(e) => setFormValues({ ...formValues, pay_method: e.target.value })}
                className="accent-[#459bac]"
              />
              <span>Trả góp</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="payment"
                value="Trả thẳng"
                onChange={(e) => setFormValues({ ...formValues, pay_method: e.target.value })}
                className="accent-[#459bac]"
              />
              <span>Trả thẳng</span>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              aria-label="Submit"
              className="bg-blue-600 text-white w-fit px-4 py-2 hover:bg-blue-700 text-sm font-semibold"
              onClick={handleSubmit}
            >
              NHẬN THÔNG TIN
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}