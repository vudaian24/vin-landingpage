import CarColorSlider from '@/components/o-to/CarColorSlider'
import { ProductInfo } from '@/components/o-to/ProductInfo'
import { Tabs } from '@/components/o-to/Tabs'
import { ImageWithCaption } from '@/components/ui/ImageWithCaption'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "VinFast Herio Green - Xe điện dịch vụ mạnh mẽ, linh hoạt",
  description: "Khám phá VinFast Herio Green: xe ô tô điện 5 chỗ với quãng đường 326 km/lần sạc, sạc nhanh 33 phút, công suất 100 kW, thiết kế an toàn và tiện nghi hiện đại.",
};

export default async function ProductDetailPage() {
  const carVariants = [
    {
      name: 'vinfast-herio-green',
      image: '/images/vinfast-herio-green/vinfast-herio-green.png'
    },
    {
      name: 'vinfast-herio-green',
      image: '/images/vinfast-herio-green/vinfast-herio-green-250318-c02-1200x675.jpg',
    },
    {
      name: 'vinfast-herio-green',
      image: '/images/vinfast-herio-green/vinfast-herio-green-250318-bc02.jpg',
    },
    {
      name: 'vinfast-herio-green',
      image: '/images/vinfast-herio-green/vinfast-herio-green-250318-c01-765x430.jpg',
    },
    {
      name: 'vinfast-herio-green',
      image: '/images/vinfast-herio-green/vinfast-herio-green-250318-bc01-765x430.jpg',
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
                src="/images/vinfast-herio-green/vinfast-herio-green-250318-g99-1200x675.jpg"
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
                VinFast Herio Green
              </h1>
              <div className="grid grid-cols-1 divide-y divide-gray-50 overflow-hidden rounded-lg bg-[#ECECEC] md:grid-cols-2 md:divide-x lg:grid-cols-4 lg:divide-y-0">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    326 <span className="text-[26px] font-normal">km</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    33 <span className="text-[26px] font-normal">phút (10%-70%)</span>
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
                    100 <span className="text-[26px] font-normal">kW</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Công suất tối đa</p>
                </div>
              </div>
              <p className="mt-6 bg-[#ECECEC] p-1.5 text-base leading-relaxed text-[#3c3c3c]">
                VinFast Herio Green sở hữu công suất động cơ mạnh nhất phân khúc, giúp tăng tốc
                nhanh, vận hành êm ái và linh hoạt trên phố. Được thiết kế gọn gàng nhưng đầy năng
                lượng, công suất và lực kéo vượt trội, trang bị túi khí nhiều nhất phân khúc, đảm
                bảo an toàn trên nhiều địa hình, Herio Green phù hợp cho cả nhu cầu di chuyển cá
                nhân và dịch vụ vận doanh.
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="mx-auto max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Ngoại thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast Herio Green – Xe quốc dân – Vận hành linh hoạt.
                </h2>
              </div>
              {/* <p className="mt-2 text-base text-[#3c3c3c]">
                VinFast Minio Green tối ưu cho những con phố chật hẹp với thiết kế nhỏ gọn, dễ dàng
                di chuyển và đậu, đỗ xe. Kiểu dáng MinioGreen hiện đại, phù hợp với nhiều phong cách
                từ sử dụng cá nhân đến kinh doanh dịch vụ. VinFast Minio Green có khoảng sáng gầm xe
                lý tưởng, giúp vượt chướng ngại vật dễ dàng. Cùng trải nghiệm “xe 4 bánh, tự do như
                2” – Linh hoạt như xe máy, an toàn như xe hơi, phù hợp với mọi nhu cầu sử dụng.
              </p> */}
              <ImageWithCaption
                src="/images/vinfast-herio-green/vinfast-herio-green-250303-ngt23.jpg"
                alt="Ngoại Thất VinFast Herio Green"
                caption="Ngoại Thất VinFast Herio Green"
                className="mb-8 pt-4"
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <img
                  src="/images/vinfast-herio-green/vinfast-herio-green-250303-ngt21.jpg"
                  alt="thong so ky thuat"
                />
                <img
                  src="/images/vinfast-herio-green/vinfast-herio-green-250303-ngt22.jpg"
                  alt="thong so ky thuat"
                />
              </div>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Nội thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast Herio Green – Khoang lái thoải mái – Thiết kế thông minh.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                Tối ưu không gian cho tài xế vận hành nhiều giờ mà vẫn thư thái. Ghế ngồi thiết kế
                mỏng giúp mở rộng không gian để chân. Màn hình giải trí trung tâm trực quan, thao
                tác nhanh chóng. Hệ thống lọc không khí PM2.5 giúp khoang lái luôn trong lành, mang
                lại trải nghiệm dễ chịu cho cả tài xế và hành khách.
              </p>
              <div className="space-y-4">
                <div className="w-full">
                  <ImageWithCaption
                    src="/images/vinfast-herio-green/vinfast-herio-green-250318-nt34.jpg"
                    alt="Nội Thất VinFast Herio Green"
                    caption="Nội Thất VinFast Herio Green"
                    className="mb-8 pt-4"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Image
                    src="/images/vinfast-herio-green/vinfast-herio-green-250318-nt31.jpg"
                    alt="VinFast VF9 Banner 2"
                    width={600}
                    height={400}
                    className="h-auto w-full rounded"
                  />
                  <Image
                    src="/images/vinfast-herio-green/vinfast-herio-green-250318-nt32.jpg"
                    alt="VinFast VF9 Banner 2"
                    width={600}
                    height={400}
                    className="h-auto w-full rounded"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thông số xe</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast Herio Green – Vận hành mạnh mẽ.
                </h2>
              </div>
              <ul className="list-disc pt-4 pl-5">
                <li className="mb-[10px]">Số chỗ ngồi: 5 chỗ</li>
                <li className="mb-[10px]">Dài x Rộng x Cao: 3967 x 1723 x 1579</li>
                <li className="mb-[10px]">Chiều dài cơ sở: 2514 mm</li>
                <li className="mb-[10px]">Khoảng sáng gầm xe: 160 mm</li>
                <li className="mb-[10px]">Kích thước la-zăng: 16 inch</li>
                <li className="mb-[10px]">Thời gian nạp pin: 33 phút (10%-70%)</li>
                <li className="mb-[10px]">Quãng đường chạy (NEDC): 326 km/lần sạc đầy</li>
                <li className="mb-[10px]">Chế độ lái: Eco/Sport</li>
                <li className="mb-[10px]">Đóng/mở cốp sau: Chỉnh cơ</li>
              </ul>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thư viện ảnh</h1>
                <h2 className="text-[22px] font-bold text-gray-800">VinFast Herio Green</h2>
              </div>
            </div>
            <div className="mt-3 mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img
                src="/images/vinfast-herio-green/vinfast-herio-green-250303-ngt23.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-herio-green/vinfast-herio-green-250303-ngt21.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-herio-green/vinfast-herio-green-250303-ngt22.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-herio-green/vinfast-herio-green-250318-nt34.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-herio-green/vinfast-herio-green-250318-nt32.jpg"
                alt="thong so ky thuat"
              /><img
                src="/images/vinfast-herio-green/vinfast-herio-green-250318-nt32.jpg"
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
              title="VinFast Herio Green"
              price="269.000.000"
              variants={[{ name: 'VinFast Herio Green', price: '499.000.000' }]}
              rangePerCharge="326 km"
              maxPower="100 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
