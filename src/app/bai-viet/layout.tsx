import { articles } from "@/data/mock-data";
import Link from "next/link";
import { Facebook, Twitter, Mail, PinIcon as Pinterest, Linkedin } from "lucide-react"
import SocialMediaLinks from "@/components/ui/SocialMediaLinks";

interface LayoutPostProps {
  children: React.ReactNode;
}

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    hoverColor: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    hoverColor: "hover:bg-sky-500 hover:border-sky-500",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@example.com",
    hoverColor: "hover:bg-gray-600 hover:border-gray-600",
  },
  {
    name: "Pinterest",
    icon: Pinterest,
    href: "https://pinterest.com",
    hoverColor: "hover:bg-red-600 hover:border-red-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    hoverColor: "hover:bg-blue-700 hover:border-blue-700",
  },
]

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