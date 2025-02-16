'use client'

import { useState } from 'react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { cn } from '@/lib/utils'

interface TeaProduct {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  weight: string
  origin: string
  type: string
}

const teaProducts: TeaProduct[] = [
  {
    id: 'earles-signature-blend',
    name: "Earle's Signature Blend",
    description: "A harmonious blend of premium black teas with subtle notes of bergamot and jasmine, crafted to inspire creativity and mindfulness.",
    price: 24.99,
    imageUrl: "/images/afro1.jpeg",
    weight: "100g",
    origin: "Blend of Ceylon and Assam",
    type: "Black Tea Blend"
  },
  {
    id: 'creative-focus',
    name: "Creative Focus",
    description: "An energizing blend of green tea and herbs designed to enhance mental clarity and creative flow.",
    price: 29.99,
    imageUrl: "/images/afro2.jpeg",
    weight: "80g",
    origin: "Japanese Sencha base",
    type: "Green Tea Blend"
  },
  {
    id: 'directors-chai',
    name: "Director's Chai",
    description: "A bold and spicy chai blend that embodies the energy and passion of creative direction.",
    price: 27.99,
    imageUrl: "/images/afro3.jpeg",
    weight: "100g",
    origin: "Indian Masala Chai",
    type: "Spiced Black Tea"
  }
]

export const TeaShop = () => {
  const [selectedProduct, setSelectedProduct] = useState<TeaProduct | null>(null)
  const [quantity, setQuantity] = useState(1)

  const handleBuyNow = () => {
    // Integrate with your preferred payment processor
    window.open('https://buy.stripe.com/test_yourproductlink', '_blank')
  }

  return (
    <section id="shop" className="py-20 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            EARLE&apos;S TEA COLLECTION
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the artistry of tea curation. Each blend is carefully crafted to enhance your creative journey,
            inspired by Earle&apos;s philosophy of mindful creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teaProducts.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-900 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-[4/3] relative">
                <OptimizedImage
                  src={product.imageUrl}
                  alt={product.name}
                  priority={product.id === 'earles-signature-blend'}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">${product.price}</span>
                  <span className="text-gray-400 text-sm">{product.weight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-neutral-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <OptimizedImage
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                  />
                </div>
                <div className="space-y-6">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div>
                    <h3 className="text-2xl text-white mb-2">{selectedProduct.name}</h3>
                    <p className="text-gray-400">{selectedProduct.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-400">
                      <span>Origin</span>
                      <span>{selectedProduct.origin}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Type</span>
                      <span>{selectedProduct.type}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Weight</span>
                      <span>{selectedProduct.weight}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border border-gray-600 text-white flex items-center justify-center hover:bg-gray-800"
                      >
                        -
                      </button>
                      <span className="text-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-600 text-white flex items-center justify-center hover:bg-gray-800"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-white text-xl font-medium">
                      ${(selectedProduct.price * quantity).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
