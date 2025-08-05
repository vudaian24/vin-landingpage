import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Quyền Riêng Tư",
  description: "Tìm hiểu về chính sách quyền riêng tư của chúng tôi, cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Đảm bảo an toàn thông tin khi bạn sử dụng dịch vụ của chúng tôi.",
};

export default function ChinhSachQuyenRiengTu() {
  return (
    <div className="w-full bg-white py-8 !text-sm">
      <div className="mx-auto max-w-[1080px] px-4">
        <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav className="text-[18px] text-[#666666b3]">
            <span className="cursor-pointer hover:underline">TRANG CHỦ</span>
            <span className="mx-1.5">/</span>
            <span className="font-semibold uppercase">Chính Sách Quyền Riêng Tư</span>
          </nav>
        </div>
        <p className="mb-6">
          <span className="font-semibold">
            Chính sách quyền riêng tư này mô tả cách thức mà VINFAST THĂNG LONG thu thập và sử dụng thông tin cá nhân của quý khách trong quá trình quý khách sử dụng các trang web, ứng dụng, sản phẩm và dịch vụ của VINFAST THĂNG LONG (gọi chung là “Sản Phẩm Của Chúng Tôi”).
          </span>
        </p>
        <p className="mb-6">
          Chính sách quyền riêng tư này không áp dụng cho bất kỳ sản phẩm, dịch vụ, trang web hoặc nội dung nào được cung cấp bởi bên thứ ba hoặc có sử dụng chính sách quyền riêng tư riêng.
        </p>

        <p className="mb-4">
          Chính sách này bao gồm các nội dung sau:
        </p>
        <ol className="list-decimal list-inside pl-1 mb-8 space-y-2">
          <li>Thông tin cá nhân được chúng tôi thu thập</li>
          <li>Cách thức chúng tôi sử dụng thông tin cá nhân</li>
          <li>Thu thập và sử dụng cookies</li>
          <li>Cách thức chúng tôi chia sẻ thông tin cá nhân</li>
          <li>Vị trí của thông tin cá nhân</li>
          <li>Cách thức chúng tôi bảo vệ thông tin cá nhân</li>
          <li>Quảng cáo trên Internet và bên thứ ba</li>
          <li>Truy cập và lựa chọn</li>
          <li>Thông tin cá nhân của người chưa thành niên</li>
          <li>Thời hạn lưu trữ thông tin cá nhân</li>
          <li>Thông tin liên lạc, thông báo và sửa đổi</li>
          <li>Một số thông tin bổ sung cho châu Âu</li>
          <li>Ví dụ về các thông tin được chúng tôi thu thập</li>
        </ol>

        <h2 className="text-base font-bold mt-8 mb-4">
          1. Thông tin cá nhân được chúng tôi thu thập
        </h2>
        <p className="mb-4">
          Chúng tôi thu thập thông tin cá nhân của quý khách trong quá trình quý khách tương tác với các Sản Phẩm Của Chúng Tôi.
        </p>
        <p className="mb-4">
          Dưới đây là các nguồn thông tin được chúng tôi thu thập:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-semibold">Thông tin quý khách cung cấp cho chúng tôi:</span> Chúng tôi thu thập bất kỳ thông tin nào quý khách cung cấp liên quan đến Sản Phẩm Của Chúng Tôi.
          </li>
          <li>
            <span className="font-semibold">Thông tin tự động:</span> Chúng tôi tự động thu thập một số loại thông tin nhất định khi quý khách tương tác với Sản Phẩm Của Chúng Tôi. Chúng tôi sử dụng camera và các công nghệ tương tự khác (gọi chung là “camera”) để nhận diện người và phương tiện ra vào các cơ sở kinh doanh và các khu vực thuộc quản lý của chúng tôi.
          </li>
          <li>
            <span className="font-semibold">Thông tin từ các nguồn khác:</span> Chúng tôi có thể thu thập thông tin về quý khách từ các nguồn khác, bao gồm nhà cung cấp dịch vụ, đối tác và các nguồn công khai có sẵn.
          </li>
        </ul>
        <h2 className="text-base font-bold mt-8 mb-4">
          2. Cách thức chúng tôi sử dụng thông tin cá nhân
        </h2>
        <p className="mb-4">
          Chúng tôi sử dụng thông tin cá nhân của quý khách để vận hành, cung cấp và cải thiện Sản Phẩm Của Chúng Tôi. Mục đích sử dụng thông tin cá nhân của chúng tôi bao gồm:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-semibold">Cung cấp Sản Phẩm Của Chúng Tôi:</span> Chúng tôi sử dụng thông tin cá nhân của quý khách để cung cấp và giao Sản Phẩm Của Chúng Tôi và xử lý các giao dịch liên quan đến Sản Phẩm Của Chúng Tôi, bao gồm nhưng không giới hạn đến việc đăng ký, mua hàng, tham gia các chương trình quảng cáo, ưu đãi và thanh toán.
          </li>
          <li>
            <span className="font-semibold">Đo lường, hỗ trợ và cải thiện Sản Phẩm Của Chúng Tôi:</span> Chúng tôi sử dụng thông tin cá nhân của quý khách để đo lường việc sử dụng, phân tích hiệu suất, sửa lỗi, cung cấp hỗ trợ, cải thiện và phát triển Sản Phẩm Của Chúng Tôi.
          </li>
          <li>
            <span className="font-semibold">Đưa ra khuyến nghị và cá nhân hóa trải nghiệm:</span> Chúng tôi sử dụng thông tin cá nhân của quý khách để đề xuất Sản Phẩm Của Chúng Tôi mà quý khách có thể quan tâm, nhận diện sở thích của quý khách và cá nhân hóa trải nghiệm của quý khách với Sản Phẩm Của Chúng Tôi.
          </li>
          <li>
            <span className="font-semibold">Tuân thủ nghĩa vụ pháp lý:</span> Trong một số trường hợp nhất định, chúng tôi có nghĩa vụ pháp lý để thu thập, sử dụng hoặc lưu trữ thông tin cá nhân của quý khách.
          </li>
          <li>
            <span className="font-semibold">Liên lạc với quý khách:</span> Chúng tôi sử dụng thông tin cá nhân của quý khách để liên lạc với quý khách về các vấn đề liên quan đến Sản Phẩm Của Chúng Tôi thông qua các kênh khác nhau (ví dụ: email, chat, SMS, cuộc gọi thoại) và để trả lời yêu cầu của quý khách.
          </li>
          <li>
            <span className="font-semibold">Tiếp thị:</span> Chúng tôi sử dụng thông tin cá nhân của quý khách để tiếp thị và quảng bá Sản Phẩm Của Chúng Tôi theo quy định của pháp luật. Chúng tôi có thể hiển thị quảng cáo Sản Phẩm Của Chúng Tôi dựa trên sở thích của quý khách.
          </li>
          <li>
            <span className="font-semibold">Phòng chống gian lận và lạm dụng, rủi ro tin dung:</span> Chúng tôi sử dụng thông tin cá nhân của quý khách để ngăn chặn và phát hiện gian lận, lạm dụng nhằm bảo vệ an ninh của khách hàng, chúng tôi và những người khác. Chúng tôi cũng có thể sử dụng các phương pháp chấm điểm để đánh giá và quản trị rủi ro tín dụng.
          </li>
          <li>
            <span className="font-semibold">Một số mục đích cụ thể cần sự đồng ý của quý khách:</span> Chúng tôi có thể xin sự chấp thuận của quý khách về việc sử dụng thông tin cá nhân cho một mục đích cụ thể nào đó khi chúng tôi liên hệ với quý khách.
          </li>
        </ul>
        <h2 className="text-base font-bold mt-8 mb-4">
          3. Thu thập và sử dụng cookies
        </h2>
        <p className="mb-4">
          Chúng tôi sử dụng cookie, pixel và các công nghệ tương tự khác (gọi chung là “cookie”) để nhận diện trình duyệt hoặc thiết bị của quý khách, tìm hiểu thêm về sở thích của quý khách, cung cấp cho quý khách các tính năng và dịch vụ thiết yếu và cho các mục đích bổ sung khác, bao gồm:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
          <li>
            Nhận diện quý khách khi quý khách đăng nhập và/hoặc sử dụng dịch vụ của chúng tôi. Điều này cho phép chúng tôi cung cấp cho quý khách các đề xuất, hiển thị nội dung được cá nhân hóa và cung cấp các tính năng và dịch vụ tùy chỉnh khác.
          </li>
          <li>
            Lưu tâm đến các tùy chọn mà quý khách đã chấp thuận. Điều này cho phép chúng tôi tôn trọng những điều quý khách thích và không thích, chẳng hạn như ngôn ngữ và cấu hình mà quý khách lựa chọn.
          </li>
          <li>
            Tiến hành nghiên cứu và phân tích để cải thiện Sản Phẩm Của Chúng Tôi.
          </li>
          <li>
            Ngăn chặn hành vi gian lận.
          </li>
          <li>
            Cải thiện an ninh.
          </li>
          <li>
            Cung cấp nội dung, bao gồm quảng cáo, có liên quan đến sở thích của quý khách trên các trang web của chúng tôi và trang web của bên thứ ba.
          </li>
          <li>
            Đo lường và phân tích chất lượng của các Sản Phẩm Của Chúng Tôi.
          </li>
        </ul>
        <p className="mb-4">
          Cookie cho phép quý khách tận dụng một số tính năng cần thiết của chúng tôi. Ví dụ, nếu quý khách chặn hoặc từ chối cookie của chúng tôi, quý khách sẽ không thể sử dụng một số sản phẩm, dịch vụ nhất định yêu cầu quý khách đăng nhập hoặc quý khách có thể phải tự tay điều chỉnh một số tùy chọn hoặc cài đặt ngôn ngữ mỗi khi quý khách truy cập lại các trang web của chúng tôi.
        </p>
        <p className="mb-4">
          Các bên thứ ba được chấp thuận cũng có thể đặt cookie khi quý khách tương tác với các Sản Phẩm Của Chúng Tôi. Các bên thứ ba này thường bao gồm các công cụ tìm kiếm, nhà cung cấp dịch vụ đo lường và phân tích, mạng xã hội và các công ty quảng cáo. Các bên thứ ba sử dụng cookie trong quá trình cung cấp nội dung, bao gồm quảng cáo liên quan đến sở thích của quý khách, để đo lường hiệu quả của quảng cáo và thực hiện một số dịch vụ thay mặt cho chúng tôi.
        </p>
        <p>
          Quý khách có thể quản lý lý cookie trình duyệt bằng việc cài đặt trình duyệt của mình. Tính năng ‘Trợ giúp’ trên hầu hết các trình duyệt sẽ cho quý khách biết cách ngăn trình duyệt chấp nhận các cookie mới, cách trình duyệt thông báo cho quý khách khi quý khách nhận được cookie mới, cách tắt cookie và khi cookie hết hạn. Nếu quý khách tắt tất cả cả cookie trên trình duyệt của mình, cả chúng tôi và bên thứ ba sẽ không thể chuyển các cookie sang trình duyệt của quý khách. Tuy nhiên, nếu quý khách làm điều này, quý khách có thể phải tự tay điều chỉnh một số tùy chọn mỗi khi quý khách truy cập lại trang web và một số tính năng và dịch vụ có thể không hoạt động.
        </p>
        <h2 className="text-base font-bold mt-8 mb-4">
          4. Cách thức chúng tôi chia sẻ thông tin cá nhân
        </h2>
        <p className="mb-4">
          Thông tin về khách hàng là một phần quan trọng trong hoạt động của chúng tôi, và chúng tôi không bán thông tin cá nhân của khách hàng cho người khác. Chúng tôi chỉ chia sẻ thông tin cá nhân như được nêu dưới đây.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-semibold">Giao dịch liên quan đến bên thứ ba:</span> Chúng tôi cung cấp cho quý khách các dịch vụ, phần mềm và nội dung do bên thứ ba cung cấp để sử dụng hoặc thông qua Sản Phẩm Của Chúng Tôi. Quý khách có thể biết khi nào bên thứ ba tham gia vào các giao dịch của quý khách và khi nào chúng tôi sẽ chia sẻ thông tin liên quan đến các giao dịch đó với bên thứ ba đó.
          </li>
          <li>
            <span className="font-semibold">Bên thứ ba cung cấp dịch vụ:</span> Chúng tôi sử dụng và/hoặc hợp tác với các công ty và cá nhân khác để thực hiện một số công việc và chương trình như chương trình ưu đãi, bán hàng chéo,... dành cho quý khách. Ví dụ bao gồm: gửi thông tin liên lạc, xử lý thanh toán, đánh giá rủi ro tín dụng và tuân thủ, phân tích dữ liệu, cung cấp hỗ trợ tiếp thị và bán hàng (bao gồm quản lý quảng cáo và sự kiện), quản lý quan hệ khách hàng và đào tạo. Các bên thứ ba cung cấp dịch vụ này có quyền truy cập vào thông tin cá nhân cần thiết để thực hiện các chức năng của họ, nhưng không được sử dụng cho các mục đích khác. Ngoài ra, họ phải tuân thủ Chính sách quyền riêng tư này và pháp luật về bảo vệ quyền riêng tư liên quan.
          </li>
          <li>
            <span className="font-semibold">Tái cấu trúc, Chuyển nhượng doanh nghiệp:</span> Trong quá trình phát triển kinh doanh, chúng tôi có thể bán hoặc mua các doanh nghiệp hoặc tái cấu trúc doanh nghiệp hoặc dịch vụ khác phù hợp với quy định của pháp luật. Trong các giao dịch như vậy, thông tin cá nhân, cơ sở dữ liệu và quyền sử dụng thông tin nói chung là một trong những tài sản kinh doanh được chuyển nhượng nhưng bên nhận chuyển nhượng vẫn phải tuân theo các quy định của Chính sách quyền riêng tư này (hoặc khi được khách hàng chấp thuận).
          </li>
          <li>
            <span className="font-semibold">Bảo vệ chúng tôi và những người khác:</span> Chúng tôi tiết lộ lộ tài khoản và thông tin cá nhân khác khi chúng tôi tin rằng việc đó là phù hợp để tuân thủ pháp luật, để thực thi hoặc áp dụng các điều khoản và thỏa thuận khác của chúng tôi hoặc để bảo vệ quyền, tài sản hoặc an ninh của chúng tôi, khách hàng của chúng tôi, hoặc bất kỳ người nào khác. Các công việc nêu trên có thể bao gồm việc trao đổi thông tin với các công ty và tổ chức khác để ngăn chặn và phát hiện gian lận và giảm rủi ro tài sản và tín dụng.
          </li>
          <li>
            <span className="font-semibold">Tùy theo sự lựa chọn của quý khách:</span> Ngoài các quy định trên, quý khách sẽ nhận được thông báo khi thông tin cá nhân của quý khách có thể được chia sẻ với bên thứ ba và quý khách sẽ có quyền không chấp thuận việc chia sẻ thông tin.
          </li>
        </ul>
        <h2 className="text-base font-bold mt-8 mb-4">
          5. Vị trí của thông tin cá nhân
        </h2>
        <p className="mb-4">
          VINFAST THĂNG LONG có địa chỉ trụ ở tại Việt Nam. Tùy thuộc vào phạm vi tương tác của quý khách với Sản Phẩm Của Chúng Tôi, thông tin cá nhân của quý khách có thể được lưu trữ tại hoặc truy cập từ các địa điểm khác ở Việt Nam mà còn có thể từ nhiều quốc gia. Khi chúng tôi chuyển thông tin cá nhân của quý khách đến các quốc gia khác, chúng tôi sẽ đảm bảo rằng thông tin đó được chuyển theo Chính sách quyền riêng tư này và được cho phép theo pháp luật bảo vệ quyền riêng tư hiện hành.
        </p>

        <h2 className="text-base font-bold mt-8 mb-4">
          6. Cách thức chúng tôi bảo vệ thông tin cá nhân
        </h2>
        <p className="mb-4">
          Tại VINFAST THĂNG LONG bảo mật là ưu tiên cao nhất của chúng tôi. Hệ thống của chúng tôi được thiết kế có tính đến khả năng bảo đảm an toàn và riêng tư cho thông tin của quý khách.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            Chúng tôi có các biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn việc truy cập, sử dụng trái phép thông tin cá nhân. Chúng tôi cũng thường xuyên phối hợp với các chuyên gia bảo mật nhằm cập nhật những thông tin mới nhất về an ninh mạng để đảm bảo sự an toàn cho thông tin cá nhân. Khi thu thập dữ liệu, chúng tôi thực hiện lưu giữ và bảo mật thông tin cá nhân trên hệ thống máy chủ và các thông tin cá nhân này được bảo đảm an toàn bằng các hệ thống tường lửa, các biện pháp kiểm soát truy cập, mã hóa dữ liệu.
          </li>
          <li>
            Các thông tin thẻ thanh toán của quý khách do các tổ chức tài chính phát hành được chúng tôi bảo vệ theo tiêu chuẩn quốc tế với nguyên tắc không ghi nhận các dữ liệu quan trọng (số thẻ, họ tên, số CVV) trên hệ thống của chúng tôi. Giao dịch thanh toán của quý khách được thực hiện trên hệ thống của ngân hàng liên quan.
          </li>
        </ul>

        <h2 className="text-base font-bold mt-8 mb-4">
          7. Quảng cáo trên Internet và bên thứ ba
        </h2>
        <p className="mb-4">
          Các Sản Phẩm Của Chúng Tôi có thể bao gồm quảng cáo của bên thứ ba và đường link tới các trang web và ứng dụng khác. Các đối tác quảng cáo bên thứ ba có thể thu thập thông tin về quý khách khi quý khách tương tác với nội dung, quảng cáo hoặc dịch vụ của họ.
        </p>

        <h2 className="text-base font-bold mt-8 mb-4">
          8. Truy cập và lựa chọn
        </h2>
        <p className="mb-4">
          Quý khách có thể xem, cập nhật và xóa một số thông tin nhất định về tài khoản và các tương tác của quý khách với Sản Phẩm Của Chúng Tôi. Nếu quý khách không thể tự truy cập hoặc cập nhật thông tin của mình, quý khách luôn có thể liên hệ với chúng tôi để được hỗ trợ.
        </p>
        <p className="mb-4">
          Quý khách có nhiều lựa chọn về việc thu thập và sử dụng thông tin cá nhân của quý khách. Nhiều Sản Phẩm Của Chúng Tôi bao gồm chức năng cho phép quý khách tùy chọn về cách thông tin của quý khách đang được sử dụng. Quý khách có thể chọn không cung cấp một số thông tin nhất định, nhưng sau đó quý khách có thể không tận dụng được một số Sản Phẩm Của Chúng Tôi.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-semibold">Quảng cáo:</span> Nếu quý khách không muốn xem quảng cáo dựa trên sở thích, vui lòng điều chỉnh theo hướng dẫn của các trang quảng cáo liên quan (hoặc các cách thức khác theo quy định tại hợp đồng liên quan đến quý khách).
          </li>
          <li>
            <span className="font-semibold">Trình duyệt và thiết bị:</span> Tính năng Trợ giúp trên hầu hết các trình duyệt và thiết bị sẽ cho quý khách biết cách ngăn trình duyệt hoặc thiết bị của mình chấp nhận cookie mới, làm thế nào để trình duyệt thông báo cho quý khách khi quý khách nhận được cookie mới, cách tắt cookie và khi cookie hết hạn.
          </li>
        </ul>

        <h2 className="text-base font-bold mt-8 mb-4">
          9. Thông tin cá nhân của người chưa thành niên
        </h2>
        <p className="mb-4">
          Nếu quý khách dưới 18 tuổi, quý khách phải có sự đồng ý của cha, mẹ hoặc người giám hộ trước khi ký kết hợp đồng và chấp thuận Chính sách quyền riêng tư này.
        </p>

        <h2 className="text-base font-bold mt-8 mb-4">
          10. Thời hạn lưu trữ thông tin cá nhân
        </h2>
        <p className="mb-4">
          Chúng tôi lưu trữ thông tin cá nhân của quý khách để đảm bảo cho quý khách khả năng sử dụng liên tục các Sản Phẩm Của Chúng Tôi, và lưu trữ trong thời hạn cần thiết để thực hiện được các mục tiêu quy định tại Chính sách quyền riêng tư này, hoặc theo quy định của pháp luật (bao gồm cả cho mục đích thuế và kế toán), hoặc để thực hiện các công việc khác như được thông báo trước cho quý khách. Thời gian chúng tôi lưu giữ thông tin cá nhân cụ thể khác nhau tùy thuộc vào mục đích sử dụng và chúng tôi sẽ xóa thông tin cá nhân của quý khách theo quy định của pháp luật hiện hành.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">
          11. Thông tin liên lạc, thông báo và sửa đổi
        </h2>
        <p className="mb-4">
          Nếu quý khách có bất kỳ câu hỏi nào về quyền riêng tư tại VINFAST THĂNG LONG hoặc muốn liên hệ với đơn vị kiểm soát thông tin của chúng tôi, vui lòng liên hệ với chúng tôi và chúng tôi sẽ cố gắng trả lời câu hỏi của quý khách. Quý khách cũng có thể liên hệ với chúng tôi theo địa chỉ dưới đây:
        </p>
        <div className="pl-4 mb-4">
          <p className="mb-1">Showroom Ô Tô VinFast Thăng Long</p>
          <p className="mb-1">Địa Chỉ: Số 68 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
          <p className="mb-1">Hotline: 0783382001</p>
          <p className="mb-1">Email: tuantv.0308@gmail.com</p>
        </div>
        <p>
          Hoạt động kinh doanh của chúng tôi liên tục thay đổi và Chính sách quyền riêng tư này cũng có thể được sửa đổi. Quý khách nên truy cập và kiểm tra trang web của chúng tôi thường xuyên để cập nhật những thay đổi gần nhất. Trừ trường hợp có quy định khác, Chính sách quyền riêng tư hiện tại của chúng tôi áp dụng cho tất cả thông tin cá nhân chúng tôi có về quý khách và tài khoản của quý khách. Việc sửa đổi Chính sách này trong mọi trường hợp sẽ không làm giảm mức độ bảo vệ thông tin cá nhân được thu thập trong quá khứ mà không thông báo cho khách hàng liên quan và cho quý khách được quyền lựa chọn.
        </p>
        <h2 className="text-lg font-bold mt-8 mb-4">
          12. Một số thông tin bổ sung cho châu Âu
        </h2>
        <p className="mb-4">
          Chúng tôi cung cấp thêm một số thông tin về quyền riêng tư, việc thu thập và sử dụng thông tin cá nhân của khách hàng tiềm năng và khách hàng hiện tại của chúng tôi tại các quốc gia thuộc Liên Minh Châu Âu.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-semibold">Đơn vị Kiểm Soát Thông Tin Cá Nhân:</span> VINFAST THĂNG LONG Hà Nội (địa chỉ tại Tòa nhà AMDI Group, Số 1 phố Trịnh Văn Bô, Phường Phương Canh, Q. Nam Từ Liêm, TP. Hà Nội) là đơn vị kiểm soát các thông tin cá nhân được thu thập hoặc xử lý theo Chính sách quyền riêng tư này.
          </li>
          <li>
            <span className="font-semibold">Xử lý:</span> Chúng tôi xử lý thông tin cá nhân của quý khách dựa trên một hoặc một số cơ sở pháp lý sau đây:
            <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
              <li>
                Cần thiết để ký kết hợp đồng với quý khách hoặc với tổ chức mà quý khách đại diện, để thực hiện các nghĩa vụ hợp đồng, để cung cấp các Sản Phẩm Của Chúng Tôi, để phản hồi các yêu cầu từ quý khách, hoặc để hỗ trợ khách hàng;
              </li>
              <li>
                Khi chúng tôi có lợi ích hợp pháp, như được mô tả ở Mục 2 của Chính sách quyền riêng tư này;
              </li>
              <li>
                Cần thiết để tuân thủ pháp luật và các nghĩa vụ pháp lý;
              </li>
              <li>
                Để trả lời các yêu cầu hợp pháp; hoặc
              </li>
              <li>
                Dựa trên sự chấp thuận của quý khách.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Quyền của quý khách:</span> Theo quy định của pháp luật, quý khách có các quyền sau:
            <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
              <li>
                hỏi chúng tôi có đang nắm giữ thông tin cá nhân về bản thân hay không và yêu cầu cung cấp bản sao thông tin cá nhân đó và thông tin về cách thức các thông tin đó được xử lý;
              </li>
              <li>
                yêu cầu chỉnh chính thông tin cá nhân không chính xác;
              </li>
              <li>
                yêu cầu xóa thông tin cá nhân còn không cần thiết cho các mục đích xử lý, các thông tin được xử lý dựa trên sự chấp thuận nhưng chấp thuận đó đã được rút lại, hoặc thông tin được xử lý không tuân thủ các quy định của pháp luật hiện hành;
              </li>
              <li>
                yêu cầu chúng tôi tạm dừng xử lý thông tin cá nhân khi hoạt động xử lý không phù hợp;
              </li>
              <li>
                phản đối việc xử lý dữ liệu cá nhân;
              </li>
              <li>
                yêu cầu luân chuyển thông tin cá nhân mà quý khách đã cung cấp cho chúng tôi (không bao gồm thông tin có được từ các thông tin không tự động được một số Sản Phẩm Của Chúng Tôi.) và được thực hiện bằng phương thức tự động; và
              </li>
              <li>
                gửi khiếu nại với cơ quan có thẩm quyền nếu quý khách tin rằng chúng tôi vi phạm quyền riêng tư của mình.
              </li>
            </ul>
          </li>
        </ul>
        <p className="mt-4 mb-4">
          Quý khách có thể thực hiện các quyền truy cập, đính chính, xóa, yêu cầu cấm tạm dừng, phản đối và yêu cầu luân chuyển thông tin bằng cách liên hệ với chúng tôi. Nếu quý khách muốn thực hiện bất kỳ quyền gì nêu trên và quý khách là khách hàng của chúng tôi, vui lòng liên hệ với chúng tôi. Nếu quý khách không phải là khách hàng của chúng tôi, vui lòng liên hệ với chúng tôi theo địa chỉ tại Mục 11 ở trên.
        </p>
        <p className="mb-4">
          Khi quý khách đồng ý cho chúng tôi xử lý thông tin cá nhân của mình cho một mục đích cụ thể, quý khách có thể rút lại sự đồng ý đó bất cứ lúc nào và chúng tôi sẽ ngừng mọi hoạt động xử lý dữ liệu của quý khách cho mục đích đó.
        </p>
        <ul className="list-disc list-inside pl-4 mt-4 space-y-2">
          <li>
            <span className="font-semibold">Chuyển thông tin ra ngoài Liên Minh Châu Âu:</span> Khi chúng tôi chuyển thông tin cá nhân của quý khách được thu thập và lưu trữ tại Liên Minh Châu Âu ra ngoài Liên Minh Châu Âu, chúng tôi sẽ thực hiện theo các điều khoản của Chính sách quyền riêng tư này và pháp luật bảo vệ quyền riêng tư hiện hành. Điều này có thể bao gồm việc chuyển dữ liệu theo các thỏa thuận chuyển dữ liệu có bao gồm Điều khoản hợp đồng tiêu chuẩn được Ủy ban Châu Âu phê duyệt.
          </li>
        </ul>
        <div className="mb-8">
          <h2 className="text-base font-bold mt-8 mb-4">13. Ví dụ về các thông tin được chúng tôi thu thập</h2>
          <p className="text-sm text-gray-600">Thông tin quý khách cung cấp cho chúng tôi</p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>Quý khách chủ yếu cung cấp thông tin cho chúng tôi khi quý khách:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>tìm kiếm, đăng ký hoặc mua Sản Phẩm của VINFAST THĂNG LONG;</li>
            <li>tạo hoặc quản lý tài khoản của quý khách trên hệ thống, ứng dụng của Sản Phẩm của VINFAST THĂNG LONG;</li>
            <li>cấu hình cài đặt của quý khách, cung cấp quyền truy cập dữ liệu cho, hoặc tương tác với Sản Phẩm của VINFAST THĂNG LONG;</li>
            <li>đăng ký hoặc tham dự một sự kiện của VINFAST THĂNG LONG;</li>
            <li>mua hoặc sử dụng nội dung, sản phẩm hoặc dịch vụ từ các nhà cung cấp bên thứ ba thông qua trang web hoặc ứng dụng của VINFAST THĂNG LONG (hoặc các địa điểm tương tự khác do chúng tôi điều hành hoặc cung cấp);</li>
            <li>cung cấp nội dung, sản phẩm hoặc dịch vụ của quý khách trên hoặc thông qua Sản Phẩm của VINFAST THĂNG LONG hoặc trang web hoặc ứng dụng của VINFAST THĂNG LONG (hoặc các địa điểm tương tự khác do chúng tôi điều hành hoặc cung cấp);</li>
            <li>liên lạc với chúng tôi qua tất cả các phương tiện chính thống như tổng đài chăm sóc khách hàng, gọi điện, email: tuantv.0308@gmail.com;</li>
            <li>hoàn thành bảng câu hỏi hoặc các phiếu cung cấp thông tin khác;</li>
            <li>đăng tải nội dung trên các trang web hoặc ứng dụng của VINFAST THĂNG LONG hoặc các địa điểm tương tự.</li>
          </ul>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-relaxed">
          <p>Tùy thuộc vào việc quý khách sử dụng Sản Phẩm của VINFAST THĂNG LONG, quý khách có thể cung cấp cho chúng tôi các thông tin ví dụ như:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>tên, địa chỉ email, địa chỉ, số điện thoại và thông tin liên lạc tương tự khác;</li>
            <li>thông tin thanh toán, bao gồm thông tin thẻ tín dụng và tài khoản ngân hàng;</li>
            <li>thông tin về vị trí của quý khách;</li>
            <li>thông tin về tổ chức của quý khách và đầu mối liên hệ của quý khách, chẳng hạn như những đồng nghiệp hoặc những người trong tổ chức của quý khách;</li>
            <li>tên người dùng, bí danh, vai trò và thông tin xác thực và bảo mật khác;</li>
            <li>nội dung phản hồi, lời chứng thực, câu hỏi, trao đổi với chúng tôi;</li>
            <li>hình ảnh của quý khách (tĩnh, và trong một số trường hợp 3-D), giọng nói và các đặc điểm nhận dạng cá nhân khác của quý khách khi quý khách tham dự một sự kiện của VINFAST THĂNG LONG;</li>
            <li>thông tin liên quan đến danh tính, bao gồm thông tin nhận dạng do chính phủ cấp, quốc tịch;</li>
            <li>thông tin tài chính và doanh nghiệp; và</li>
            <li>Số VAT, mã số thuế TNCN và các định danh thuê khác.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-base font-bold mt-8 mb-4">Thông tin tự động</h2>
          <p className="text-sm text-gray-600">Chúng tôi chủ yếu thu thập thông tin tự động khi quý khách:</p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Hiện diện tại các cơ sở kinh doanh của VINFAST THĂNG LONG;</li>
            <li>Truy cập, tương tác hoặc sử dụng Sản Phẩm của VINFAST THĂNG LONG (kể cả khi quý khách sử dụng máy tính hoặc thiết bị khác để tương tác với Sản Phẩm của VINFAST THĂNG LONG);</li>
            <li>Tải nội dung từ chúng tôi;</li>
            <li>Mở email hoặc nhấp vào liên kết trong email từ chúng tôi; và</li>
            <li>Tương tác hoặc liên lạc với chúng tôi.</li>
          </ul>
        </div>

        <div className="mt-8 mb-8">
          <p className="text-sm text-gray-600">Ví dụ về các thông tin được chúng tôi thu thập tự động:</p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Thông tin mạng và kết nối, như địa chỉ giao thức Internet (IP) được sử dụng để kết nối máy tính (hoặc thiết bị khác) với Internet và thông tin về nhà cung cấp dịch vụ Internet của quý khách;</li>
            <li>Thông tin về máy tính và thiết bị, chẳng hạn như thiết bị, ứng dụng, hoặc loại và phiên bản trình duyệt, loại và phiên bản của plug-in của trình duyệt, hệ điều hành hoặc cài đặt múi giờ;</li>
            <li>Vị trí của thiết bị hoặc máy tính của quý khách;</li>
            <li>Thông tin xác thực và bảo mật;</li>
            <li>Thông tin tương tác nội dung, chẳng hạn như nội dung được tải xuống, và chi tiết phát lại, bao gồm thời lượng và số lượng luồng và tải xuống đồng thời;</li>
            <li>Các số liệu Sản Phẩm của VINFAST THĂNG LONG, chẳng hạn như việc sử dụng sản phẩm, lỗi kỹ thuật, báo cáo, tùy chọn cài đặt của quý khách, thông tin sao lưu backup, API calls, và nhật ký khác;</li>
            <li>Nội dung quý khách đã xem hoặc tìm kiếm, thời gian phản hồi của trang web, ứng dụng, và thông tin tương tác (như cuộn, nhấp chuột);</li>
            <li>Địa chỉ email và số điện thoại được sử dụng để liên hệ với chúng tôi; và</li>
            <li>Thông tin nhận dạng và thông tin có trong cookie.</li>
          </ul>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="text-base font-bold mt-8 mb-4">Thông tin từ các nguồn khác</h2>
          <p className="text-sm text-gray-600">Ví dụ về các thông tin chúng tôi có được từ các nguồn khác:</p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Thông tin tiếp thị, tạo doanh số và tuyển dụng, bao gồm tên, địa chỉ email, địa chỉ thực, số điện thoại và thông tin liên hệ tương tự khác;</li>
            <li>Thông tin về đăng ký, mua, hỗ trợ hoặc thông tin về tương tác của quý khách với các sản phẩm, dịch vụ của chúng tôi hoặc với các sản phẩm của bên thứ ba liên quan đến Sản Phẩm của VINFAST THĂNG LONG;</li>
            <li>Kết quả quá tìm kiếm và liên kết, bao gồm các danh sách sản phẩm, dịch vụ được trả tiền (như Liên kết được Tài trợ); và</li>
            <li>Thông tin lịch sử tín dụng.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}