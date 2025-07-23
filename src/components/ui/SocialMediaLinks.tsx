"use client"

import { Facebook, Twitter, Mail, PinIcon as Pinterest, Linkedin } from "lucide-react"

export default function SocialMediaLinks() {
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

  return (
    <>
      <div className="w-9 h-[3px] bg-gray-200 rounded-full mx-auto mt-10" />
      <div className="flex items-center justify-center gap-3 pt-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon
          return (
            <div key={social.name} className="relative group">
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 bg-white text-gray-400 transition-colors duration-200 ${social.hoverColor} hover:text-white`}
                onClick={() => window.open(social.href, "_blank")}
                aria-label={social.name}
              >
                <IconComponent className="w-5 h-5" />
              </button>

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {social.name}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
