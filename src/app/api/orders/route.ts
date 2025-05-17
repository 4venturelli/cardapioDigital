import { NextResponse } from 'next/server'

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  notes: string
}

interface Order {
  tableNumber: string
  items: OrderItem[]
  total: number
  createdAt: string
}

// This would be replaced with actual database storage
let orders: Order[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { tableNumber, items } = body

    if (!tableNumber || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid order data' },
        { status: 400 }
      )
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const order: Order = {
      tableNumber,
      items,
      total,
      createdAt: new Date().toISOString(),
    }

    // TODO: Integrate with Gourmet Droid API
    // This is where we would send the order to the Gourmet Droid system
    // For now, we'll just store it in memory
    orders.push(order)

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // This endpoint would be used by the kitchen display system
  return NextResponse.json(orders)
} 