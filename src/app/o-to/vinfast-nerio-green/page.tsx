import CarColorSlider from '@/components/o-to/CarColorSlider'
import { ProductInfo } from '@/components/o-to/ProductInfo'
import { Tabs } from '@/components/o-to/Tabs'
import { ImageWithCaption } from '@/components/ui/ImageWithCaption'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'VinFast Nerio Green - Xe điện 5 chỗ, công suất 110 kW',
  description:
    'VinFast Nerio Green - xe ô tô điện 5 chỗ, quãng đường tối đa 318,6 km, thời gian sạc nhanh 27 phút (10%-70%), công suất 110 kW, thiết kế hiện đại, phù hợp di chuyển trong đô thị và đường dài.',
}
export default async function ProductDetailPage() {
  const carVariants = [
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green.png'
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250303-ngt23-1200x675.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250303-ngt21.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250318-c02-765x430.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250318-bc02-765x430.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250318-c03-765x430.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250318-bc03-765x430.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250318-c01-765x430.jpg',
    },
    {
      name: 'vinfast-nerio-green',
      image: '/images/vinfast-nerio-green/vinfast-nerio-green-250318-bc01-765x430.jpg',
    },
  ]

  const productTabs = [
    {
      id: 'description',
      label: 'MÔ TẢ',
      content: (
        <div className="font_mulishb">
          <div className="space-y-4">
            <div className="w-full">
              <Image
                src="/images/vinfast-nerio-green/vinfast-nerio-green-250318-g99-1200x675.jpg"
                alt="VinFast Banner 1"
                width={1200}
                height={600}
                className="h-auto w-full border-0"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-[23px] font-semibold text-[#3c3c3c]">
                VINFAST GREEN – XE ĐIỆN DỊCH VỤ
              </h2>
              <h1 className="mt-1 mb-6 text-[41px] font-bold text-gray-900 uppercase">
                Vinfast Nerio Green
              </h1>
              <div className="grid grid-cols-1 divide-y divide-gray-50 overflow-hidden rounded-lg bg-[#ECECEC] md:grid-cols-2 md:divide-x lg:grid-cols-4 lg:divide-y-0">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    318,6 <span className="text-[26px] font-normal">km</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    27 <span className="text-[26px] font-normal">phút (10%-70%)</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Thời gian nạp pin nhanh nhất.</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    5 <span className="text-[26px] font-normal">chỗ</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Số chỗ ngồi</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    110 <span className="text-[26px] font-normal">kW</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Công suất tối đa</p>
                </div>
              </div>
              <p className="mt-6 bg-[#ECECEC] p-1.5 text-base leading-relaxed text-[#3c3c3c]">
                VinFast Nerio Green có chiều dài cơ sở lên tới 2.611 mm, chiều dài tổng thể 4.300
                mm, mang đến không gian nội thất rộng rãi, thoải mái cùng khoang chứa đồ lớn, phù
                hợp với phân khúc dịch vụ cao cấp hơn. Xe hướng đến nhóm khách hàng đề cao trải
                nghiệm ở hàng ghế sau cùng những tính năng thông minh, công nghệ an toàn hiện đại.
                Nerio Green có khả năng di chuyển tối đa hơn 318 km sau mỗi lần sạc đầy, thời gian
                sạc pin từ 10% lên 70% chỉ trong 27 phút.
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="mx-auto max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Ngoại thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast Nerio Green – Bền bỉ, linh hoạt – Tối ưu cho mọi hành trình.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                VinFast Nerio Green – sản phẩm kết hợp công suất mạnh mẽ với khả năng vận hành ổn
                định trên nhiều địa hình. Xe linh hoạt trong phố, vững vàng trên đường trường. Với
                hệ thống pin tối ưu giúp quãng đường di chuyển dài hơn, tiết kiệm chi phí vận hành.
              </p>
              <ImageWithCaption
                src="/images/vinfast-nerio-green/vinfast-nerio-green-250303-ngt25-1200x675.jpg"
                alt="Ngoại Thất VinFast Nerio Green"
                caption="Ngoại Thất VinFast Nerio Green"
                className="mb-8 pt-4"
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <img
                  src="/images/vinfast-nerio-green/vinfast-nerio-green-250318-c02.jpg"
                  alt="thong so ky thuat"
                />
                <img
                  src="/images/vinfast-nerio-green/vinfast-nerio-green-250318-bc02.jpg"
                  alt="thong so ky thuat"
                />
                <img
                  src="/images/vinfast-nerio-green/vinfast-nerio-green-250303-ngt23.jpg"
                  alt="thong so ky thuat"
                />
                <img
                  src="/images/vinfast-nerio-green/vinfast-nerio-green-250303-ngt22.jpg"
                  alt="thong so ky thuat"
                />
              </div>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Nội thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast Nerio Green – Công nghệ tiên tiến – Kiểm soát dễ dàng.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                Khoang lái rộng rãi, thiết kế thông minh giúp tài xế vận hành thoải mái. Màn hình trung tâm lớn, hỗ trợ trợ lý ảo và điều khiển bằng giọng nói. Camera 360 độ hữu dụng cùng hệ thống hỗ trợ lái giúp vận hành an toàn. Hệ thống lọc không khí tự động giữ khoang xe trong lành, đảm bảo trải nghiệm dễ chịu dù di chuyển trong đô thị hay trên đường dài.
              </p>
              <div className="space-y-4">
                <div className="w-full">
                  <ImageWithCaption
                    src="/images/vinfast-nerio-green/vinfast-nerio-green-250303-nt31-1200x675.jpg"
                    alt="Nội Thất VinFast Nerio Green"
                    caption="Nội Thất VinFast Nerio Green"
                    className="mb-8 pt-4"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thông số xe</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast Nerio Green – Mạnh mẽ, bền bỉ, tối ưu cho mọi hành trình.
                </h2>
              </div>
              <ul className="list-disc pt-4 pl-5">
                <li className="mb-[10px]">Số chỗ ngồi: 5 chỗ</li>
                <li className="mb-[10px]">Dài x Rộng x Cao: 4300 x 1768 x 1615</li>
                <li className="mb-[10px]">Chiều dài cơ sở: 2611 mm</li>
                <li className="mb-[10px]">Khoảng sáng gầm xe: 165 mm</li>
                <li className="mb-[10px]">Kích thước la-zăng: 18 inch</li>
                <li className="mb-[10px]">Thời gian nạp pin: 27 phút (10%-70%)</li>
                <li className="mb-[10px]">Quãng đường chạy (NEDC): 318,6 km/lần sạc đầy</li>
                <li className="mb-[10px]">Chế độ lái: Eco/Comfort/Sport</li>
                <li className="mb-[10px]">Đóng/mở cốp sau: Chỉnh điện.</li>
              </ul>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thư viện ảnh</h1>
                <h2 className="text-[22px] font-bold text-gray-800">VinFast Nerio Green</h2>
              </div>
            </div>
            <div className="mt-3 mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img
                src="/images/vinfast-nerio-green/vinfast-nerio-green-250318-c02.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-nerio-green/vinfast-nerio-green-250303-ngt25.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-nerio-green/vinfast-nerio-green-250318-bc02.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-nerio-green/vinfast-nerio-green-250303-nt31.jpg"
                alt="thong so ky thuat"
              />
            </div>
          </section>
        </div>
      ),
    },
    {
      id: 'reviews',
      label: 'ĐÁNH GIÁ (0)',
      content: (
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-[20px] font-semibold text-neutral-900">Đánh giá</h3>
            <p className="text-[16px] text-neutral-600">Chưa có đánh giá nào.</p>
          </div>
          <div className="rounded border border-[#1464f4] p-7">
            <p className="text-[16px]">
              Chỉ những khách hàng đã đăng nhập và mua sản phẩm này mới có thể đưa ra đánh giá.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1080px] px-4">
        <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav className="text-[18px] text-[#666666b3]">
            <span className="cursor-pointer hover:underline">TRANG CHỦ</span>
            <span className="mx-1.5">/</span>
            <span className="font-semibold">Ô TÔ VINFAST</span>
          </nav>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-[60%]">
            <CarColorSlider carVariants={carVariants} />
          </div>
          <div className="w-full md:w-[40%]">
            <ProductInfo
              title="VinFast Nerio Green"
              price="668.000.000"
              variants={[{ name: 'VinFast Nerio Green', price: '668.000.000' }]}
              rangePerCharge="318,6 km"
              maxPower="110 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
