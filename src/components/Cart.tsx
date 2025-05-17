import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  notes: string
}

interface CartProps {
  items: CartItem[]
  onRemoveItem: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
  onSubmitOrder: (tableNumber: string) => void
  isOpen: boolean
  onClose: () => void
}

export default function Cart({
  items,
  onRemoveItem,
  onUpdateQuantity,
  onSubmitOrder,
  isOpen,
  onClose,
}: CartProps) {
  const [tableNumber, setTableNumber] = useState('')

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!tableNumber) return
    onSubmitOrder(tableNumber)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Seu Pedido</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-gray-500">
                Seu carrinho está vazio
              </p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start border-b pb-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      {item.notes && (
                        <p className="text-sm text-gray-600">{item.notes}</p>
                      )}
                      <div className="mt-2 flex items-center space-x-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              Math.max(0, item.quantity - 1)
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center border rounded-full"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-600 text-sm mt-1"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total)}
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="table"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Número da Mesa
                </label>
                <input
                  type="text"
                  id="table"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  placeholder="Digite o número da mesa"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={items.length === 0 || !tableNumber}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300"
              >
                Confirmar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 