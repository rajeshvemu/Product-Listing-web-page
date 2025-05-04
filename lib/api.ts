import type { Product } from "./types"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch product")
    }

    return response.json()
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    return null
  }
}
