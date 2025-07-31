import CarColorSlider from '@/components/o-to/CarColorSlider'
import { ProductInfo } from '@/components/o-to/ProductInfo'
import { Tabs } from '@/components/o-to/Tabs'
import { ImageWithCaption } from '@/components/ui/ImageWithCaption'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'VinFast VF 6 – Xe điện SUV cá tính, công suất mạnh mẽ, quãng đường 339 km',
  description: 'Khám phá VinFast VF 6 với thiết kế “Cặp đối lập tự nhiên”, công suất 150 kW (201 hp), dung lượng pin 59,6 kW và quãng đường đi được 339 km mỗi lần sạc. Trải nghiệm công nghệ tiên tiến, tinh tế và hiện đại.',
}

export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0064_vf-6.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0062_vf-6s.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0066_vf-6-765x430.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0059_vf-6s-765x430.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0063_vf-6-765x430.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0061_vf-6s-765x430.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0065_vf-6-765x430.jpg' },
    { name: 'vinfast-vf-6', image: '/images/vinfast-vf-6/vinfast-231207_0060_vf-6s-765x430.jpg' },
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
                src="/images/vinfast-vf-6/vinfast-vf-6-231205-01.jpg"
                alt="VinFast VF6 Banner 1"
                width={1200}
                height={600}
                className="h-auto w-full rounded"
              />
            </div>
          </div>
          <section className="bg-white py-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 divide-y divide-gray-50 overflow-hidden rounded-lg bg-[#ECECEC] md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    339<span className="text-[26px] font-normal">km</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    150 <span className="text-[26px] font-normal">kW</span>/
                    <span className="text-[40px]">201</span>{' '}
                    <span className="text-[26px] font-normal">hp</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Công suất tối đa</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    59,6 <span className="text-[26px] font-normal">kW</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Dung lượng pin</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="mx-auto max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thiết kế</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 6. Triết lý thiết kế “Cặp đối lập tự nhiên”
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                VinFast VF 6 là tuyệt tác nghệ thuật được thiết kế dựa trên triết lý “Cặp đối lập tự
                nhiên”, tạo nên sự cân bằng hoàn hảo giữa các yếu tố tưởng chừng như đối lập: thú vị
                – tinh tế, công nghệ – con người.
              </p>
              <img
                src="/images/vinfast-vf-6/vinfast-vf6-012.jpg"
                alt="thong so ky thuat"
                className="mb-8 pt-4"
              />
            </div>
            <div>
              <div className="mx-auto max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Ngoại thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 6. Cá tính và tinh tế.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                VinFast VF 6 mang phong cách cá tính và tinh tế bên ngoài cùng trải nghiệm công nghệ
                tiên tiến hiện đại bên trong, do nhà thiết kế xe hơi nổi tiếng thế giới Torino
                Design chắp bút cùng VinFast.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-6/vinfast-vf6-03.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Ngoại Thất VinFast VF 6"
                className="mb-8 pt-4"
              />
              <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <img src="/images/vinfast-vf-6/vinfast-vf6-010.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-6/vinfast-vf6-011.jpg" alt="thong so ky thuat" />
              </div>
              <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <img src="/images/vinfast-vf-6/vinfast-vf6-05.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-6/vinfast-vf6-07.jpg" alt="thong so ky thuat" />
              </div>
              <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <img src="/images/vinfast-vf-6/vinfast-vf6-09.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-6/vinfast-vf6-08.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div className="pt-10">
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Nội thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 6. Không gian rộng rãi và thoải mái.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                Thiết kế nội thất lấy cảm hứng từ ngôi nhà thứ hai của gia đình với không gian rộng
                rãi, thoải mái cùng hai màu nội thất và chất liệu tự nhiên, thân thiện với người
                dùng.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-6/vinfast-vf6-014.jpg"
                alt="Noi that xe VF 6"
                caption="Nội Thất VinFast VF 6"
                className="mb-8 pt-4"
              />
              <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <img src="/images/vinfast-vf-6/vinfast-vf6-022.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-6/vinfast-vf6-023.jpg" alt="thong so ky thuat" />
              </div>
              <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <img src="/images/vinfast-vf-6/vinfast-vf6-026.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-6/vinfast-vf6-021.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div className="mx-auto mt-10 max-w-6xl">
              <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">
                Thông số kỹ thuật
              </h1>
              <h2 className="text-[22px] font-bold text-gray-800">VinFast VF 6 Eco</h2>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <img
                src="/images/vinfast-vf-6/vinfast-vf-6-250309-tskt-b01.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-6/vinfast-vf-6-250309-tskt-b02.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-6/vinfast-vf-6-250309-tskt-b03.jpg"
                alt="thong so ky thuat"
              />
            </div>
            <h2 className="my-6 text-[22px] font-bold text-gray-800">VinFast VF 6 Plus</h2>
            <div className="mt-3 flex flex-col gap-3">
              <img
                src="/images/vinfast-vf-6/vinfast-vf-6-250309-tskt-p01.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-6/vinfast-vf-6-250309-tskt-p02.jpg.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-6/vinfast-vf-6-250309-tskt-p04.jpg"
                alt="thong so ky thuat"
              />
            </div>
            <div className="mx-auto mt-10 max-w-6xl">
              <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thư viện ảnh</h1>
              <h2 className="text-[22px] font-bold text-gray-800">VinFast VF 6</h2>
            </div>
            <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img src="/images/vinfast-vf-6/vinfast-vf6-019.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-6/vinfast-vf6-017.jpg" alt="thong so ky thuat" />
            </div>
            <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img src="/images/vinfast-vf-6/vinfast-vf6-018.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-6/vinfast-vf6-022.jpg" alt="thong so ky thuat" />
            </div>
            <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img src="/images/vinfast-vf-6/vinfast-vf6-023.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-6/vinfast-vf6-026.jpg" alt="thong so ky thuat" />
            </div>{' '}
            <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img src="/images/vinfast-vf-6/vinfast-vf6-020.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-6/vinfast-vf6-021.jpg" alt="thong so ky thuat" />
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
              title="VinFast VF 6"
              price="689.000.000"
              variants={[
                { name: 'VinFast VF 6 Eco', price: '689.000.000' },
                { name: 'VinFast VF 6 Plus', price: '749.000.000' },
              ]}
              rangePerCharge="681 km"
              maxPower="150 kW/201 hp"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
