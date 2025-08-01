'use client'

import Image from 'next/image'
import { Gift, Menu } from 'lucide-react'
import { vinfastCars } from '@/data/mock-data'
import ButtonCustom from '../ui/ButtonCustom'
import { useState } from 'react'
import ContactModal from '../ui/ContactModal'

export default function CarList() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="max-w-[1080px] mx-auto py-8">
      <h2 className="text-[30px] font-bold text-black mb-4 text-center">XE Ô TÔ ĐIỆN VINFAST</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {vinfastCars.map((car, index) => (
          <div
            key={index}
            className="px-[15px] pb-[30px] flex flex-col items-center text-center"
          >
            <div className="relative w-full lg:max-w-[330px] aspect-[38/25] mx-auto mb-4">
              <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <div className="w-full px-4 md:px-10 lg:px-4">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-bold text-lg">{car.name}</h3>
                <p className="text-[#1464f4] font-semibold text-sm mt-1 mb-4">
                  GIÁ TỪ: {car.price}
                </p>
              </div>

              <div className="flex w-full overflow-hidden gap-2 justify-start">
                <ButtonCustom
                  label="BÁO GIÁ LĂN BÁNH"
                  variant="primary"
                  icon={<Gift size={14} />}
                  className="text-[12px] px-3 py-1 flex-1 sm:flex-none w-full sm:w-auto whitespace-nowrap"
                  onClick={() => setIsOpen(true)}
                />
                <ButtonCustom
                  label="XEM XE"
                  variant="outline"
                  icon={<Menu size={14} />}
                  className="text-[12px] px-3 py-1 flex-1 sm:flex-none w-full sm:w-auto"
                  href={car.link}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
