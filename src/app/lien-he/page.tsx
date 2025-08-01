import ButtonCustom from "@/components/ui/ButtonCustom";
import { Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ VinFast Thăng Long – Showroom chính hãng tại Hà Nội",
  description: "Liên hệ VinFast Thăng Long tại Số 68 Trịnh Văn Bô, Hà Nội. Đặt lịch lái thử, tư vấn mua xe và hỗ trợ dịch vụ chính hãng nhanh chóng.",
};

export default function Contact() {
  return (
    <div
      className="w-full min-h-[550px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/images/vinfast-contact-bg.webp')" }}
    >
      <div className="max-w-[1065px] w-full px-[10px]">
        <p className="text-[20px] font-bold text-white">SHOWROOM</p>
        <h1 className="text-[30px] font-bold !text-white">VINFAST THĂNG LONG</h1>
        <p className="text-[15px] mt-4">
          Địa Chỉ: Số 68 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội.
        </p>
        <ButtonCustom
          href="tel:0783382001"
          label="0783382001"
          variant="primary"
          icon={<Phone className="w-4 h-4 mr-1" />}
          className="font-bold w-fit text-center px-6 py-2 text-[14px] mt-5"
        />
      </div>
    </div>
  );
}
