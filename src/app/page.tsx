import CarList from '@/components/home/CarList';
import HeroSlider from '@/components/home/HeroSlider';
import NewsSection from '@/components/home/NewsSection';
import VinFastGreen from '@/components/home/VinFastGreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VinFast Thăng Long – Đại lý 3S Ô tô Điện VinFast chính hãng tại Hà Nội",
  description:
    "VinFast Thăng Long (Showroom 68 Trịnh Văn Bô, Hà Nội) là đại lý ủy quyền chính thức phân phối các mẫu ô tô điện VinFast: VF 3, VF 5, VF 6, VF 7, VF 8, VF 9 và dịch vụ thuê xe VinFast Green. Ưu đãi hấp dẫn, hỗ trợ trả góp, bảo hành tận nơi.",
  keywords: [
    "VinFast Thăng Long",
    "xe ô tô điện VinFast",
    "đại lý VinFast chính hãng",
    "VinFast VF 3",
    "VF5 Plus",
    "VF6",
    "VF7",
    "VF8",
    "VF9",
    "VinFast Green",
    "thuê xe điện VinFast",
    "mua xe điện VinFast tại Hà Nội"
  ],
  openGraph: {
    title: "VinFast Thăng Long – Đại lý 3S Ô tô Điện VinFast chính hãng tại Hà Nội",
    description:
      "Khám phá các mẫu ô tô điện VinFast mới nhất tại đại lý VinFast Thăng Long. Hỗ trợ lái thử, trả góp, dịch vụ VinFast Green – giá tốt, chính sách minh bạch.",
    url: "https://vinfastthanglong3s.com.vn/",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/images/slider-home/banner-vinfast-vf8-24726-pc-08-1536x496.jpg",
        width: 1536,
        height: 496,
        alt: "Banner VinFast VF8",
      },
      {
        url: "/images/slider-home/vinfast-vf9-241212-banner-pc01-2048x661.jpg",
        width: 2048,
        height: 661,
        alt: "Banner VinFast VF9",
      },
    ],
  },
  alternates: {
    canonical: "https://vinfastthanglong3s.com.vn/",
  },
};


export default function Home() {
  const images = [
    {
      src: '/images/slider-home/banner-vinfast-vf8-24726-pc-08-1536x496.jpg',
      alt: 'VinFast Background',
    },
    {
      src: '/images/slider-home/vinfast-vf9-241212-banner-pc01-2048x661.jpg',
      alt: 'Banner VF8',
    },
  ]

  return (
    <div>
      <HeroSlider images={images} />
      <CarList />
      <VinFastGreen />
      <NewsSection />
    </div>
  )
}
