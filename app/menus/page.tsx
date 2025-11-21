"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const dishCategories = [
  { id: "all", label: "All Dishes" },
  { id: "beans", label: "Beans Dishes" },
  { id: "fish", label: "Fish Dishes" },
  { id: "meat", label: "Meat Dishes" },
  { id: "pastries", label: "Pastries" },
  { id: "rice", label: "Rice Dishes" },
  { id: "soup", label: "Soup Dishes" },
  { id: "special", label: "Special Dishes" },
  { id: "swallow", label: "Swallow Dishes" },
  { id: "yam", label: "Yam Dishes" },
]

const allergenInfo = [{ id: "allergen-chart", label: "Product Allergen Chart" }]

const allProducts = [
  {
    id: 1,
    name: "Jollof Rice",
    price: "35.00",
    category: "rice",
    image: "/jollof-rice-african-dish.jpg",
  },
  {
    id: 2,
    name: "Small Meat Pie",
    price: "32.00",
    category: "pastries",
    image: "/meat-pie-pastry.jpg",
  },
  {
    id: 3,
    name: "Moimoi (Plastic)",
    price: "20.00",
    category: "special",
    image: "/moimoi-nigerian-food.jpg",
  },
  {
    id: 4,
    name: "Big Meat Pie",
    price: "32.00",
    category: "pastries",
    image: "/large-meat-pie.jpg",
  },
  {
    id: 5,
    name: "Beans & Plantain",
    price: "28.00",
    category: "beans",
    image: "/beans-plantain-african.jpg",
  },
  {
    id: 6,
    name: "Egusi Soup with Fufu",
    price: "25.00",
    category: "soup",
    image: "/egusi-soup-fufu.jpg",
  },
]

export default function MenusPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-background rounded-3xl m-6">
        <div className="flex gap-8 p-8">
          {/* Sidebar */}
          <aside className="w-48 flex-shrink-0">
            {/* Menu List Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">Menu List</h2>

              {/* Dishes Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Dishes</h3>
                <ul className="space-y-2">
                  {dishCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`text-sm w-full text-left px-3 py-1 rounded transition-colors ${
                          selectedCategory === category.id
                            ? "text-primary font-medium bg-primary/10"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Allergen Information */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Allergen Information</h3>
                <ul className="space-y-2">
                  {allergenInfo.map((item) => (
                    <li key={item.id}>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* All Products Section */}
            {selectedCategory === "all" && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-foreground">All Products</h2>
                  <Link href="#" className="text-primary text-sm font-medium hover:underline">
                    View all
                  </Link>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-1 text-sm">{product.name}</h3>
                        <p className="text-primary font-semibold mb-4">£{product.price}</p>
                        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category Specific Section */}
            {selectedCategory !== "all" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {dishCategories.find((c) => c.id === selectedCategory)?.label}
                  </h2>
                  <Link href="#" className="text-primary text-sm font-medium hover:underline">
                    View all
                  </Link>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-1 text-sm">{product.name}</h3>
                        <p className="text-primary font-semibold mb-4">£{product.price}</p>
                        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
