import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { Heart } from "lucide-react"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <Link href={`/product/${product.id}`}>
          <div className="relative h-64 w-full bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-4"
            />
          </div>
        </Link>
        <button
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
            <Link href={`/product/${product.id}`}>{product.title}</Link>
          </h3>
        </div>

        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.category}</p>

        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
