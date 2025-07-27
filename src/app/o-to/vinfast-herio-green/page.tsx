import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Tabs } from "@/components/o-to/Tabs";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VinFast Mini Green",
};
export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green.png' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-c03.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-nc03-1200x675.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-c05.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-nc05-765x430.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-c06.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-c04.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-nc04-765x430.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-c02.jpg' },
    { name: 'vinfast-minio-green', image: '/images/vinfast-minio-green/vinfast-minio-green-280318-nc02-765x430.jpg' },
  ]

  const productTabs = [
    {
      id: "description",
      label: "MÔ TẢ",
      content: (
        <div className="font_mulishb">
          <div className="space-y-4">
            <div className="w-full">
              <Image
                src="/images/vinfast-minio-green/vinfast-minio-green-250318-g98b.jpg"
                alt="VinFast VF9 Banner 1"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[#3c3c3c] text-[23px] font-semibold">VINFAST GREEN – XE ĐIỆN DỊCH VỤ</h2>
              <h1 className="text-[41px] font-bold text-gray-900 mt-1 mb-6 uppercase">Vinfast Minio Green</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">170 <span className="text-[26px] font-normal">km</span></p>
                  <p className="text-[#3c3c3c] text-sm">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">30 <span className="text-[26px] font-normal">phút</span></p>
                  <p className="text-[#3c3c3c] text-sm">Thời gian nạp pin nhanh nhất.</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">4 <span className="text-[26px] font-normal">chỗ</span></p>
                  <p className="text-[#3c3c3c] text-sm">Số chỗ ngồi</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">20 <span className="text-[26px] font-normal">kW</span></p>
                  <p className="text-[#3c3c3c] text-sm">Công suất tối đa</p>
                </div>
              </div>
              <p className="mt-6 text-[#3c3c3c] text-base leading-relaxed bg-[#ECECEC] p-1.5">
                VinFast Minio Green trang bị động cơ điện có công suất tối đa 20 kW, pin có khả năng hoạt động tới 170 km sau mỗi lần sạc đầy, hỗ trợ cả sạc nhanh DC (công suất tối đa 12 kW) và sạc chậm AC (công suất tối đa 3,3 kW). Với hiệu quả kinh tế cao và khả năng vận hành linh hoạt, Minio Green là lựa chọn lý tưởng thay thế xe máy khi di chuyển nội đô, góp phần thay đổi diện mạo giao thông đô thị và nâng cao chất lượng cuộc sống.
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Ngoại thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Minio Green – Nhỏ gọn linh hoạt – Ngôi sao đường phố.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                VinFast Minio Green tối ưu cho những con phố chật hẹp với thiết kế nhỏ gọn, dễ dàng di chuyển và đậu, đỗ xe. Kiểu dáng MinioGreen hiện đại, phù hợp với nhiều phong cách từ sử dụng cá nhân đến kinh doanh dịch vụ. VinFast Minio Green có khoảng sáng gầm xe lý tưởng, giúp vượt chướng ngại vật dễ dàng. Cùng trải nghiệm “xe 4 bánh, tự do như 2” – Linh hoạt như xe máy, an toàn như xe hơi, phù hợp với mọi nhu cầu sử dụng.
              </p>
              <ImageWithCaption
                src="/images/vinfast-minio-green/vinfast-minio-green-250318-g97.jpg"
                alt="Ngoại Thất VinFast Minio Green"
                caption="Ngoại Thất VinFast Minio Green"
                className="pt-4 mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-sc01.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-nc01.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-sbc01.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-250303-ngt22.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-c04.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-c02.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-c06.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-c03.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-c05.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-minio-green/vinfast-minio-green-280318-c01.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nội thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Minio Green – Tối giản nhưng không thiếu tiện nghi.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                Nội Thất VinFast Minio Green thiết kế khoang lái được tối ưu để mang lại sự thoải mái bất ngờ. Ghế ngồi êm ái, màn hình trực quan, vô lăng tích hợp nút bấm giúp thao tác dễ dàng. Đầy đủ tiện ích cần thiết để di chuyển nội thành thuận tiện và thoải mái.
              </p>
              <div className="space-y-4">
                <div className="w-full">
                  <ImageWithCaption
                    src="/images/vinfast-minio-green/vinfast-minio-green-250318-nt34-1200x675.jpg"
                    alt="Nội Thất VinFast Minio Green"
                    caption="Nội Thất VinFast Minio Green"
                    className="pt-4 mb-8"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Image
                    src="/images/vinfast-minio-green/vinfast-minio-green-250318-nt33.jpg"
                    alt="VinFast VF9 Banner 2"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded"
                  />
                  <Image
                    src="/images/vinfast-minio-green/vinfast-minio-green-250318-nt32.jpg"
                    alt="VinFast VF9 Banner 2"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded"
                  />
                  <Image
                    src="/images/vinfast-minio-green/vinfast-minio-green-250318-nt31.jpg"
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
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Minio Green – Gọn nhẹ, tiết kiệm năng lượng.</h2>
              </div>
              <ul className="list-disc pl-5 pt-4">
                <li className="mb-[10px]">Số chỗ ngồi: 4 chỗ</li>
                <li className="mb-[10px]">Dài x Rộng x Cao: 3090 x 1496 x 1625</li>
                <li className="mb-[10px]">Chiều dài cơ sở: 2065 mm</li>
                <li className="mb-[10px]">Khoảng sáng gầm xe: 155 mm</li>
                <li className="mb-[10px]">Kích thước la-zăng: 13 inch</li>
                <li className="mb-[10px]">Thời gian nạp pin: 30 phút (10%-70%)</li>
                <li className="mb-[10px]">Quãng đường chạy (NEDC): 170 km/lần sạc đầy</li>
                <li className="mb-[10px]">Chế độ lái: Eco/Normal</li>
                <li className="mb-[10px]">Đóng/mở cốp sau: Chỉnh cơ</li>
              </ul>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thư viện ảnh</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast Minio Green</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 mt-3">
              <img src="/images/vinfast-minio-green/vinfast-minio-green-250318-g96.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-minio-green/vinfast-minio-green-250318-g98b.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-minio-green/vinfast-minio-green-250318-g95.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-minio-green/vinfast-minio-green-250318-g97.jpg" alt="thong so ky thuat" />
            </div>
            <img src="/images/vinfast-minio-green/vinfast-minio-green-250318-g93.jpg" alt="thong so ky thuat" />
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
            <span className="font-semibold">Ô TÔ VINFAST</span>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[60%]">
            <CarColorSlider carVariants={carVariants} />
          </div>
          <div className="w-full md:w-[40%]">
            <ProductInfo
              title="VinFast Minio Green"
              price="269.000.000"
              variants={[
                { name: 'VinFast Minio Green', price: '269.000.000' },
              ]}
              rangePerCharge="170 km"
              maxPower="20 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
