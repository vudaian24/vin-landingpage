import { PhoneIcon } from 'lucide-react'
import ButtonCustom from '../ui/ButtonCustom'
import SocialShare from './SocialShare'

interface ProductInfoProps {
  name: string
  price: string
  description: string
  range: string
  power: string
  hotline: string
}

export const ProductInfo = ({
  name,
  price,
  description,
  range,
  power,
  hotline
}: ProductInfoProps) => {
  return (
    <div className="space-y-4 text-gray-800">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-xl text-blue-600 font-semibold">{price}</p>

      <div className="bg-gray-100 p-3 rounded">
        <p className="font-semibold">{description}</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li><strong>{range}</strong> / 1 lần sạc</li>
          <li><strong>{power}</strong> công suất tối đa</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-sm text-blue-700">
        *Quý khách liên hệ hotline, nhận thông tin khuyến mãi và ưu đãi.
      </div>

      <div className="flex gap-4 sm:items-center flex-col sm:flex-row">
        <ButtonCustom
          label="BÁO GIÁ LĂN BÁNH"
          variant="primary"
          icon={<span>🎁 </span>}
          className="font-bold w-fit text-center px-6 py-2 text-[14px]"
        />
        <ButtonCustom
          href={`tel:${hotline || '0783382001'}`}
          label={hotline || '0783382001'}
          variant="outline"
          icon={<PhoneIcon className="w-4 h-4 mr-1" />}
          className="font-bold w-fit text-center px-6 py-2 text-[14px]"
        />
      </div>
      <SocialShare />
    </div>
  )
}
