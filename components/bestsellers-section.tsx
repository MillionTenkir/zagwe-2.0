const products = [
  { name: "Jollof Rice", price: "From £35.00", image: "/jollof-rice-dish.jpg" },
  { name: "Moimoi (Plastic)", price: "£20.00", image: "/moimoi-african-dish.jpg" },
  { name: "Moimoi leaf", price: "£36.67", image: "/moimoi-leaf-african.jpg" },
  { name: "Yam Porridge", price: "From £48.33", image: "/yam-porridge-african.jpg" },
]

export function BestsellersSection() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Bestselling Products</h2>
          <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-muted aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-primary font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
