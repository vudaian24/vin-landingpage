'use client'

import React from 'react'
import ButtonCustom from '../ui/ButtonCustom'
import { PhoneIcon } from 'lucide-react'
import SocialShare from './SocialShare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import ContactModal from '../ui/ContactModal'

interface ProductInfoProps {
  title: string
  price: string
  variants: { name: string; price: string }[]
  rangePerCharge: string
  maxPower: string
  hotline: string
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  variants,
  rangePerCharge,
  maxPower,
  hotline,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full  rounded  text-sm font-sans bg-white">
      <h1 className="text-[32px] font-bold">{title}</h1>
      <div className="text-[#0062DC] text-2xl font-bold mt-1">
        {price} <span className="text-sm align-top">VNĐ</span>
      </div>

      <div className="mt-4">
        <div className="bg-gray-100 text-base font-bold p-[5px]">
          BẢNG GIÁ XE {title.toUpperCase()}
        </div>
        <div className='pl-2'>
          <ul className="text-[15px] leading-6 px-3 py-2">
            {variants.map((variant, index) => (
              <li key={index} className='list-disc'>
                {variant.name}: <span className="text-[#0062DC]">{variant.price} VNĐ</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 text-[15px] text-neutral-700 bg-[#E0E0E0] p-[5px]">
        <span className="font-bold text-black">{rangePerCharge}</span>/1 lần sạc | Công suất tối đa
        <span className="font-bold text-black"> {maxPower}</span>
      </div>

      <div className="mt-4 bg-[#0062DC] text-white text-[13px] p-2">
        <span>KHUYẾN MÃI & ƯU ĐÃI</span>
        <br />
        <i>*Quý khách liên hệ hotline, nhận thông tin khuyến mãi và ưu đãi.</i>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="flex gap-4 lg:items-center flex-col lg:flex-row w-full justify-between items-start">
          <ButtonCustom
            label="BÁO GIÁ LĂN BÁNH"
            variant="primary"
            icon={<span><FontAwesomeIcon icon={faGift} size="lg" /> </span>}
            className="font-bold w-fit text-center px-6.5 py-2 text-[14px]"
            onClick={() => setOpen(true)}
          />
          <ButtonCustom
            href={`tel:${hotline || '0783382001'}`}
            label={hotline || '0783382001'}
            variant="primary"
            icon={<PhoneIcon className="w-4 h-4 mr-1" fill='#fff' />}
            className="font-bold w-fit text-center px-6.5 py-2 text-[14px]"
          />
        </div>
      </div>
      <SocialShare />
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
