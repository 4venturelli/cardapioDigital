'use client'

import { useState } from 'react'
import Link from 'next/link'
import { menuItems } from '@/data/menu'
import ProductCard from '@/components/ProductCard'
import Cart from '@/components/Cart'
import { useCartStore } from '@/store/cart'

export default function Home() {
  const { items, addItem, removeItem, updateQuantity, isOpen, openCart, closeCart } = useCartStore()
  const [activeCategory, setActiveCategory] = useState('espetos')

  const categories = [
    { id: 'espetos', name: 'Espetos' },
    { id: 'porcoes', name: 'Porções' },
    { id: 'jantinhas', name: 'Jantinhas' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'sobremesas', name: 'Sobremesas' },
  ]

  const handleSubmitOrder = async (tableNumber: string) => {
    // TODO: Implement integration with Gourmet Droid API
    console.log('Submitting order for table', tableNumber, 'with items:', items)
    alert(`Pedido enviado para a mesa ${tableNumber}!`)
    useCartStore.getState().clearCart()
    closeCart()
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Espetaria</h1>
          <p className="text-sm">Sabor e qualidade em cada espeto</p>
        </div>
      </header>

      <nav className="bg-gray-100 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-red-600 font-medium whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'border-b-2 border-red-600'
                    : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className={activeCategory === category.id ? 'block' : 'hidden'}
            >
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <ProductCard
                      key={item.id}
                      {...item}
                      onAddToCart={(id, quantity, notes) =>
                        addItem({ ...item, notes }, quantity)
                      }
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={openCart}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium"
          >
            Ver Carrinho ({items.length} itens)
          </button>
        </div>
      </div>

      <Cart
        items={items}
        onRemoveItem={removeItem}
        onUpdateQuantity={updateQuantity}
        onSubmitOrder={handleSubmitOrder}
        isOpen={isOpen}
        onClose={closeCart}
      />
    </main>
  )
}
