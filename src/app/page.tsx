import CarList from '@/components/home/CarList';
import HeroSlider from '@/components/home/HeroSlider';
import NewsSection from '@/components/home/NewsSection';
import VinFastGreen from '@/components/home/VinFastGreen';
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: "VinFast Thăng Long",
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
