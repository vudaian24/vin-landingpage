import HeroSlider from "@/components/home/HeroSlider";
import CarColorSlider from "@/components/o-to/CarColorSlider";
import { ProductInfo } from "@/components/o-to/ProductInfo";
import { Tabs } from "@/components/o-to/Tabs";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VinFast VF 7",
  description: "VinFast VF 7",
};
export default async function ProductDetailPage() {
  const carVariants =
    [
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0058_vf-7.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0056_vf-7.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0054_vf-7.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0055_vf-7.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0057_vf-7.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0053_vf-7.jpg' },

      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0058_vf-7-765x430.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0056_vf-7-765x430.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0054_vf-7-765x430.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0055_vf-7-765x430.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0057_vf-7-765x430.jpg' },
      { name: 'vinfast-vf-7', image: '/images/vinfast-vf-7/vinfast-231207_0053_vf-7-765x430.jpg' }
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
                src="/images/vinfast-vf-7/vinfast-vf7-231206-01.jpg"
                alt="VinFast VF9 Banner 1"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50 rounded-lg overflow-hidden bg-[#ECECEC]">
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">431 <span className="text-[26px] font-normal">km</span></p>
                  <p className="text-[#3c3c3c] text-sm">Quãng đường/1 lần sạc</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">5,8 <span className="text-[26px] font-normal">s</span></p>
                  <p className="text-[#3c3c3c] text-sm">Tăng tốc 0-100Km/h</p>
                </div>
                <div className="p-2 pb-4 text-left">
                  <p className="text-[40px] font-semibold text-[#3c3c3c]">8 <span className="text-[26px] font-normal">túi khí</span></p>
                  <p className="text-[#3c3c3c] text-sm">Trang bị an toàn</p>
                </div>
              </div>
            </div>
          </section>

          <div>
            <div className="max-w-6xl mx-auto mt-10">
              <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thông số kỹ thuật</h1>
            </div>
            <ul className="list-disc pl-5 pt-4 text-[15px] leading-relaxed">
              <li className="mb-[10px]">
                Chiều dài cơ sở (mm): <strong>2.840</strong>
              </li>
              <li className="mb-[10px]">
                Dài x Rộng x Cao (mm): <strong>4.545 x 1.890 x 1.635,75</strong>
              </li>
              <li className="mb-[10px]">
                Quãng đường chạy một lần sạc đầy (Km): <strong>375 (base)</strong> | <strong>431 (Plus)</strong>
              </li>
              <li className="mb-[10px]">
                Công suất tối đa (kW): <strong>130 (base)</strong> | <strong>260 (Plus)</strong>
              </li>
              <li className="mb-[10px]">
                Mô men xoắn cực đại (Nm): <strong>250 (base)</strong> | <strong>500 (Plus)</strong>
              </li>
              <li className="mb-[10px]">
                Tốc độ tối đa (Km/h): <strong>150 (base)</strong> | <strong>175 (Plus)</strong>
              </li>
              <li className="mb-[10px]">
                Tăng tốc 0-100Km/h (s): <strong>10 – 11s (base)</strong> | <strong>5,8s (Plus)</strong>
              </li>
            </ul>
          </div>

          <div>
            <div className="max-w-6xl mx-auto mt-10">
              <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nổi bật</h1>
              <p className="text-[22px] font-bold text-gray-900">VinFast VF 7 là một bước tiến đột phá trong thiết kế xe ô tô của VinFast.</p>
            </div>
            <ImageWithCaption
              src="/images/vinfast-vf-7/vinfast-vf7-231206-04.jpg"
              alt="thong so ky thuat"
              caption="Trải nghiệm lái phấn khích
Công suất tối đa 260 kW/349 hp*; Mô men xoắn cực đại 500 Nm*; Tăng tốc 0 – 100 km/h trong 5,8 s*."
              className="pt-4 mb-8"
              capTionCenter={false}
            />
          </div>

          <section className="bg-white">
            <div>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Ngoại thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 7. Triết lý thiết kế “Vũ trụ phi đối xứng”.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                VinFast VF 7 lấy cảm hứng từ vũ trụ và các vật thể bay trong không gian, VinFast VF 7 hiện thân cho sự tự do, công nghệ, thời đại, cá tính, mạnh mẽ và thể thao, thoả mãn mọi tâm hồn đam mê thẩm mỹ và tốc độ.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-08b.jpg"
                alt="thong so ky thuat"
                caption="VinFast VF 7"
                className="pt-4 mb-8"
              />
              <p className="text-[#3c3c3c] text-base mt-2">
                Những đường nét và hình khối được sử dụng nhịp nhàng và tinh tế, mang đến cho chủ nhân VinFast VF 7 không gian trải nghiệm đầy phóng khoáng và tràn đầy năng lượng; song vẫn không làm mất đi sự tối giản, tinh khiết và thời trang vốn có của mẫu xe đánh thức mọi đam mê.
              </p>
              <img src="/images/vinfast-vf-7/vinfast-vf7-231206-09b.jpg" alt="thong so ky thuat" />
              <p className="text-[#3c3c3c] text-base my-4">
                Thiết kế phần đầu xe thon gọn, dựa trên hình ảnh của chiếc phi thuyền không gian, với điểm nhấn là cụm đèn định vị cánh chim – chữ V đặc trưng kéo dài liên tưởng tới đến những pha bứt tốc mạnh mẽ vượt thời không và sự chuyển hướng linh hoạt trên không trung.
              </p>
              <img src="/images/vinfast-vf-7/vinfast-vf7-231206-10.jpg" alt="thong so ky thuat" />
              <p className="text-[#3c3c3c] text-base my-4">
                VinFast VF 7 không chỉ là một chiếc xe điện tiên tiến, mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-11.jpg"
                alt="thong so ky thuat"
                caption="Tối ưu tính khí động học
Nắp capo thấp, trần xe và cửa sổ được vuốt thấp dần về phía sau, giúp tối tính khí động học, tạo sự đầm chắc và ổn định khi di chuyển tốc độ cao."
                className="pt-4 mb-8"
                capTionCenter={false}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-7/vinfast-vf7-231206-12.jpg"
                  alt="thong so ky thuat"
                  caption="Tay nắm cửa
Tay nắm ẩn trong thân xe, tạo ra sự liền mạch cho không khí đi qua. Mở cửa với thao tác ấn và kéo mang lại trải nghiệm mới lạ, khác biệt với tay nắm cửa truyền thống."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                /><ImageWithCaption
                  src="/images/vinfast-vf-7/vinfast-vf7-231206-13.jpg"
                  alt="thong so ky thuat"
                  caption="La-Zăng thể thao
Kích thước 20 inch (bản Plus), khẳng định thêm vẻ mạnh mẽ và thể thao cho VF 7."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                /><ImageWithCaption
                  src="/images/vinfast-vf-7/vinfast-vf7-231206-14.jpg"
                  alt="thong so ky thuat"
                  caption="Thân xe với đường gân dập nổi
Đường gân dập nổi nối liền bên hông xe, tạo sự liền mạch thể thao, phần đuôi xe cơ bắp và góc cạnh tô điểm cho chiếc xe thêm phần mạnh mẽ."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                /><ImageWithCaption
                  src="/images/vinfast-vf-7/vinfast-vf7-231206-15.jpg"
                  alt="thong so ky thuat"
                  caption="Gương chiếu hậu
Gập điện, chỉnh điện, đặt dưới cửa xe giúp hạn chế điểm mù, mở rộng tầm nhìn cho người lái."
                  className="pt-4 mb-8"
                  capTionCenter={false}
                />
              </div>
            </div>
            <div className="pt-10">
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Nội thất</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 7. Kiến tạo không gian trải nghiệm phóng khoáng, tự do và tràn đầy năng lượng.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2">
                Tận hưởng hành trình trong không gian riêng tư và rộng rãi của chiếc xe, nơi mỗi chi tiết mang đậm dấu ấn cá nhân tạo nên cuộc phiêu lưu độc đáo của riêng bạn.
              </p>
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-16.jpg"
                alt="Nội Thất VinFast VF 7"
                caption="Nội Thất VinFast VF 7"
                className="pt-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <ImageWithCaption
                  src="/images/vinfast-vf-7/vinfast-vf7-231206-17.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Tiện nghi hướng vào người lái
Tất cả tiện nghi đều nằm trong tầm tay người lái, giúp mang tới kết nối liền mạch giữa người và xe."
                  className="pt-4"
                  capTionCenter={false}
                />
                <ImageWithCaption
                  src="/images/vinfast-vf-7/vinfast-vf7-231206-18.jpg"
                  alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                  caption="Trần kính toàn cảnh (tùy chọn)
Mở rộng không gian, mang tới trải nghiệm cao cấp trên mỗi hành trình."
                  className="pt-4"
                  capTionCenter={false}
                />
              </div>
            </div>
            <p className="text-[#3c3c3c] text-base mt-2 font-bold">
              Tiện nghi thông minh tích hợp trên màn hình giải trí
            </p>
            <p className="text-[#3c3c3c] text-base my-4">
              Với kích cỡ 12,9 inch, có thể tùy chỉnh cá nhân hóa theo người dùng. Màn hình giải trí cảm ứng của VF 7 có thể giúp điều khiển các chức năng trên xe bằng cách vuốt/chạm nhẹ hoặc ra lệnh cho trợ lý ảo qua giọng nói.
            </p>
            <img src="/images/vinfast-vf-7/vinfast-vf7-231206-19.jpg" alt="thong so ky thuat" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-21.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Kết nối giải trí
Internet, video, Radio, Bluetooth, Kết nối Apple Carplay và Android Auto."
                className="pt-4"
                capTionCenter={false}
              />
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-22.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Bản đồ
Bản đồ tích hợp trên xe có thể tự động đề xuất dẫn hướng qua trạm sạc khi cần thiết."
                className="pt-4"
                capTionCenter={false}
              />
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-23.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Điều khiển các tính năng
Điều chỉnh điều hòa, chỉnh gương, mở cốp,…"
                className="pt-4"
                capTionCenter={false}
              />
              <ImageWithCaption
                src="/images/vinfast-vf-7/vinfast-vf7-231206-24.jpg"
                alt="Bộ sạc theo xe 2.2 kW (Ô tô điện)"
                caption="Theo dõi tình trạng xe(tùy chọn)
Quản lý PIN và Sạc, Áp suất lốp, Camera 360."
                className="pt-4"
                capTionCenter={false}
              />
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Vận hành</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 7. Hệ thống trợ lái nâng cao – Hỗ trợ lái trên đường cao tốc.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">
                Ứng dụng công nghệ và trang thiết bị hiện đại nhất, hệ thống trợ lái nâng cao VinFast đem lại trải nghiệm lái thư thái, dễ dàng để bạn an tâm tận hưởng cuộc sống.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <img src="/images/vinfast-vf-7/vinfast-vf7-231206-26.jpg" alt="thong so ky thuat" />
                <img src="/images/vinfast-vf-7/vinfast-vf7-231206-25.jpg" alt="thong so ky thuat" />
              </div>
            </div>
            <div>
              <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Trạm sạc</h1>
                <h2 className="text-gray-800 text-[22px] font-bold">3,5 km – Khoảng cách nhỏ cho mục tiêu lớn.</h2>
              </div>
              <p className="text-[#3c3c3c] text-base mt-2 mb-4">
                Định hình tiên phong thúc đẩy ngành công nghiệp xe điện, hướng tới một tương lai Xanh và Thông Minh, VinFast đã đầu tư hàng trăm triệu USD phát triển hạ tầng, từng bước “phủ rộng” trạm sạc xe điện:
              </p>
              <ul className="list-disc pl-5 pt-4">
                <li className="mb-[10px]">Hệ thống trạm sạc xe điện VinFast trải dài 63 tỉnh và thành phố.</li>
                <li className="mb-[10px]">106 tuyến quốc lộ quan trọng đều có trạm sạc.</li>
                <li className="mb-[10px]">80/85 thành phố đã được lắp đặt hệ thống trạm sạc.</li>
                <li className="mb-[10px]">Khoảng cách ngắn 3,5 Km giữa 2 trạm sạc trong thành phố.</li>
              </ul>
              <img src="/images/vinfast-vf-7/vinfast-vf7-231206-27.jpg" alt="thong so ky thuat" />
            </div>
            <div className="max-w-6xl mx-auto mt-10">
              <h1 className="text-[27px] font-bold text-gray-900 mt-2 uppercase">Thông số kỹ thuật</h1>
              <h2 className="text-gray-800 text-[22px] font-bold">VinFast VF 7</h2>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <img src="/images/vinfast-vf-7/vinfast-vf-7-250220-tskt-01.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-7/vinfast-vf-7-250220-tskt-02.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-7/vinfast-vf-7-250220-tskt-03.jpg" alt="thong so ky thuat" />
              <img src="/images/vinfast-vf-7/banner-pc-231205-01-80-1200x388.jpg" alt="thong so ky thuat" />
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
              title="VinFast VF 7"
              price="799.000.000"
              variants={[
                { name: 'VinFast VF 7 Eco', price: '799.000.000' },
                { name: 'VinFast VF 7 Plus', price: '949.000.000' },
                { name: 'VinFast VF 7 Plus – Trần kính', price: '969.000.000' },
              ]}
              rangePerCharge="375-431 km"
              maxPower="130-260 kW"
              hotline="0783382001"
            />
          </div>
        </div>
        <Tabs tabs={productTabs} defaultTab="description" className="mt-8" />
      </div>
    </div>
  )
}
