'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Category = 'Music' | 'Live Events' | 'Events' | 'Television' | 'Music Videos' | 'Documentary' | 'Photography'

interface Product {
  title: string
  link: string
  thumbnail: string
  category: Category
  description?: string
}

const defaultImages: Record<Category, string> = {
  'Music': "/images/alicia2.jpg",
  'Live Events': "/images/Screen+Shot+2024-03-08+at+12.13.06+PM.jpg",
  'Events': "/images/afropunk2015.jpeg",
  'Television': "/images/voice2.jpg",
  'Music Videos': "/images/image-cache.jpeg",
  'Documentary': "/images/bibleprevie.jpg",
  'Photography': "/images/afro1.jpeg"
}

const rawProducts = [
  {
    title: "Alicia Keys - HERE",
    link: "#",
    thumbnail: "/images/alicia-keys-here-album-cover-paola-kudacki.jpeg",
    category: "Music" as Category
  },
  {
    title: "UEFA Champions League - Dua Lipa",
    link: "#",
    thumbnail: "/images/Screen+Shot+2024-03-13+at+8.35.30+AM.jpg",
    category: "Live Events" as Category
  },
  {
    title: "Afropunk Festival",
    link: "#",
    thumbnail: "/images/afropunk2015.jpeg",
    category: "Events" as Category
  },
  {
    title: "The Voice",
    link: "#",
    thumbnail: "/images/voice2.jpg",
    category: "Television" as Category
  },
  {
    title: "Missy Elliott",
    link: "#",
    thumbnail: "/images/image-cache.jpeg",
    category: "Music Videos" as Category
  },
  {
    title: "Red Hot + Cool",
    link: "#",
    thumbnail: "/images/bibleprevie.jpg",
    category: "Documentary" as Category
  },
  {
    title: "Afropunk Moments",
    link: "#",
    thumbnail: "/images/afro1.jpeg",
    category: "Photography" as Category
  },
  {
    title: "UEFA - Imagine Dragons",
    link: "#",
    thumbnail: "/images/Screen+Shot+2024-03-08+at+12.13.06+PM.jpg",
    category: "Live Events" as Category
  },
  {
    title: "The Roots & Roy Ayers",
    link: "#",
    thumbnail: "/images/image-w856.jpg",
    category: "Music" as Category
  },
  {
    title: "Cultural Documentation",
    link: "#",
    thumbnail: "/images/afro2.jpeg",
    category: "Photography" as Category
  },
  {
    title: "Behind The Scenes",
    link: "#",
    thumbnail: "/images/sebastian-earle.jpg",
    category: "Documentary" as Category
  },
  {
    title: "Alicia Keys - In Common",
    link: "#",
    thumbnail: "/images/thumbnailearlealicia.jpeg",
    category: "Music" as Category
  },
  {
    title: "UEFA Opening Ceremony",
    link: "#",
    thumbnail: "/images/Screen+Shot+2024-03-08+at+12.13.06+PM.jpg",
    category: "Live Events" as Category
  },
  {
    title: "The Voice Performances",
    link: "#",
    thumbnail: "/images/voice4.png",
    category: "Television" as Category
  },
  {
    title: "Afropunk Culture",
    link: "#",
    thumbnail: "/images/afro4.jpeg",
    category: "Photography" as Category
  }
]

const products: Product[] = rawProducts.map((product) => ({
  ...product,
  thumbnail: product.thumbnail || defaultImages[product.category] || defaultImages.Documentary,
  description: `${product.category} • Creative Direction`,
}))

export function ParallaxPortfolio() {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Link href={product.link} className="block">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-300">{product.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ParallaxPortfolio
