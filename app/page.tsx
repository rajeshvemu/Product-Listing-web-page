import ProductGrid from "@/components/product-grid"
import FilterSidebar from "@/components/filter-sidebar"
import { Suspense } from "react"
import ProductSkeleton from "@/components/product-skeleton"

export default function ProductListingPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Collection</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <FilterSidebar />
        </div>

        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing 1-20 of 100 products</p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm">
                Sort by:
              </label>
              <select id="sort" className="border rounded-md p-2 text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <Suspense fallback={<ProductSkeleton count={12} />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
