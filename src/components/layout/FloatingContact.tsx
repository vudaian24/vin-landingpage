'use client'
import Link from 'next/link'
import ContactButton from './ContactButton'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function FloatingContact() {
  return (
    <div className="fixed left-4 bottom-[8%] transform z-50 flex flex-col items-center gap-6">
      <ContactButton
        iconUrl="https://vinfastautolongbien.vn/wp-content/plugins/button-contact-vr/img/zalo.png"
        alt="Zalo"
        link="https://zalo.me/0783382001"
        background='bg-[#2196F3]'
      />
      <ContactButton
        alt="Phone"
        link="tel:0783382001"
        isPhone
        children={<PhoneBar />}
        background='bg-[#00adef]'
        iconUrl="https://vinfastautolongbien.vn/wp-content/plugins/button-contact-vr/img/phone.png"
      />
    </div>
  )
}

const PhoneBar = () => {
  return (
    <Link href={"tel:0783382001"} className='absolute hidden md:flex w-[162px] items-center left-3 gap-4 whitespace-nowrap text-white bg-[#2196F3] text-base px-[15px] top-3 py-[7px] rounded-full'>
      <Image
        src="https://vinfastautolongbien.vn/wp-content/plugins/button-contact-vr/img/phone.png"
        width={25}
        height={25}
        alt="phone-icon"
        className='w-[25px] h-[25px] shake-rotate'
      />
      <span className='text-base'>0783382001</span>
    </Link>
  )
}
