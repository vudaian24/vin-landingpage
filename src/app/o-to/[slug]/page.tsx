import { ImageSlider } from "@/components/o-to/ImageSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oto",
};

const images = [
  '/images/minio-yellow-1.png',
  '/images/minio-yellow-2.png',
  '/images/minio-yellow-3.png',
  '/images/minio-green.png',
  '/images/minio-yellow-1.png',
  '/images/minio-yellow-2.png',
  '/images/minio-yellow-3.png',
  '/images/minio-green.png'
]

export default function ProductDetailPage() {
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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <ImageSlider images={images} />
          </div>
          <div className="w-full lg:w-1/2">
            <ProductInfo
              name="VinFast Minio Green"
              price="269.000.000 VNĐ"
              description="BẢNG GIÁ XE VINFAST MINIO GREEN"
              range="170 km"
              power="20 kW"
              hotline="0783382001"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
