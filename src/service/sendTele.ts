'use server'

export async function sendTelegramMessage(formValues: {
  name: string
  phone: string
  car: string
  pay_method: string
}) {
  const token = process.env.TELEGRAM_SECRET
  const chatId = '6826964067'

  const message = `
🧾 *Thông tin khách hàng*:
👤 Họ tên: ${formValues.name}
📞 SĐT: ${formValues.phone}
🚗 Xe quan tâm: ${formValues.car}
💳 Hình thức thanh toán: ${formValues.pay_method}
  `

  const res = await fetch(`https://api.telegram.org/${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  })

  if (!res.ok) {
    throw new Error('Gửi Telegram thất bại')
  }

  return { success: true }
}
