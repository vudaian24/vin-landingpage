import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Tabs } from "@/components/o-to/Tabs";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VinFast Limo Green",
};
export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green.png' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-c03.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-sc03.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-c04.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-bc04.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-c01.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-sc01.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-c02.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-250318-sc02.jpg' },
    { name: 'vinfast-limo-green', image: '/images/vinfast-limo-green/vinfast-limo-green-765x430.png' },
  ];

  const productTabs = [
    {
      id: "description",
      label: "MÔ TẢ",
      content: (
        <div className="font_mulishb">
          <div className="space-y-4">
            <div className="w-full">
              <Image
                src="/images/vinfast-limo-green/vinfast-limo-green-250318-g97-1200x675.jpg"
                alt="vinfast-limo-green"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[#3c3c3c] text-[23px] font-semibold">VINFAST GREEN - XE ĐIỆN DỊCH VỤ</h2>
              <h1 className="text-[41px] font-bold text-gray-900 mt-1 mb-6 uppercase">Vinfast LIMO Green</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">450 <span className="text-[26px] font-normal">km</span></p>
                  <p className="text-[#3c3c3c] text-sm">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">30 <span className="text-[26px] font-normal">phút (10%-70%)</span></p>
                  <p className="text-[#3c3c3c] text-sm">Thời gian nạp pin nhanh nhất.</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">7 <span className="text-[26px] font-normal">chỗ</span></p>
                  <p className="text-[#3c3c3c] text-sm">Số chỗ ngồi</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">150 <span className="text-[26px] font-normal">kW</span></p>
                  <p className="text-[#3c3c3c] text-sm">Công suất tối đa</p>
                </div>
              </div>
              <p className="mt-6 text-[#3c3c3c] text-base leading-relaxed bg-[#ECECEC] p-1.5">
                VinFast Limo Green 7 chỗ. Xe có kích thước các chiều 4740 x 1872 x 1728 mm, chiều dài cơ sở 2840 mm, đủ không gian rộng rãi cho 3 hàng ghế. Sử dụng pin LFP, Limo Green có khả năng di chuyển lên tới 450 km sau mỗi lần sạc đầy.
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Ngoại thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Limo Green – 7 chỗ với 3 hàng ghế thoải mái.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                “Xe gia đình, xe của nhà mình” VinFast Limo Green mang đến trải nghiệm di chuyển vượt trội với khoang xe 7 chỗ rộng rãi, thiết kế tối ưu cho sự thoải mái, tiện lợi và đa di năng. VinFast Limo Green có động cơ mạnh mẽ, vận hành êm ái, phù hợp cho cả gia đình và dịch vụ cao cấp. Chi phí vận hành tiết kiệm, dễ dàng đáp ứng nhu cầu di chuyển dài ngày.
              </p>
              <ImageWithCaption
                src="/images/vinfast-limo-green/vinfast-limo-green-250303-04-1200.jpg"
                alt="Ngoại Thất VinFast Limo Green"
                caption="Ngoại Thất VinFast Limo Green"
                className="pt-4 mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img src="/images/vinfast-limo-green/vinfast-limo-green-250303-05.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-limo-green/vinfast-limo-green-250303-03-1200b.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-limo-green/vinfast-limo-green-250303-07.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-limo-green/vinfast-limo-green-250303-06-1200.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nội thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Limo Green – Thoáng đãng, tiện nghi & thoải mái.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                Ghế ngồi rộng rãi, phù hợp với mọi lứa tuổi. Màn hình trung tâm trực quan, hệ thống lọc không khí PM2.5 giúp khoang xe luôn trong lành, đảm bảo những phút giây thư giãn thực sự trên những hành trình dài.
              </p>
              <div className="space-y-4">
                <div className="w-full">
                  <ImageWithCaption
                    src="/images/vinfast-limo-green/vinfast-limo-green-250303-nt-31-1200x675.jpg"
                    alt="Nội Thất VinFast Limo Green"
                    caption="Nội Thất VinFast Limo Green"
                    className="pt-4 mb-8"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/images/vinfast-limo-green/vinfast-limo-green-250303-nt-33.jpg"
                    alt="VinFast VF9 Banner 2"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded"
                  />
                  <Image
                    src="/images/vinfast-limo-green/vinfast-limo-green-250303-nt-32.jpg"
                    alt="VinFast VF9 Banner 2"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thông số xe</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Limo Green - Rộng rãi, tiện nghi - Lý tưởng cho những chuyến đi trọn vẹn.</h2>
              </div>
              <ul className="list-disc pl-5 pt-4">
                <li className="mb-[10px]">Số chỗ ngồi: 7 chỗ</li>
                <li className="mb-[10px]">Dài x Rộng x Cao: 4740 x 1872 x 1728</li>
                <li className="mb-[10px]">Chiều dài cơ sở: 2840 mm</li>
                <li className="mb-[10px]">Khoảng sáng gầm xe: 170 mm</li>
                <li className="mb-[10px]">Kích thước la-zăng: 18 inch</li>
                <li className="mb-[10px]">Thời gian nạp pin: 30 phút (10%-70%)</li>
                <li className="mb-[10px]">Quãng đường chạy (NEDC): 450 km/lần sạc đầy</li>
                <li className="mb-[10px]">Chế độ lái: Eco/Comfort/Sport</li>
                <li className="mb-[10px]">Đóng/mở cốp sau: Chỉnh cơ</li>
              </ul>
            </div>
            <img src="/images/vinfast-limo-green/vinfast-limo-green-250318-g98-1200x675.jpg" alt="thong so ky thuat" />
          </section>
        </div>
      ),
    },
    {
      id: "reviews",
      label: "ĐÁNH GIÁ (0)",
      content: (
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-[20px] font-semibold text-neutral-900">Đánh giá</h3>
            <p className="text-[16px] text-neutral-600">Chưa có đánh giá nào.</p>
          </div>
          <div className="border border-[#1464f4] p-7 rounded">
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
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <nav className="text-[18px] text-[#666666b3]">
            <span className="hover:underline cursor-pointer">TRANG CHỦ</span>
            <span className="mx-1.5">/</span>
            <span className="font-semibold uppercase">VinFast Green</span>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[60%]">
            <CarColorSlider carVariants={carVariants} />
          </div>
          <div className="w-full md:w-[40%]">
            <ProductInfo
              title="VinFast Limo Green"
              price="749.000.000"
              variants={[
                { name: 'VinFast Limo Green', price: '749.000.000' },
              ]}
              rangePerCharge="450 km"
              maxPower="150 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
