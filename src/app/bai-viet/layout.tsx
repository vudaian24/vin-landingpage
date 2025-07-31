import { articles } from "@/data/mock-data";
import Link from "next/link";
import { Facebook, Twitter, Mail, PinIcon as Pinterest, Linkedin } from "lucide-react"
import SocialMediaLinks from "@/components/ui/SocialMediaLinks";

interface LayoutPostProps {
  children: React.ReactNode;
}

export default function LayoutPost({ children }: LayoutPostProps) {
  return (
    <div className="w-full flex justify-center overflow-x-hidden">
      <div className="max-w-[1080px] w-full grid md:grid-cols-[1fr_240px] gap-14 px-4 py-[30px]">
        <div className="shadow-custom-card w-full p-6">
          {children}
          <SocialMediaLinks />
        </div>

        {/* Sidebar */}
        <div>
          <h3 className="text-[26px] font-bold mb-[10px] text-[#3c3c3c]">Bài viết mới</h3>
          <ul className="space-y-2">
            {articles.map((article, index) => (
              <li key={index}>
                <Link
                  href={article.link}
                  className="text-[#1464f4] text-sm hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}