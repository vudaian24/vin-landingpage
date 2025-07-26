import { articles } from "@/data/mock-data";
import Image from "next/image";
import Link from "next/link";

export default function HuongDanSuDungTramSac() {
  return (
    <div className="w-full flex flex-col">
      <div className="space-y-2 mb-12">
        <span className="text-xs font-semibold text-blue-600 uppercase">Video Blog, Tin tức</span>
        <h1 className="text-2xl font-bold">Hướng dẫn sử dụng trạm sạc</h1>
        <div className="w-9 h-[3px] bg-gray-200 rounded-full" />
      </div>

      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/yZS0fbzquFU"
        title="Hướng dẫn sạc xe ô tô điện tại trạm sạc VinFast"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg shadow-md mb-12"
      />

      <div className="prose max-w-none text-[#3c3c3c] text-base font-normal leading-[160%] mb-6">
        <p className="mb-6">
          Với hệ thống trạm sạc phủ sóng toàn quốc, khách hàng có thể dễ dàng sử dụng dịch vụ sạc ô tô điện VinFast ở bất cứ đâu. Bên cạnh đó, tìm hiểu hướng dẫn sạc ô tô điện VinFast tại trạm và Ứng dụng VinFast trên thiết bị di động sẽ hỗ trợ khách hàng theo dõi tình trạng sạc, thanh toán phí sạc và phí thuê bao pin hàng tháng tiện lợi, nhanh chóng.
        </p>
        <p className="mb-6">
          Để giúp khách hàng sử dụng dịch vụ sạc xe điện VinFast dễ dàng, VinFast cung cấp hướng dẫn chi tiết về cách thức sạc ô tô điện VinFast tại trạm:
        </p>
        <ul className="list-disc list-inside space-y-[10px]">
          <li>Cách kiểm tra các điều kiện an toàn cần thiết trước khi vào sạc</li>
          <li>Các bước sạc ô tô điện với súng sạc</li>
          <li>Cách kiểm tra các điều kiện an toàn cần thiết trước khi vào sạc</li>
          <li>Các bước sạc ô tô điện với súng sạc</li>
          <li>Tìm kiếm trạm sạc gần nhất</li>
          <li>Tra cứu lịch sử sạc nhanh chóng</li>
          <li>Tra cứu thông tin gói cước thuê pin</li>
          <li>Cách thêm phương thức thanh toán trên ứng dụng</li>
          <li>Cách thanh toán phí sạc và thuê pin</li>
          <li>Cách đăng ký thông tin xuất hóa đơn</li>
          <li>Kiểm tra các thông báo trên ứng dụng</li>
        </ul>
      </div>

      <div className="relative w-full h-[400px]">
        <Image
          src="/images/news/vinfast-sxd-250310.jpg"
          alt="Hướng dẫn sử dụng trạm sạc"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div >
  )
}