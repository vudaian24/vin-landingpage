import ButtonCustom from "@/components/ui/ButtonCustom";
import { Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trải nghiệm khách hàng",
};

export default function TraiNghiemKhachHang() {
  return (
    <div
      className="w-full min-h-[550px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/images/vinfast-contact-bg.jpg')" }}
    >
      <div className="max-w-[1065px] w-full px-[10px]">
        <h2 className="text-[30px] font-bold leading-9">
          CẢM ƠN<br />QUÝ KHÁCH HÀNG!
        </h2>
        <p className="text-[20px] mt-4">
          Cảm ơn Quý khách hàng đã tin tưởng đồng hành cùng VinFast.
        </p>
        <ButtonCustom
          href="tel:0968225709"
          label="0968225709"
          variant="primary"
          icon={<Phone className="w-4 h-4 mr-1" />}
          className="font-bold w-fit text-center px-6 py-2 text-base mt-5"
        />
      </div>
    </div>
  );
}
