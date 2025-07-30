import HeroSlider from "@/components/home/HeroSlider";
import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Tabs } from "@/components/o-to/Tabs";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VinFast VF 8",
  description: "VinFast VF 8",
};
export default async function ProductDetailPage() {
  const carVariants = [
    { name: 'vinfast-vf-8', image: '/images/vinfast-vf-8/vinfast-vf-8-250207-c02-765x430.jpg' },
    { name: 'vinfast-vf-8', image: '/images/vinfast-vf-8/vinfast-vf-8-250207-c02.jpg' },
    { name: 'vinfast-vf-8', image: '/images/vinfast-vf-8/vinfast-vf-8-250207-c01.jpg' },
    { name: 'vinfast-vf-8', image: '/images/vinfast-vf-8/vinfast-vf-8-250207-cn05-1200x675.jpg' },
    { name: 'vinfast-vf-8', image: '/images/vinfast-vf-8/vinfast-vf-8-250207-cn04-1200x675.jpg' },
    { name: 'vinfast-vf-8', image: '/images/vinfast-vf-8/vinfast-vf-8-250207-cn03-1200x675.jpg' }
  ]

  const imagesDetails = [
    {
      src: '/images/vinfast-vf-8/vinfast-vf9-241212-t01.jpg',
      alt: 'VF9 Trải nghiệm xứng tầm tinh hoa',
    },
    {
      src: '/images/vinfast-vf-8/vinfast-vf9-241212-t02.jpg',
      alt: 'Đặc quyền dành riêng cho VF9',
    },
    {
      src: '/images/vinfast-vf-8/vinfast-vf9-241212-t03.jpg',
      alt: 'Dịch vụ hậu mãi đẳng cấp',
    },
    {
      src: '/images/vinfast-vf-8/vinfast-vf9-241212-t04.jpg',
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
                src="/images/vinfast-vf-8/vinfast-vf-8-250220-g98.jpg"
                alt="VinFast VF9 Banner 1"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-[64px] font-bold text-gray-900 mt-1 mb-6">VINFAST VF 8</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">471 <span className="text-[26px] font-normal">km</span></p>
                  <p className="text-[#3c3c3c] text-sm">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">31 <span className="text-[26px] font-normal">phút</span></p>
                  <p className="text-[#3c3c3c] text-sm">Sạc nhanh từ 10-70%</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">5.5 <span className="text-[26px] font-normal">giây</span></p>
                  <p className="text-[#3c3c3c] text-sm">0-100 Km/h</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">402 <span className="text-[26px] font-normal">hp</span></p>
                  <p className="text-[#3c3c3c] text-sm">Vận hành mạnh mẽ</p>
                </div>
              </div>
              <p className="mt-6 text-[#3c3c3c] text-base leading-relaxed bg-[#ECECEC] p-1.5">
                VinFast VF 8 với thiết kế mới sang trọng và công nghệ vượt trội. Với nhiều điểm nổi bật: ngoại thất nhiều màu, công nghệ trợ lý ảo Vivi 2.0 mới, ADAS và VF Connect. VinFast VF 8 có hai tùy chọn là phiên bản VF 8 Eco và phiên bản VF 8 Plus, trong đó phiên bản VF 8 Eco được trang bị động cơ điện có công suất 350 mã lực, đi được quãng đường 471km/lần sạc đầy, trong khi phiên bản VF 8 Plus có sức mạnh lên tới 402 mã lực, đi được quãng đường 457km/lần sạc đầy.
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Ngoại thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 8. Thiết kế cá nhân hoá.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                VinFast VF 8 Eco và VinFast VF 8 Plus đem đến đa dạng sự lựa chọn màu ngoại thất, phù hợp cho những chủ nhân yêu thích sự hiện đại, phong cách và sang trọng.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-8/vinfast-vf-8-250207-g99.jpg"
                alt="thong so ky thuat"
                caption="Ngoại Thất VinFast VF 8  "
                className="pt-4 mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img src="/images/vinfast-vf-8/vinfast-vf-8-250207-c01.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-8/vinfast-vf-8-250207-c02.jpg" alt="thong so ky thuat" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <img src="/images/vinfast-vf-8/vinfast-vf-8-250207-cn03.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-8/vinfast-vf-8-250207-cn04.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-8/vinfast-vf-8-250207-cn05.jpg" alt="thong so ky thuat" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-ngoai-that-22.jpg"
                  alt="thong so ky thuat"
                  caption="Thiết kế khí động học: Giảm lực cản không khí và tăng hiệu quả vận hành, đồng thời mang lại vẻ ngoài hiện đại và mạnh mẽ."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-ngoai-that-23.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Gương chiếu hậu hiện đại: Tự động lưu vị trí theo thói quen của chủ xe, tích hợp đèn báo rẽ và cảnh báo điểm mù tăng tăng cường sự an toàn cho Khách hàng."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-ngoai-that-24.jpg"
                  alt="thong so ky thuat"
                  caption="Cửa sổ trời toàn cảnh: Tích hợp rèm điện, điều khiển đóng mở bằng giọng nói."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-ngoai-that-25.jpg"
                  alt="thong so ky thuat"
                  caption="Cảm biến và camera 360 độ: Giúp tài xế dễ dàng quan sát và điều khiển trong không gian hẹp hay các khu vực đông đúc."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div className="pt-10">
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nội thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 8. Thăng hạng đẳng cấp.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                VinFast VF 8 Eco và VinFast VF 8 Plus dành cho những người hiểu rõ giá trị sang trọng và đẳng cấp, mong muốn tận hưởng trọn vẹn những trải nghiệm cho bản thân và gia đình.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-8/vinfast-vf-noi-that-8-250207-32.jpg"
                alt="thong so ky thuat"
                caption="Nội Thất VinFast VF 8"
                className="pt-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-32b.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-34.jpg" alt="thong so ky thuat" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-32.jpg"
                  alt="thong so ky thuat"
                  caption="Hệ thống giám sát người lái: Liên tục theo dõi và cảnh báo khi người lái mệt mỏi, vì bạn và gia đình."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-34.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Ghế da vegan tích hợp sưởi và thông gió: Đảm bảo sự thoải mái tối đa cho mọi hành trình, cho cả mùa hè và mùa đông."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-35.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Vô lăng tối ưu cho mọi trải nghiệm: Không chỉ tích hợp khả năng sưởi, vô lăng của VF 8 còn có thể ghi nhớ và tự động điều chỉnh theo thói quen lái xe của bạn."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-36.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="HUD tích hợp sẵn: Hiển thị các thông tin quan trọng như tốc độ xe, chỉ dẫn đường đi, cảnh báo va chạm ngay trên kính lái, cho phép người lái theo dõi mọi thông tin mà không cần rời mắt khỏi đường."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Công nghệ</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 8. Công nghệ tiên phong</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-cn-44.jpg"
                  alt="thong so ky thuat"
                  caption="Trợ lý ảo VinFast LLM: Trợ lý ảo ViVi phiên bản LLM được nâng cấp hoàn toàn mới, tích hợp trí tuệ nhân tạo không chỉ điều khiển xe mà còn có thể trò chuyện như một người bạn thân thiết. ViVi còn là một chuyên gia địa phương để đề xuất những quán ăn, những địa điểm thú vị gần bạn."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-cn-43.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Cập nhật từ xa: Bên cạnh nâng cấp tại xưởng, VinFast cũng sẽ cung cấp dịch vụ nâng cấp xe từ xa, giúp bạn cập nhật phần mềm và tính năng mới nhất cho xe của mình một cách thuận tiện và tiết kiệm thời gian nhất."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-cn-42.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Ứng dụng VinFast: Với ứng dụng VinFast, Khách hàng kiểm tra tình trạng của các trạm sạc, xem dữ liệu về xe, đặt lịch bảo dưỡng, trợ giúp. Quan trọng hơn, ứng dụng VinFast giúp điều khiển xe, bật điều hòa từ xa để bạn luôn thoải mái ngay từ khi bước lên xe."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-250207-g99.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Sẵn sàng cho mọi hành trình: Với quãng đường di chuyển mỗi lần sạc đầy lên tới 471 km, kết hợp với hệ thống trạm sạc phủ sóng trên 63 tỉnh thành và nhiều ưu đãi đặc quyền dành riêng độc đáo, VinFast VF 8 cam kết sẵn sàng cùng bạn chinh phục mọi hành trình, cùng bạn tận hưởng không khí trong lành và khung cảnh thiên nhiên tươi đẹp trên mọi nẻo đường tại Việt Nam."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">An toàn</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">Là ưu tiên trên hết của VinFast.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">Tất cả các xe VinFast tuân thủ các tiêu chuẩn an toàn nghiêm ngặt nhất và được trang bị những công nghệ hiện đại theo chuẩn quốc tế, mang lại sự yên tâm tuyệt đối cho gia đình bạn trên mọi chặng đường.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-a-t-51.jpg"
                  alt="thong so ky thuat"
                  caption="Cứu hộ khẩn cấp: Khi nguy cấp, bạn có thể dễ dàng nhấn nút SOS tích hợp sẵn để nhận được sự trợ giúp nhanh chóng.."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-a-t-52.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Hệ thống 11 túi khí: Sở hữu nhiều túi khí nhất trong phân khúc, bảo vệ bạn trong những trường hợp khẩn cấp."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h2 className="text-gray-800 text-[22px] font-bold">Công nghệ nâng tầm trải nghiệm</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">Hệ thống trợ lái nâng cao của VinFast được trang bị công nghệ và trang thiết bị hiện đại nhất, mang đến trải nghiệm lái xe thư thái và dễ dàng. Điều này giúp bạn tận hưởng cuộc sống và kết nối với gia đình cũng như thiên nhiên một cách trọn vẹn!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-a-t-54.jpg"
                  alt="thong so ky thuat"
                  caption="Cứu hộ khẩn cấp: Khi nguy cấp, bạn có thể dễ dàng nhấn nút SOS tích hợp sẵn để nhận được sự trợ giúp nhanh chóng."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-a-t-55.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Hệ thống 11 túi khí: Sở hữu nhiều túi khí nhất trong phân khúc, bảo vệ bạn trong những trường hợp khẩn cấp."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-a-t-53.jpg"
                  alt="thong so ky thuat"
                  caption="Trợ lái khi có nguy cơ va chạm: VF 8 tự động phanh khẩn cấp khi có nguy cơ va chạm xảy ra."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-8/vinfast-vf-8-240723-a-t-56.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Trợ làn: Không chỉ cảnh báo khi bạn đi lệch làn đường, VF 8 còn hỗ trợ giữ làn để trải nghiệm lái trên cao tốc trở nên toàn diện và thoải mái."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10">
              <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thông số kỹ thuật</h1>
              <h2 className="text-gray-800 text-[22px] font-bold">Xe VinFast VF 8.</h2>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <img src="/images/vinfast-vf-8/vinfast-vf-8-250220-tskt-01b.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-8/vinfast-vf-8-250220-tskt-02b.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-8/vinfast-vf-8-250220-tskt-03b.jpg" alt="thong so ky thuat" />
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thư viện ảnh</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">Xe VinFast VF 8.</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 mt-3">
              <img src="/images/vinfast-vf-8/vinfast-vf-8-250207-g99.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-8/vinfast-vf-noi-that-8-250207-32.jpg" alt="thong so ky thuat" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 mt-3">
              <img src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-32b.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-33b.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-8/vinfast-vf-8-240723-noi-that-34.jpg" alt="thong so ky thuat" />
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
              title="VinFast VF 8"
              price="1.019.000.000"
              variants={[
                { name: 'VinFast VF 8 Eco', price: '1.019.000.000' },
                { name: 'VinFast VF 8 Plus', price: '1.199.000.000' },
              ]}
              rangePerCharge="471 km"
              maxPower="350-402 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
