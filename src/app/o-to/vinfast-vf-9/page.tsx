import HeroSlider from "@/components/home/HeroSlider";
import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Tabs } from "@/components/o-to/Tabs";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VinFast VF 9",
};
export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0024_vf-9-765x430.jpg' },
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0024_vf-9.jpg' },
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0023_vf-9.jpg' },
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0025_vf-9-765x430.jpg' },
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0021_vf-9-765x430.jpg' },
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0022_vf-9-765x430.jpg' },
    { name: 'vinfast-vf-9', image: '/images/vinfast-vf-9/vinfast-231207_0020_vf-9-765x430.jpg' },
  ]

  const imagesDetails = [
    {
      src: '/images/vinfast-vf-9/vinfast-vf9-241212-t01.jpg',
      alt: 'VF9 Trải nghiệm xứng tầm tinh hoa',
    },
    {
      src: '/images/vinfast-vf-9/vinfast-vf9-241212-t02.jpg',
      alt: 'Đặc quyền dành riêng cho VF9',
    },
    {
      src: '/images/vinfast-vf-9/vinfast-vf9-241212-t03.jpg',
      alt: 'Dịch vụ hậu mãi đẳng cấp',
    },
    {
      src: '/images/vinfast-vf-9/vinfast-vf9-241212-t04.jpg',
      alt: 'Ưu đãi hấp dẫn',
    },
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
                src="/images/vinfast-vf-9/vinfast-vf9-241212-banner-t01.jpg"
                alt="VinFast VF9 Banner 1"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/images/vinfast-vf-9/vinfast-vf9-241212-t05.jpg"
                alt="VinFast VF9 Banner 2"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
              <Image
                src="/images/vinfast-vf-9/vinfast-vf9-241212-t02.jpg"
                alt="VinFast VF9 Banner 3"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[#3c3c3c] text-[32px] font-semibold">Mẫu eSUV cỡ lớn Hạng sang</h2>
              <h1 className="text-[64px] font-bold text-gray-900 mt-1 mb-6">VINFAST VF 9</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">626 <span className="text-[26px] font-normal">km</span></p>
                  <p className="text-[#3c3c3c] text-sm">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">402 <span className="text-[26px] font-normal">hp</span>/<span className="text-[40px]">620</span> <span className="text-[26px] font-normal">nm</span></p>
                  <p className="text-[#3c3c3c] text-sm">Vận hành mạnh mẽ</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">10 <span className="text-[26px] font-normal">năm</span></p>
                  <p className="text-[#3c3c3c] text-sm">Bảo hành xe 200.000 km hoặc</p>
                </div>
              </div>
              <p className="mt-6 text-[#3c3c3c] text-base leading-relaxed bg-[#ECECEC] p-1.5">
                VinFast VF 9 là mẫu xe SUV 7 chỗ hàng đầu của VinFast. Với kiểu dáng tinh tế, công nghệ tiên tiến nhất và sự tỉ mỉ trong từng chi tiết, VF 9 mang đến trải nghiệm đặc biệt cao cấp cho Người sở hữu
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Ngoại thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 9. Mạnh mẽ, bề thế Nâng tầm thời thượng.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">Thiết kế được lấy cảm hứng từ những chiếc du thuyền hạng sang, hoà hợp với những đường nét mạnh mẽ và phóng khoáng, đem lại vẻ ngoài độc đáo và sang trọng, xứng tầm với chủ nhân tinh hoa.</p>
              <ImageWithCaption
                src="/images/vinfast-vf-9/vinfast-vf9-241212-g99.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Ngoại Thất VinFast VF 9"
                className="pt-4 mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img src="/images/vinfast-vf-9/vinfast-vf9-241212-g95.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-9/vinfast-vf9-241212-g93.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div className="pt-10">
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nội thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 9. Bản giao hưởng của thẩm mỹ và trải nghiệm tiện nghi.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">Ngôn ngữ thiết kế tối giản mang hơi hướng tương lai phối hợp cùng loạt vật liệu cao cấp, thân thiện với môi trường, VF 9 đem lại trải nghiệm nội thất khoáng đạt, thư thái trên mọi hành trình.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-9/vinfast-vf9-noi-that-241212-33.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Nút chuyển số trực quan, kèm sạc không dây tích hợp trên bệ tì tay, tiện lợi và dễ dàng sử dụng."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-9/vinfast-vf9-noi-that-241212-34.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Màn hình cảm ứng 8 inch hiện đại và tinh tế dành riêng cho hàng ghế sau, dễ dàng điều chỉnh hệ thống điều hoà, làm mát và sưởi, massage."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-9/vinfast-vf9-noi-that-241212-32.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Tuỳ chọn trần kính toàn cảnh hoà hợp với thiên nhiên, cho không gian nội thất luôn khoáng đạt."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-9/vinfast-vf9-noi-that-241212-35.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Tuỳ chọn hàng ghế cơ trưởng chỉnh điện, tích hợp tính năng làm mát, sưởi, massage, sạc không dây."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Công nghệ</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 9. Công nghệ cho cuộc sống.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">Hợp tác cùng những đối tác hàng đầu trên toàn cầu, VinFast áp dụng những công nghệ hiện đại với thiết kế tập trung vào con người, đem lại trải nghiệm. Trợ lý ảo cùng loạt Dịch vụ thông minh tiên tiến, đồng hành cùng bạn hướng tới tương lai tốt đẹp hơn.</p>
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-g91b.jpg" alt="thong so ky thuat" />
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Pin và Trạm sạc</h1>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của Khách hàng một cách thuận tiện nhất.</p>
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-41.jpg" alt="thong so ky thuat" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC] mt-8">
              <div className="p-2 pb-4 text-left">
                <p className="text-[32px] font-semibold text-[#3c3c3c]">63/63 <span className="text-[26px] font-normal">Tỉnh thành</span></p>
                <p className="text-[#3c3c3c] text-sm">Hệ thống trạm sạc phủ 100% cao tốc</p>
              </div>
              <div className="p-2 pb-4 text-left">
                <p className="text-[32px] font-semibold text-[#3c3c3c] uppercase">tiện lợi</p>
                <p className="text-[#3c3c3c] text-sm">Vận hành mạnh mẽ</p>
              </div>
              <div className="p-2 pb-4 text-left">
                <p className="text-[32px] font-semibold text-[#3c3c3c]">6.490.000 <span className="text-[26px] font-normal">VNĐ/tháng</span></p>
                <p className="text-[#3c3c3c] text-sm">Giá thuê pin cố định, không giới hạn km</p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10">
              <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thông số kỹ thuật</h1>
              <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 9</h2>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-04.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-05.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-06.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-07.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-08.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-09.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-9/vinfast-vf9-241212-tskt-01.jpg" alt="thong so ky thuat" />
            </div>
            <div className="space-y-8 text-[#1a1a1a] text-sm leading-relaxed pt-10">
              <div>
                <h2 className="text-xl font-extrabold uppercase">Chất lượng đẳng cấp</h2>
                <h3 className="text-base font-bold mt-1">VinFast VF 9. Đồng hành trọn đời.</h3>
                <div className="bg-[#f3f3f3] p-2 mt-4 rounded">
                  <h4 className="font-bold mb-2">Hỗ trợ đổi xe mới</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      VinFast cam kết đồng hành hỗ trợ Khách hàng nâng cấp từ xe VF 9 cũ lên VF 9 mới trong suốt vòng đời xe.
                    </li>
                    <li>
                      Khách hàng sở hữu có thể lựa chọn bán lại xe cũ để nâng cấp lên xe mới tại mọi thời điểm khi đăng ký tham gia chương trình trước
                      01/06/2024 đến hết ngày 31/12/2024. Nếu đổi xe từ thuê pin lên xe kèm pin, Khách hàng sẽ thanh toán thêm giá pin tại thời điểm đổi xe.
                    </li>
                    <li>
                      Nếu phiên bản mới có thêm tùy chọn cao hơn, khách hàng có thể chọn thêm các tùy chọn thì thanh toán phần chênh theo giá tại thời điểm đó.
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f3f3f3] p-2 mt-4 rounded">
                  <h4 className="font-bold mb-2">Cam kết mua lại xe cũ</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Đối với các Khách hàng mua VF 9 kể từ ngày 01/06/2024, VinFast cam kết mua lại xe VF 9 với mức giá 78% sau 24 tháng và 70% sau
                      36 tháng tính theo giá xuất hóa đơn.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-extrabold uppercase">Đặc quyền</h2>
                <h3 className="text-base font-bold mt-1">VinFast VF 9. Xứng tầm tinh hoa.</h3>
                <div className="bg-[#f3f3f3] p-2 mt-4 rounded">
                  <h4 className="font-bold mb-2">Trải nghiệm VIP tại xưởng dịch vụ VinFast</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Được tiếp đón và tư vấn bởi đội ngũ cố vấn dịch vụ, kỹ thuật viên giàu kinh nghiệm và có tay nghề cao nhất.
                    </li>
                    <li>
                      Quý khách sẽ được sắp xếp lịch bảo dưỡng, sửa chữa theo thời gian và nhu cầu của bản thân. Đồng thời, xe sẽ được tiếp
                      nhận/phục vụ và sửa chữa bảo trì bởi những kỹ thuật viên xuất sắc nhất, được kiểm tra chất lượng bài bản trước khi giao xe.
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f3f3f3] p-2 mt-4 rounded">
                  <h4 className="font-bold mb-2">Tiếp cận dịch vụ sửa chữa nhanh chóng và thuận tiện</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Miễn phí 2 gói sửa chữa tại địa điểm yêu cầu của quý khách (trong giờ hành chính, phạm vi 30 km từ xưởng dịch vụ VinFast gần nhất).</li>
                    <li>Miễn phí gọi dịch vụ sửa chữa tại chỗ, đảm bảo phục vụ nhanh chóng và hiệu quả nhất.</li>
                  </ul>
                </div>
                <div className="bg-[#f3f3f3] p-2 mt-4 rounded">
                  <h4 className="font-bold mb-2">Dịch vụ chăm sóc Khách hàng tận tâm, chu đáo</h4>
                  <p>
                    Hotline 24/7 với nhân viên CSKH chuyên trách tiếp đón, đảm bảo mọi yêu cầu và phản hồi được giải đáp nhanh chóng, chuyên nghiệp.
                  </p>
                </div>
                <div className="bg-[#f3f3f3] p-2 mt-4 rounded">
                  <h4 className="font-bold mb-2">Sạc điện miễn phí 2 năm</h4>
                  <p>Miễn phí 2 năm sạc điện tại hệ thống trạm sạc công cộng VinFast trên toàn quốc tới hết 31/05/2026.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
              {imagesDetails.map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded"
                />
              ))}
            </div>
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
              title="VinFast VF 9"
              price="1.499.000.000"
              variants={[
                { name: 'VinFast VF 9 Eco', price: '1.499.000.000' },
                { name: 'VinFast VF 9 Plus', price: '1.699.000.000' },
              ]}
              rangePerCharge="626 km"
              maxPower="300–402 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
