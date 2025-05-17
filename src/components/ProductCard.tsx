import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  onAddToCart: (id: string, quantity: number, notes: string) => void
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  onAddToCart
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState('')
  const [showOptions, setShowOptions] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(id, quantity, notes)
    setQuantity(1)
    setNotes('')
    setShowOptions(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="relative h-48 bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          🍖
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-red-600 font-bold">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price)}
          </span>
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Adicionar
          </button>
        </div>

        {showOptions && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Quantidade:</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            {category === 'espetos' && (
              <div>
                <label className="text-sm font-medium block mb-2">
                  Ponto da carne:
                </label>
                <select
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                >
                  <option value="">Selecione o ponto</option>
                  <option value="Mal passado">Mal passado</option>
                  <option value="Ao ponto">Ao ponto</option>
                  <option value="Bem passado">Bem passado</option>
                </select>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium"
            >
              Confirmar
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 