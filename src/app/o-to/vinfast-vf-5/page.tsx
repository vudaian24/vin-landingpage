import HeroSlider from "@/components/home/HeroSlider";
import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Tabs } from "@/components/o-to/Tabs";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VinFast VF 5",
};
export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-05.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-05.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-08.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-03-765x430.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-07-765x430.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-06-765x430.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-04-765x430.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-09-765x430.jpg' },
    { name: 'vinfast-vf-5', image: '/images/vinfast-vf-5/vinfast-vf-5-240724-c-02-765x430.jpg' },
  ]

  const imagesDetails = [
    {
      src: '/images/vinfast-vf-5/vinfast-vf9-241212-t01.jpg',
      alt: 'VF9 Trải nghiệm xứng tầm tinh hoa',
    },
    {
      src: '/images/vinfast-vf-5/vinfast-vf9-241212-t02.jpg',
      alt: 'Đặc quyền dành riêng cho VF9',
    },
    {
      src: '/images/vinfast-vf-5/vinfast-vf9-241212-t03.jpg',
      alt: 'Dịch vụ hậu mãi đẳng cấp',
    },
    {
      src: '/images/vinfast-vf-5/vinfast-vf9-241212-t04.jpg',
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/images/vinfast-vf-5/vinfast-vf-5-240724-m-b-03b.jpg"
                alt="VinFast VF9 Banner 2"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
              <Image
                src="/images/vinfast-vf-5/vinfast-banner-0323-05.jpg"
                alt="VinFast VF9 Banner 3"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[#3c3c3c] text-[32px] font-semibold">VinFast</h2>
              <h1 className="text-[64px] font-bold text-gray-900 mt-1 mb-6">VF 5 PLUS</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">362,4 <span className="text-[26px] font-normal">km</span></p>
                  <p className="text-[#3c3c3c] text-sm">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">31 <span className="text-[26px] font-normal">phút (10%-70%)</span></p>
                  <p className="text-[#3c3c3c] text-sm">Thời gian sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">5 <span className="text-[26px] font-normal">chỗ</span></p>
                  <p className="text-[#3c3c3c] text-sm">Bảo hành xe 200.000 km hoặc</p>
                </div>
              </div>
              <p className="mt-6 text-[#3c3c3c] text-base leading-relaxed bg-[#ECECEC] p-1.5">
                VF 5 Plus chất riêng sáng tạo cùng công nghệ của VinFast: Thiết kế năng động, cứng cáp cùng nhiều lựa chọn màu sắc hợp gu. Nội thất rộng rãi, tối ưu hoá không gian trong xe. 21 tính năng thông minh, 6 tính năng trợ lái hữu ích để trải nghiệm lái xe thêm thoải mái. Dàn xe VF 5 Plus với dải màu đa dạng, gồm 4 màu cơ bản đã có là Xám, Đỏ, Xanh dương, Trắng; và 4 màu nâng cao mới là Vàng, Hồng tím, Xanh dương nhạt và Xanh lá nhạt.
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Ngoại thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 5 Plus. Xứng danh “đàn anh” Xanh Sành hợp ví.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                Sống thần thái và phong cách cùng dải màu mới đầy cảm hứng đến từ “đàn anh” VF 5 Plus. VF 5 Plus với dải màu đa dạng, gồm 4 màu cơ bản đã có là Xám, Đỏ, Xanh dương, Trắng; và 4 màu nâng cao mới là Vàng, Hồng tím, Xanh dương nhạt và Xanh lá nhạt.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-5/vinfast-vf-5-240724-g-99-1200x675.jpg"
                alt="VinFast VF 5 Plus"
                caption="VinFast VF 5 Plus"
                className="pt-4 mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-26.jpg"
                  alt="VinFast VF 5 Plus"
                  caption="VF 5 – Summer Yellow
Tự Teen Dẫn Lối Tự Do
Chọn khai mở cung đường mới thay vì lối mòn rập khuôn, năng lượng từ Summer Yellow giúp Kaity tự tin vào chất trẻ trung trong mình – để tinh thần tự do phóng khoáng luôn vượt lên những rào cản không tên. Giới hạn sẽ không bao giờ nằm trong từ điển cuộc sống, một khi có sắc vàng của VinFast 5 Plus dẫn lối."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-5/vinfast-vf-5-240724-g-99-1200x675.jpg"
                  alt="VinFast VF 5 Plus"
                  caption="VF 5 – Urban mint
Phiêu nhịp sống xanh
Hiện đại với sắc xanh tươi mát, sống động và thân thiện với môi trường. Màu xanh mint mang đến cho Hà cảm giác tươi mới, đầy năng lượng, giúp Hà tận hưởng nhịp sống đô thị một cách trọn vẹn và đầy cảm hứng."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-24.jpg"
                  alt="VinFast VF 5 Plus"
                  caption="VF 5 – Aquatic Azure
Chuyển động đa Z năng
Hơn cả một màu sắc, Aquatic Azure đối với Amee đại diện cho cá tính đậm nét Gen Z, chất “đa-zi-năng” và phong cách trẻ trung năng động. 
Mọi chuyển động cùng sắc xanh Aquatic Azure chính là tuyên ngôn cho thần thái khác biệt của hội Gen Z."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-23.jpg"
                  alt="VinFast VF 5 Plus"
                  caption="VF 5 – Zenith Grey
Toàn tâm công tác
Lựa chọn sắc xám chính là lựa chọn thành công – toàn tâm toàn ý cho mọi “công task” trên hành trình sự nghiệp. Là biểu tượng của sự uy tín và mạnh mẽ, GreyD tin rằng Zenith Grey sẽ mang đến thần thái chuyên nghiệp, đẳng cấp và tự tin trên mọi con đường bạn lựa chọn."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-22.jpg"
                  alt="VinFast VF 5 Plus"
                  caption="VF 5 – Iris Berry
Chuẩn mực Trendy
Tại sao phải đi theo xu hướng khi có thể tự tạo phong cách của chính mình? Toát lên thần thái thời thượng, gam màu tím Iris Berry trong mắt Kaity đại diện cho thời trang và vẻ đẹp hiện đại – biến mọi cung đường trở thành sàn diễn đầy phong cách."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-21.jpg"
                  alt="VinFast VF 5 Plus"
                  caption="VF 5 – Electric blue
Cân mọi tác vụ
Mở ra vô vàn lựa chọn, bất kể “task vụ” vẫn hoàn thành chính là điều tinh thần mà sắc thái Electric Blue thể hiện. Không giới hạn chính mình, khi sắc xanh luôn là cảm hứng tiếp thêm năng lượng cho Soho để thử thách bản thân ở bất kỳ khía cạnh nào trong cuộc sống."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div className="pt-10">
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nội thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 5 Plus. Nội thất tinh tế.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                VinFast Vf 5 Plus với không gian rộng rãi, phối màu sành điệu. Thiết kế nội thất hướng tới sự tối giản với cách phối màu nội thất đồng điệu với ngoại thất làm nổi bật lên vẻ cuốn hút nhờ các đường viền bắt mắt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-ntb-30b.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-ntb-31.jpg" alt="thong so ky thuat" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-15.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-14.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-03.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-02.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-01.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-13.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Vận hành</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 5 Plus.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">
                VinFast VF 5 Mạnh mẽ, linh hoạt. Sẵn sàng cho mọi hành trình.
              </p>
              <ul className="list-disc pl-5 pt-4">
                <li className="mb-[10px]">Kích thước 3.967 x 1.723 x 1.578 mm, kích thước lý tưởng để di chuyển trong nội thành.</li>
                <li className="mb-[10px]">Dung lượng pin khả dụng 37,23 kWh di chuyển được 326,4 km sau 1 lần sạc đầy.</li>
                <li className="mb-[10px]">Động cơ điện công suất tối đa 100kW tương đương 134 Hp.</li>
                <li className="mb-[10px]">Mô men xoắn cực đại 135Nm.</li>
              </ul>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">An toàn hàng đầu</h1>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">Công nghệ hiện đại, An tâm trải nghiệm.</p>
              <ul className="list-disc pl-5 pt-4">
                <li className="mb-[10px]">6 túi khí.</li>
                <li className="mb-[10px]">Nhiều tính năng an toàn hiện đại, dự kiến đạt tiêu chuẩn ASEAN NCAP 3*.</li>
              </ul>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Công nghệ</h1>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">VinFast VF 5 Plus được trang bị đầy đủ những công nghệ tiên tiến bậc nhất:</p>
              <ul className="list-disc pl-5 pt-4">
                <li className="mb-[10px]">Giám sát hành trình cơ bản</li>
                <li className="mb-[10px]">Cảnh báo giao thông phía sau</li>
                <li className="mb-[10px]">Cảnh báo điểm mù</li>
                <li className="mb-[10px]">Hỗ trợ đỗ xe phía sau</li>
                <li className="mb-[10px]">Hỗ trợ phanh khẩn cấp…</li>
              </ul>
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-26.jpg" alt="thong so ky thuat" />
            </div>
            <div className="max-w-6xl mx-auto mt-10">
              <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thông số kỹ thuật</h1>
              <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 5 Plus.</h2>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <img src="/images/vinfast-vf-5/vf5-tskt-250309-01.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vf5-tskt-250309-02.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-g-99-1200x675.jpg" alt="thong so ky thuat" />
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thư viện ảnh</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 5 Plus</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 mt-3">
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-22.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-26.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-23.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-21.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-14.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-03.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-02.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-5/vinfast-vf-5-240724-nt-01.jpg" alt="thong so ky thuat" />
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
              title="VinFast VF 5"
              price="529.000.000"
              variants={[
                { name: 'VinFast VF 5 Plus', price: '529.000.000' },
              ]}
              rangePerCharge="326,4 km"
              maxPower="134 hp"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
