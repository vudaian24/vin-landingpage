import Image from "next/image";

const flexiblePackageData = [
  {
    stt: "1",
    model: "VF e34",
    monthlyFee: "657.500 VND",
    unitPrice: "1.315 VND",
  },
  {
    stt: "2",
    model: "VF 8",
    monthlyFee: "990.000 VND",
    unitPrice: "1.980 VND",
  },
  {
    stt: "3",
    model: "VF 9",
    monthlyFee: "1.100.000 VND",
    unitPrice: "2.200 VND",
  },
]

const fixedPackageData = [
  {
    stt: "1",
    model: "VF e34",
    monthlyFee: "1.805.000 VND",
  },
  {
    stt: "2",
    model: "VF 8",
    monthlyFee: "2.189.000 VND",
  },
  {
    stt: "3",
    model: "VF 9",
    monthlyFee: "3.091.000 VND",
  },
]


export default function PinVaTramSacOToDien() {
  return (
    <div className="w-full flex flex-col">
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase">Tin tức</span>
        <h1 className="text-2xl font-bold text-gray-900">Pin và trạm sạc ô tô điện</h1>
        <div className="w-9 h-[3px] bg-gray-200 rounded-full" />
      </div>

      <div className="w-full py-8 space-y-12">
        <section className="space-y-6">
          <div className="space-y-0.5">
            <h1 className="text-2xl font-bold text-gray-900">Thuận tiện</h1>
            <h2 className="text-2xl font-bold text-gray-800">Đa dạng giải pháp sạc</h2>
          </div>

          <p className="text-gray-600 text-base leading-relaxed">
            VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của khách hàng một cách thuận tiện nhất.
          </p>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/news/pin-sac-o-to.jpg"
              alt="VinFast charging station with blue branding and white charging equipment"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Second Section - Cost Savings */}
        <section className="space-y-6">
          <div className="space-y-0.5">
            <h3 className="text-2xl font-bold">Tiết kiệm chi phí</h3>
            <h4 className="text-2xl font-bold text-gray-800">Thuê pin ô tô điện linh hoạt</h4>
          </div>

          <p className="text-gray-600 text-base leading-relaxed">
            Với phương châm luôn khách hàng làm trọng tâm, VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và
            khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.
          </p>
        </section>

        {/* Policy Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Chính sách thuê pin</h2>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Phí thuê pin hàng tháng</h3>

            <div className="space-y-4 text-gray-700">
              <p className="text-base leading-relaxed">
                Tổng chi phí hàng tháng (phí thuê bao pin + chi phí sạc pin) có bản tương đương chi phí xăng. Nếu Khách
                hàng đi nhiều và sử dụng gói thuê bao có định thì chi phí sẽ thấp hơn chi phí xăng.
              </p>

              <p className="text-base leading-relaxed">
                Khách hàng có thể thuê pin trọn đời đến khi Khách hàng hết nhu cầu sử dụng xe. Trường hợp chuyển nhượng xe
                thì Khách hàng mới chỉ cần ký xác nhận tiếp tục thực hiện hợp đồng thuê pin.
              </p>

              <p className="text-base leading-relaxed">
                VinFast có 2 gói thuê bao pin cho Khách hàng tùy chọn (Giá thuê pin được có định suốt vòng đời sản phẩm
                theo giá thuê pin thời điểm Khách hàng nhận xe, mà không phụ thuộc vào chủ sở hữu):
              </p>
            </div>
          </div>
        </section>

        <div className="w-full space-y-6 bg-white">
          {/* Gói linh hoạt */}
          <div className="bg-white">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Gói linh hoạt – từ 657.000 VND</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Khách hàng trả phí thuê bao pin hàng tháng cho quãng đường 500 Km/tháng, nếu Khách hàng sử dụng nhiều hơn
                500 Km/tháng thì Khách hàng trả thêm số tiền bằng quãng đường vượt nhân với đơn giá thuê pin/Km. Cụ thể:
              </p>
            </div>
            <div className="py-6">
              <div className="w-full">
                <table className="text-sm w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900 w-3 md:w-16">
                        STT
                      </th>
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900">
                        MODEL XE
                      </th>
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900">
                        PHÍ THUÊ BAO<br />TỐI THIỂU/THÁNG (500KM)*
                      </th>
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900">
                        ĐƠN GIÁ THUÊ PIN/KM*
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {flexiblePackageData.map((row, index) => (
                      <tr
                        key={row.stt}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-300 px-1 py-3 text-center font-medium">{row.stt}</td>
                        <td className="border border-gray-300 px-1 py-3 font-medium text-center">{row.model}</td>
                        <td className="border border-gray-300 px-1 py-3 text-center">{row.monthlyFee}</td>
                        <td className="border border-gray-300 px-1 py-3 text-center">{row.unitPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Gói cố định */}
          <div className="bg-white">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Gói cố định – từ 1.805.000 VND</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hàng tháng khách hàng chỉ cần trả tổng tiền của gói này là sử dụng không giới hạn số Km/ tháng. Cụ thể:
              </p>
            </div>
            <div className="py-6">
              <div className="w-full">
                <table className="text-sm w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900 w-3 md:w-16">STT</th>
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900">MODEL XE</th>
                      <th className="border border-gray-300 px-1 py-3 text-center font-semibold text-gray-900">
                        PHÍ THUÊ BAO TỐI THIỂU/THÁNG*
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixedPackageData.map((row, index) => (
                      <tr key={row.stt} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-1 py-3 text-center font-medium">{row.stt}</td>
                        <td className="border border-gray-300 px-1 py-3 font-medium text-center">{row.model}</td>
                        <td className="border border-gray-300 px-1 py-3 text-center">{row.monthlyFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 italic">* Giá đã bao gồm VAT</p>
        </div>


        <section className="space-y-6 text-gray-900">
          <div>
            <h2 className="text-2xl font-bold">Thời hạn hợp đồng thuê pin & đặt cọc</h2>
            <ul className="list-disc pl-5 text-base leading-relaxed mt-2">
              <li>Thời hạn Hợp Đồng thuê pin là vô thời hạn đến khi Khách hàng hết nhu cầu hoặc huỷ xe.</li>
              <li>Khách hàng không phải đặt cọc khi thuê pin.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Phí trả chậm</h2>
            <p className="text-base leading-relaxed mt-2">
              Tỷ lệ phí thanh toán chậm là 10%/năm, áp dụng cho phí thuê pin và phí đền bù pin hỏng
              (nếu có – trong trường hợp Khách hàng làm hỏng pin thuê) mà Khách hàng quá hạn thanh toán.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Chế tài khi Khách hàng nợ phí thuê pin</h2>
            <ul className="list-disc pl-5 text-base leading-relaxed mt-2">
              <li>VinFast sẽ chặn sạc pin của Khách hàng 50% cho tháng đầu, từ tháng 2 chặn 70% dung lượng pin (SOC).</li>
              <li>Khi Khách hàng thanh toán xong công nợ, hệ thống sẽ tự động mở khoá và Khách hàng có thể sạc bình thường.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Thay thế/ sửa chữa/ bảo dưỡng pin cho Khách hàng</h2>
            <ol className="list-decimal pl-5 text-base leading-relaxed mt-2 space-y-2">
              <li>
                VinFast sẽ thay thế/ sửa chữa/ bảo dưỡng miễn phí pin thuê cho Khách hàng khi:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Pin hỏng/lỗi do Nhà sản xuất.</li>
                  <li>Bảo dưỡng (nếu có) miễn phí.</li>
                  <li>Trạng thái tiếp nhận sạc pin xuống dưới 70%.</li>
                </ul>
              </li>
              <li>
                Nếu pin hỏng do lỗi Khách hàng thì Khách hàng sẽ phải đền bù chi phí sửa chữa/ thay thế pin.
                Chi phí sửa chữa/ thay thế sẽ được niêm yết trên Website và các xưởng dịch vụ VinFast.
              </li>
            </ol>
          </div>
        </section>

        <section className="space-y-6 text-gray-900">
          <div>
            <h2 className="text-2xl font-bold">Hướng dẫn thanh toán</h2>
            <p className="text-base leading-relaxed mt-2">
              Khách hàng không phải đặt cọc khi thuê pin, và chi phí thuê pin sẽ được thanh toán trả sau, trước ngày 15 của tháng tiếp theo cho toàn bộ phí thuê pin của tháng trước đó.
            </p>
            <ul className="list-disc pl-5 text-base leading-relaxed mt-2 space-y-1">
              <li>
                Thanh toán trực tiếp tại các Điểm Cung Cấp Dịch Vụ bằng các phương thức thanh toán mà Điểm Cung Cấp Dịch Vụ chấp nhận
              </li>
              <li>
                Thanh toán online thông qua ứng dụng VinFast
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Hướng dẫn thuê & sạc PIN</h2>
            <p className="text-base leading-relaxed mt-2">
              Với hệ thống trạm sạc phủ sóng toàn quốc, khách hàng có thể dễ dàng sử dụng dịch vụ sạc ô tô điện VinFast ở bất cứ đâu.
              Hãy cùng chúng tôi tìm hiểu hướng dẫn sạc và thuê pin Ô tô điện VinFast.
            </p>
            <div className="mt-4">
              <img
                src="/images/news/pin-sac-02.jpg"
                alt="Trụ sạc khả dụng sẵn sàng sạc"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}