"use client"

import { Message } from "@/lib/constants"
import Image from "next/image"
import { useState } from "react"

const initialMessages: Message[] = [
  {
    id: "1",
    type: "support",
    name: "Hỗ trợ viên",
    avatar: "/images/avatar.jpg",
    content: "Chào mừng bạn đã đến với trang web. Nếu cần thông tin hãy chat với mình nhé.",
    timestamp: "23:50",
  },
  {
    id: "2",
    type: "support",
    name: "Hỗ trợ viên",
    avatar: "/images/avatar.jpg",
    content: "Bạn đang quan tâm xe gì?",
    timestamp: "23:51",
  },
]


export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [message, setMessage] = useState("")

  const handleSend = () => {
    const content = message.trim()
    if (!content) return

    const newMessage: Message = {
      id: crypto.randomUUID(),
      type: "user",
      name: "Bạn",
      avatar: "/images/user-avatar.png",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage("")
  }

  return (
    <div className={`fixed bottom-0 chat-content-animate right-3 ${!isCollapsed ? "w-24" : "w-80"} shadow-lg border border-gray-300 bg-white text-sm font-sans overflow-hidden`}>
      {/* Header */}
      <div className={`bg-gray-800 text-white ${!isCollapsed ? "px-1" : "px-4"} py-1 flex items-center justify-between`}>
        <h1 className="text-base font-medium !text-white">Hỗ trợ</h1>
        <button
          type="button"
          aria-label="Toggle chat"
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="text-white hover:bg-gray-700 ml-1 rounded cusor-pointer"
        >
          <svg className="h-5 w-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isCollapsed && (
        <div className="flex flex-col">
          <div className="bg-green-50 px-4 py-1 border-b">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-medium text-sm">Tư vấn trực tuyến</span>
            </div>
            <div className="text-gray-600 text-sm mt-1">Chuyên viên bán hàng</div>
          </div>

          <div className="p-2 space-y-3 min-h-[300px] bg-white">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 relative ${msg.type === "support" ? "" : "p-1"}`}>
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    className="object-cover" // Giữ nguyên object-cover
                    fill // Sử dụng fill để ảnh lấp đầy container
                    sizes="32px" // Kích thước cố định 8x8 Tailwind class tương đương 32x32px
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`${msg.type === "support" ? "text-gray-800" : "text-blue-600"} font-medium text-sm`}>
                      {msg.name}
                    </span>
                    <span className="text-gray-400 text-xs">{msg.timestamp}</span>
                  </div>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm max-w-xs ${msg.type === "support" ? "bg-gray-100" : "bg-blue-50"
                      }`}
                  >
                    <p className="text-gray-800">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input gửi tin nhắn */}
          <div className="border-t bg-gray-50 p-1">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nhập nội dung..."
                className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                type="button"
                aria-label="Send message"
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
