import ProductCard from "@/components/ui/ProductCard";
import SortDropdown from "@/components/vinfast-green/SortDropdown";
import { greenCars } from "@/data/mock-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VinFast Green",
  description: "VinFast Green",
};

export default function VinFastGreen() {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="text-[18px] text-[#666666b3]">
            <span className="hover:underline cursor-pointer">TRANG CHỦ</span>
            <span className="mx-1.5">/</span>
            <span className="font-semibold text-[#222]">VINFAST GREEN</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-base text-[#3c3c3c]">
            <p>Hiển thị tất cả 4 kết quả</p>
            <SortDropdown />
          </div>
        </div>

        <div className=" py-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {greenCars.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                imageUrl={product.image}
                canHover={product.canHover}
                imageUrlHover={product.imageHover}
                link={product.link}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}