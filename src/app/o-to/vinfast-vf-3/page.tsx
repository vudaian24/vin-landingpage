import HeroSlider from '@/components/home/HeroSlider'
import CarColorSlider from '@/components/o-to/CarColorSlider'
import { ProductInfo } from '@/components/o-to/ProductInfo'
import { Tabs } from '@/components/o-to/Tabs'
import { ImageWithCaption } from '@/components/ui/ImageWithCaption'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'VinFast VF 3',
}
export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c9.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c8.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c7-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c6-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c1-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c3-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c5-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c4-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-c2-765x430.jpg' },
    { name: 'vinfast-vf-3', image: '/images/vinfast-vf-3/vinfast-vf3-240510-g22-765x430.jpg' },
  ]

  const imagesDetails = [
    {
      src: '/images/vinfast-vf-3/vinfast-VF9-241212-t01.jpg',
      alt: 'VF3 Trải nghiệm xứng tầm tinh hoa',
    },
    {
      src: '/images/vinfast-vf-3/vinfast-VF3-241212-t02.jpg',
      alt: 'Đặc quyền dành riêng cho VF3',
    },
    {
      src: '/images/vinfast-vf-3/vinfast-VF3-241212-t03.jpg',
      alt: 'Dịch vụ hậu mãi đẳng cấp',
    },
    {
      src: '/images/vinfast-vf-3/vinfast-VF3-241212-t04.jpg',
      alt: 'Ưu đãi hấp dẫn',
    },
  ]

  const productTabs = [
    {
      id: 'description',
      label: 'MÔ TẢ',
      content: (
        <div className="font_mulishb">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Image
                src="/images/vinfast-vf-3/vinfast-vf3-240510-g95.jpg"
                alt="VinFast VF3 Banner 1"
                width={600}
                height={400}
                className="h-auto w-full rounded"
              />
              <Image
                src="/images/vinfast-vf-3/vinfast-vf3-240510-g96.jpg"
                alt="VinFast VF3 Banner 2"
                width={600}
                height={400}
                className="h-auto w-full rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Image
                src="/images/vinfast-vf-3/vinfast-vf3-240510-g98.jpg"
                alt="VinFast VF3 Banner 3"
                width={600}
                height={400}
                className="h-auto w-full rounded"
              />
              <Image
                src="/images/vinfast-vf-3/vinfast-vf3-240510-g97.jpg"
                alt="VinFast VF3 Banner 4"
                width={600}
                height={400}
                className="h-auto w-full rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-[32px] font-semibold text-[#3c3c3c]">Vinfast</h2>
              <h1 className="mt-1 mb-6 text-[64px] font-bold text-gray-900">VF 3</h1>
              <div className="grid grid-cols-1 divide-y divide-gray-50 overflow-hidden rounded-lg bg-[#ECECEC] md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    205 - 210 <span className="text-[26px] font-normal">km</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    36 <span className="text-[26px] font-normal">phút(10% - 70%)</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">Thời gian sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">
                    4 <span className="text-[26px] font-normal">chỗ</span>
                  </p>
                  <p className="text-sm text-[#3c3c3c]">4 chỗ ngồi</p>
                </div>
              </div>
              {/* <p className="mt-6 text-[#3c3c3c] text-base leading-relaxed bg-[#ECECEC] p-1.5">
                VinFast VF 9 là mẫu xe SUV 7 chỗ hàng đầu của VinFast. Với kiểu dáng tinh tế, công nghệ tiên tiến nhất và sự tỉ mỉ trong từng chi tiết, VF 9 mang đến trải nghiệm đặc biệt cao cấp cho Người sở hữu
              </p> */}
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="mx-auto max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Thiết kế</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 3 . Xe nhỏ, giá trị lớn.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                VinFast VF 3 với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ
                luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá
                trị trên mỗi hành trình, và tự do thể hiện phong cách sống.
              </p>
              <iframe
                width="100%"
                height="574"
                src="https://www.youtube.com/embed/z56derDAHVo?feature=oembed"
                title="VINFAST VF 3 - CẢM HỨNG TỪ THẾ GIỚI TRUYỆN TRANH | OFFICIAL TVC"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="border-0 mt-4"
              />
              {/* <ImageWithCaption
                src="/images/vinfast-vf-3/vinfast-VF3-241212-g99.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Ngoại Thất VinFast VF 9"
                className="mb-8 pt-4"
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <img
                  src="/images/vinfast-vf-3/vinfast-VF3-241212-g95.jpg"
                  alt="thong so ky thuat"
                />
                <img
                  src="/images/vinfast-vf-3/vinfast-VF3-241212-g93.jpg"
                  alt="thong so ky thuat"
                />
              </div> */}
            </div>
            <div className="pt-5">
              <div className="mx-auto mt-10 max-w-6xl">
                {/* <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">VinFast VF 3 . Tự do sáng tạo, toả sáng chất riêng!</h1> */}
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 3 . Tự do sáng tạo, toả sáng chất riêng!
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 9 tùy chọn màu sắc trẻ trung và
                thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và
                cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở
                thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.
              </p>
              <div className="mx-auto mt-10 max-w-6xl">
                {/* <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">VinFast VF 3 . Tự do sáng tạo, toả sáng chất riêng!</h1> */}
                <h2 className="text-[22px] font-bold text-gray-800">
                  La-zăng vượt trội về kích thước & phong cách.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                VinFast VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16
                inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di
                chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp
                la-zăng thiết kế khí động học, vừa tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe,
                vừa gia tăng quãng đường di chuyển trong mỗi lần sạc đầy.
              </p>
              <div className="mx-auto mt-10 max-w-6xl">
                {/* <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">VinFast VF 3 . Tự do sáng tạo, toả sáng chất riêng!</h1> */}
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 3 – Biểu tượng mới của cuộc sống đô thị.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới
                mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận
                hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ
                mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng
                ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.
              </p>
              <div className="mx-auto mt-10 max-w-6xl">
                {/* <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">VinFast VF 3 . Tự do sáng tạo, toả sáng chất riêng!</h1> */}
                <h2 className="text-[22px] font-bold text-gray-800">
                  VF 3 không chỉ là một chiếc xe điện tiên tiến.
                </h2>
              </div>
              <p className="mt-2 text-base text-[#3c3c3c]">
                Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết
                kế.
              </p>

              <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <ImageWithCaption
                  src="/images/vinfast-vf-3/vinfast-VF3-noi-that-241212-33.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Nút chuyển số trực quan, kèm sạc không dây tích hợp trên bệ tì tay, tiện lợi và dễ dàng sử dụng."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-3/vinfast-VF3-noi-that-241212-34.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Màn hình cảm ứng 8 inch hiện đại và tinh tế dành riêng cho hàng ghế sau, dễ dàng điều chỉnh hệ thống điều hoà, làm mát và sưởi, massage."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ImageWithCaption
                  src="/images/vinfast-vf-3/vinfast-VF3-noi-that-241212-32.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Tuỳ chọn trần kính toàn cảnh hoà hợp với thiên nhiên, cho không gian nội thất luôn khoáng đạt."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-3/vinfast-VF3-noi-that-241212-35.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Tuỳ chọn hàng ghế cơ trưởng chỉnh điện, tích hợp tính năng làm mát, sưởi, massage, sạc không dây."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Nội thất</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  VinFast VF 3. Luôn đủ chỗ cho mọi người!
                </h2>
              </div>
              <p className="mt-2 mb-4 text-base text-[#3c3c3c]">
                Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm
                di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội
                thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không
                gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá
                phong cách sống của riêng bạn!
              </p>
              <img src="/images/vinfast-vf-3/vinfast-VF3-241212-g91b.jpg" alt="thong so ky thuat" />
            </div>
            <div>
              <div className="mx-auto mt-10 max-w-6xl">
                <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">Trạm sạc</h1>
                <h2 className="text-[22px] font-bold text-gray-800">
                  Hệ thống trạm sạc xe điện VinFast trải dài 63 tỉnh và thành phố.
                </h2>
              </div>
              <p className="mt-2 mb-4 text-base text-[#3c3c3c]">
                Định hình tiên phong thúc đẩy ngành công nghiệp xe điện, hướng tới một tương lai
                Xanh và Thông Minh, VinFast đã đầu tư hàng trăm triệu USD phát triển hạ tầng, từng
                bước “phủ rộng” trạm sạc xe điện:
              </p>
              <ul className="mt-2 mb-4 ml-5 list-disc text-base text-[#3c3c3c]">
                <li className="my-2">
                  Hệ thống trạm sạc xe điện VinFast trải dài 63 tỉnh và thành phố.
                </li>
                <li className="my-2">106 tuyến quốc lộ quan trọng đều có trạm sạc.</li>
                <li className="my-2">80/85 thành phố đã được lắp đặt hệ thống trạm sạc.</li>
                <li className="my-2">Khoảng cách ngắn 3,5 km giữa 2 trạm sạc trong thành phố.</li>
              </ul>
              <p className="mt-2 mb-4 text-base text-[#3c3c3c]">
                VinFast cam kết nỗ lực mang đến nhiều tiện ích, giúp hành trình lái xe điện của
                người Việt thật dễ dàng!
              </p>

              {/* <img src="/images/vinfast-vf-3/vinfast-VF3-241212-41.jpg" alt="thong so ky thuat" /> */}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC] mt-8">
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
            </div> */}
            <div className="mx-auto mt-10 max-w-6xl">
              <h1 className="mt-2 text-[27px] font-bold text-gray-900 uppercase">
                Thông số kỹ thuật
              </h1>
              <h2 className="text-[22px] font-bold text-gray-800">VinFast VF 3</h2>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-04.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-05.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-06.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-07.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-08.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-09.jpg"
                alt="thong so ky thuat"
              />
              <img
                src="/images/vinfast-vf-3/vinfast-VF3-241212-tskt-01.jpg"
                alt="thong so ky thuat"
              />
            </div>
            <div className="space-y-8 pt-10 text-sm leading-relaxed text-[#1a1a1a]">
              <div>
                <h2 className="text-xl font-extrabold uppercase">Chất lượng đẳng cấp</h2>
                <h3 className="mt-1 text-base font-bold">VinFast VF 9. Đồng hành trọn đời.</h3>
                <div className="mt-4 rounded bg-[#f3f3f3] p-2">
                  <h4 className="mb-2 font-bold">Hỗ trợ đổi xe mới</h4>
                  <ul className="list-inside list-disc space-y-1">
                    <li>
                      VinFast cam kết đồng hành hỗ trợ Khách hàng nâng cấp từ xe VF 9 cũ lên VF 9
                      mới trong suốt vòng đời xe.
                    </li>
                    <li>
                      Khách hàng sở hữu có thể lựa chọn bán lại xe cũ để nâng cấp lên xe mới tại mọi
                      thời điểm khi đăng ký tham gia chương trình trước 01/06/2024 đến hết ngày
                      31/12/2024. Nếu đổi xe từ thuê pin lên xe kèm pin, Khách hàng sẽ thanh toán
                      thêm giá pin tại thời điểm đổi xe.
                    </li>
                    <li>
                      Nếu phiên bản mới có thêm tùy chọn cao hơn, khách hàng có thể chọn thêm các
                      tùy chọn thì thanh toán phần chênh theo giá tại thời điểm đó.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 rounded bg-[#f3f3f3] p-2">
                  <h4 className="mb-2 font-bold">Cam kết mua lại xe cũ</h4>
                  <ul className="list-inside list-disc space-y-1">
                    <li>
                      Đối với các Khách hàng mua VF 9 kể từ ngày 01/06/2024, VinFast cam kết mua lại
                      xe VF 9 với mức giá 78% sau 24 tháng và 70% sau 36 tháng tính theo giá xuất
                      hóa đơn.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-extrabold uppercase">Đặc quyền</h2>
                <h3 className="mt-1 text-base font-bold">VinFast VF 9. Xứng tầm tinh hoa.</h3>
                <div className="mt-4 rounded bg-[#f3f3f3] p-2">
                  <h4 className="mb-2 font-bold">Trải nghiệm VIP tại xưởng dịch vụ VinFast</h4>
                  <ul className="list-inside list-disc space-y-1">
                    <li>
                      Được tiếp đón và tư vấn bởi đội ngũ cố vấn dịch vụ, kỹ thuật viên giàu kinh
                      nghiệm và có tay nghề cao nhất.
                    </li>
                    <li>
                      Quý khách sẽ được sắp xếp lịch bảo dưỡng, sửa chữa theo thời gian và nhu cầu
                      của bản thân. Đồng thời, xe sẽ được tiếp nhận/phục vụ và sửa chữa bảo trì bởi
                      những kỹ thuật viên xuất sắc nhất, được kiểm tra chất lượng bài bản trước khi
                      giao xe.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 rounded bg-[#f3f3f3] p-2">
                  <h4 className="mb-2 font-bold">
                    Tiếp cận dịch vụ sửa chữa nhanh chóng và thuận tiện
                  </h4>
                  <ul className="list-inside list-disc space-y-1">
                    <li>
                      Miễn phí 2 gói sửa chữa tại địa điểm yêu cầu của quý khách (trong giờ hành
                      chính, phạm vi 30 km từ xưởng dịch vụ VinFast gần nhất).
                    </li>
                    <li>
                      Miễn phí gọi dịch vụ sửa chữa tại chỗ, đảm bảo phục vụ nhanh chóng và hiệu quả
                      nhất.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 rounded bg-[#f3f3f3] p-2">
                  <h4 className="mb-2 font-bold">Dịch vụ chăm sóc Khách hàng tận tâm, chu đáo</h4>
                  <p>
                    Hotline 24/7 với nhân viên CSKH chuyên trách tiếp đón, đảm bảo mọi yêu cầu và
                    phản hồi được giải đáp nhanh chóng, chuyên nghiệp.
                  </p>
                </div>
                <div className="mt-4 rounded bg-[#f3f3f3] p-2">
                  <h4 className="mb-2 font-bold">Sạc điện miễn phí 2 năm</h4>
                  <p>
                    Miễn phí 2 năm sạc điện tại hệ thống trạm sạc công cộng VinFast trên toàn quốc
                    tới hết 31/05/2026.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2">
              {imagesDetails.map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="h-auto w-full rounded"
                />
              ))}
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
              title="VinFast VF 3"
              price="299.000.000"
              variants={[{ name: 'VinFast VF 3', price: '299.000.000' }]}
              rangePerCharge="205-210 km"
              maxPower="32 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
