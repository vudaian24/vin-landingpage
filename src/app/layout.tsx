import type { Metadata } from "next"
import { Noto_Sans } from 'next/font/google'
import "../style/globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackToTop from "@/components/ui/BackToTop"
import PromotionSection from "@/components/layout/PromotionSection"
import FloatingContact from "@/components/layout/FloatingContact"
import ContactForm from "@/components/layout/ContactForm"
import { headers } from "next/headers"
import { FacebookPixelScript } from "@/components/ui/facebook-pixel-script"

const fontSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export async function generateMetadata() {
  const heads = await headers()
  return {
    title: "VinFast Thăng Long – Đại lý 3S Ô tô Điện VinFast chính hãng tại Hà Nội",
    description: "VinFast Thăng Long (Showroom Số 68 Trịnh Văn Bô, quận Nam Từ Liêm, Hà Nội) là đại lý 3S chính hãng phân phối các mẫu xe điện VinFast (VF 3, VF 5, VF 6, VF 7, VF 8, VF 9, e34) cùng dịch vụ bảo dưỡng, bảo hành, lái thử chuyên nghiệp. Liên hệ ngay để nhận báo giá và ưu đãi mới nhất.",
    keywords: "VinFast Thăng Long, đại lý VinFast Hà Nội, xe điện VinFast, VF3, VF5, VF6, VF7, VF8, VF9, VF e34, showroom VinFast, lái thử xe VinFast, bảo dưỡng VinFast",
    openGraph: {
      title: "VinFast Thăng Long – Đại lý 3S Ô tô Điện VinFast chính hãng tại Hà Nội",
      description: "Showroom VinFast Thăng Long – đại lý chính hãng tại Hà Nội phân phối đầy đủ dòng ô tô điện VinFast, dịch vụ chuyên nghiệp: lái thử, bảo dưỡng, chính sách bảo hành, báo giá ưu đãi.",
      images: ['/images/og-chatbot-mockup.jpg'],
    },
    metadataBase: new URL(`https://${heads.get('host')}`),
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const facebookPixelId = process.env.FACEBOOK_PIXEL_ID || ''

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="aIXH3AZmTELlta_3WREWmdvuhGQvactgPT5f2JRhSmM" />
        <FacebookPixelScript pixelId={facebookPixelId} />
      </head>
      <body
        className={cn(
          'min-h-screen scroll-smooth antialiased font-sans bg-background text-foreground',
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-20">{children}</main>
        <PromotionSection />
        <Footer />
        <BackToTop />
        <FloatingContact />
        <ContactForm />
      </body>
    </html>
  );
}
