const dishes = [
  { name: "Beans Dishes", image: "/beans-african-dish.jpg" },
  { name: "Fish Dishes", image: "/fish-african-dish.jpg" },
  { name: "Meat Dishes", image: "/meat-african-dish.jpg" },
  { name: "Pastries", image: "/african-pastries.jpg" },
  { name: "Rice Dishes", image: "/jollof-rice-african.jpg" },
  { name: "Soup Dishes", image: "/african-soup.jpg" },
  { name: "Swallow Dishes", image: "/swallow-fufu-african.jpg" },
  { name: "Yam Dishes", image: "/yam-african-dish.jpg" },
]

export function DishesSection() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Available Dishes</h2>
          <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div key={dish.name} className="text-center cursor-pointer hover:opacity-80 transition-opacity">
              <div className="bg-muted rounded-lg overflow-hidden mb-3 aspect-square">
                <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-foreground font-medium text-sm">{dish.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
