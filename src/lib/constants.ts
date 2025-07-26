export type MessageType = "user" | "support"

export interface Message {
  id: string
  type: MessageType
  name: string
  avatar: string
  content: string
  timestamp: string
}
