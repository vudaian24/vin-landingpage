import Image from "next/image";

export default function ThietBiSacDiDong() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-8">
      <div className="max-w-screen-xl mx-auto flex flex-col">
        <div className="space-y-2 mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase">Tin tức</span>
          <h1 className="text-2xl font-bold text-gray-900">Thiết bị sạc di động</h1>
          <div className="w-9 h-[3px] bg-gray-200 rounded-full" />
        </div>

        <p className="mb-6">
          VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của khách hàng một cách thuận tiện nhất.
        </p>

        <div className="mb-6">
          <div className="relative w-full aspect-[2236/1000]">
            <Image
              src="/images/news/Thiet-bi-sac-di-dong-02.jpg"
              alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-black/5 text-center text-sm italic p-2">
            Bộ sạc theo xe 2.2 kW (Ô tô điện)
          </div>
        </div>

        <div className="mb-6">
          <div className="relative w-full aspect-[2485/1000]">
            <Image
              src="/images/news/pin-sac-07.jpg"
              alt="Hướng dẫn sử dụng trạm sạc"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-black/5 text-center text-sm italic p-2">
            Bộ sạc theo xe 3.5 kW (Ô tô điện)
          </div>
        </div>

        <div className="mb-6">
          <div className="relative w-full aspect-[2485/1000]">
            <Image
              src="/images/news/pin-sac-08.jpg"
              alt="Hướng dẫn sử dụng trạm sạc"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-black/5 text-center text-sm italic p-2">
            Bộ sạc treo tường 7.4 kW
          </div>
        </div>
      </div>
    </div>
  );
}
