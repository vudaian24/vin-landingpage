import VideoModal from "@/components/pin-va-tram-sac/VideoModal";
import { articles } from "@/data/mock-data";
import { Facebook, Music2, Youtube } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pin và trạm sạc",
};

export default function BatteryAndChargingStations() {
  return (
    <div className="w-full">
      <div
        className="w-full min-h-[550px] bg-cover bg-center text-white flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/vinfast-pin-va-sac-bg.jpg')" }}
      >
        <div className="max-w-[1300px] w-full px-[10px] font-bold text-white">
          <p className="text-[14px]">PIN VÀ TRẠM SẠC XE ĐIỆN</p>
          <h1 className="text-[70px] !text-white">VINFAST</h1>
        </div>
        <VideoModal />
      </div>
      <FollowIcons />

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-[1080px] mx-auto gap-[30px] px-4 pb-[60px]">
        {articles.map((article, index) => (
          <Link key={index} href={article.link}>
            <div key={index} className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
              <div className="relative w-[300px] h-[200px] md:w-[220px] lg:w-[310px] md:h-[160px] lg:h-[200px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {article.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group w-10 h-10 cursor-pointer rounded-full border-2 border-white flex items-center justify-center transition-colors duration-300 bg-transparent bg-opacity-40 hover:bg-[#1464f4] hover:border-[#1464f4]"> {/* Added bg-black opacity for better visibility */}
                      <svg
                        className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              <div className="block w-full text-center py-4 px-2">
                <h3 className="text-[17px] text-[#333333] font-medium hover:text-[#00adef] transition-colors duration-300">
                  {article.title}
                  <div className="mx-auto mt-2 w-[30px] h-[2px] bg-[rgba(0,0,0,0.1)]"></div>
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const FacebookIcon = () => (
  <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg>
);

const TikTokIcon = () => (
  <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok_fill</title> <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Brand" transform="translate(-720.000000, -48.000000)"> <g id="tiktok_fill" transform="translate(720.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"> </path> <path d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z" id="路径" fill="#ffffff"> </path> </g> </g> </g> </g></svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffffff"
    viewBox="0 0 24 24"
    width="30"
    height="30"
  >
    <path d="M23.498 6.186a2.894 2.894 0 0 0-2.04-2.043C19.579 3.5 12 3.5 12 3.5s-7.579 0-9.458.643A2.894 2.894 0 0 0 .502 6.186C0 8.065 0 12 0 12s0 3.935.502 5.814a2.894 2.894 0 0 0 2.04 2.043C4.421 20.5 12 20.5 12 20.5s7.579 0 9.458-.643a2.894 2.894 0 0 0 2.04-2.043C24 15.935 24 12 24 12s0-3.935-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

const FollowIcons = () => {
  return (
    <div className="flex items-center gap-3 max-w-[1080px] mx-auto py-14 px-4">
      <Link
        href="#"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Theo dõi trên Facebook"
        title="Theo dõi trên Facebook"
        className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3b5998] hover:opacity-80 transition"
      >
        <FacebookIcon />
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Theo dõi trên TikTok"
        title="Theo dõi trên TikTok"
        className="w-16 h-16 flex items-center justify-center rounded-full bg-black hover:opacity-80 transition"
      >
        <TikTokIcon />
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Theo dõi trên YouTube"
        title="Theo dõi trên YouTube"
        className="w-16 h-16 flex items-center justify-center rounded-full bg-[#cc181e] hover:opacity-80 transition"
      >
        <YouTubeIcon />
      </Link>
    </div>
  );
}