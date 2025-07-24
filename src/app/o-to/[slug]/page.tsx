import HeroSlider from "@/components/home/HeroSlider";
import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oto",
};

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await Promise.resolve(params);

  const carVariants = [
    { name: 'Đỏ', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0025_vf-9.jpg' },
    { name: 'Xanh', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0024_vf-9.jpg' },
    { name: 'Trắng', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0025_vf-9-765x430.jpg' },
    { name: 'Xanh', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0024_vf-9.jpg' },
    { name: 'Xanh', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0024_vf-9.jpg' },
    { name: 'Xám', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0023_vf-9.jpg' },
    { name: 'Xanh', image: 'https://vinfastautolongbien.vn/wp-content/uploads/2023/12/vinfast-231207_0024_vf-9.jpg' },
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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <CarColorSlider carVariants={carVariants} />
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
        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-gray-800 text-xl font-semibold uppercase">Mẫu eSUV cỡ lớn Hạng sang</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">VINFAST VF 9</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
              <div className="p-6 text-center">
                <p className="text-3xl font-semibold text-gray-900">626 <span className="text-base font-normal">km</span></p>
                <p className="mt-2 text-gray-600 text-sm">Quãng đường/1 lần sạc</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-3xl font-semibold text-gray-900">402 <span className="text-base font-normal">hp</span>/<span className="text-3xl">620</span> <span className="text-base font-normal">nm</span></p>
                <p className="mt-2 text-gray-600 text-sm">Vận hành mạnh mẽ</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-3xl font-semibold text-gray-900">10 <span className="text-base font-normal">năm</span></p>
                <p className="mt-2 text-gray-600 text-sm">Bảo hành xe 200.000 km hoặc</p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
              VinFast VF 9 là mẫu xe SUV 7 chỗ hàng đầu của VinFast. Với kiểu dáng tinh tế, công nghệ tiên tiến nhất và sự tỉ mỉ trong từng chi tiết, VF 9 mang đến trải nghiệm đặc biệt cao cấp cho Người sở hữu
            </p>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">THÔNG SỐ KỸ THUẬT</h1>
            <h2 className="text-gray-800 text-xl font-semibold uppercase">VinFast VF 9.</h2>
          </div>
          <div className="flex flex-col gap-3">
            <img src="/images/vinfast-vf9-tskt-1.jpg" alt="thong so ky thuat" />
            <img src="/images/vinfast-vf9-tskt-2.jpg" alt="thong so ky thuat" />
            <img src="/images/vinfast-vf9-tskt-3.jpg" alt="thong so ky thuat" />
          </div>
        </section>
      </div>
    </div>
  )
}
