import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Eforiro Assorted",
    weight: "0.7 kg",
    price: "£8.00",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 2,
    name: "Ayamase (Hot Pepper Sauce)",
    weight: "0.3 kg",
    price: "£4.99",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 3,
    name: "Jollof Rice & Chicken",
    weight: "0.6 kg",
    price: "£7.00",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 4,
    name: "Mild Stew Assorted",
    weight: "0.7 kg",
    price: "£8.50",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 5,
    name: "Egusi Soup & Assorted Meat",
    weight: "0.7 kg",
    price: "£8.50",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 6,
    name: "Mixed Okro Soup Assorted",
    weight: "0.7 kg",
    price: "£8.50",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 7,
    name: "Fried Rice & Chicken",
    weight: "0.6 kg",
    price: "£7.50",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
  {
    id: 8,
    name: "Beans & Plantain",
    weight: "0.5 kg",
    price: "£6.00",
    image: "/packed food.avif",
    category: "Ready Meal",
  },
]

export default function ReadyMealsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Filter and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-6 mb-12">
          <span className="text-sm text-muted-foreground">24 results</span>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Filter by:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="meat">Meat</SelectItem>
                <SelectItem value="fish">Fish</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Sort by:</span>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-muted/30 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1 gap-1">
                <span className="text-sm text-muted-foreground">{product.weight}</span>
                
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-medium text-base leading-snug min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  <span className="font-semibold text-lg whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
                
                <div className="mt-auto">
                  <Button 
                    className="w-full rounded-full bg-[#005f56] hover:bg-[#004d46] text-white font-medium h-10"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
