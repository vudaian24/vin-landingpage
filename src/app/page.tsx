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
  return (
    <div>
      <HeroSlider />
      <CarList />
      <VinFastGreen />
      <NewsSection />
    </div>
  )
}
