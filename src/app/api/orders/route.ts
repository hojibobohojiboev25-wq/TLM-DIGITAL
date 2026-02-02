import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

const orderSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectDescription: z.string().min(10),
  budget: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = orderSchema.parse(body)

    // Save order to database
    const order = await prisma.order.create({
      data: validatedData,
    })

    // Send to Telegram (will implement later)
    try {
      await sendToTelegram(validatedData)
    } catch (telegramError) {
      console.error('Failed to send to Telegram:', telegramError)
      // Don't fail the request if Telegram fails
    }

    return NextResponse.json(
      { success: true, order: { id: order.id } },
      { status: 201 }
    )
  } catch (error) {
    console.error('Order creation failed:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid data provided' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function sendToTelegram(data: z.infer<typeof orderSchema>) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    throw new Error('Telegram configuration missing')
  }

  const message = `
🆕 New Order Received!

👤 Name: ${data.name}
📧 Email: ${data.email}
💰 Budget: ${data.budget}

📝 Project Description:
${data.projectDescription}
  `.trim()

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    }
  )

  if (!response.ok) {
    throw new Error('Failed to send Telegram message')
  }
}