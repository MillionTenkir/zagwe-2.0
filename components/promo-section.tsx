import { Button } from "@/components/ui/button"

export function PromoSection() {
  return (
    <section className="py-8 px-6 bg-background">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">ZAGWE</h1>
        <p className="text-foreground text-sm leading-relaxed max-w-3xl mx-auto">
          TO BE THE PIONEERS OF HIGH QUALITY, AFFORDABLE AND AUTHENTIC AFRICAN CUISINE, PROMOTING THE TRUE CULTURE OF
          AFRICA
        </p>
      </div>

      {/* Promo Banner */}
      <div className="bg-[#4ECDC4] rounded-lg overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 items-center p-8 gap-8">
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Enjoy
              <br />
              <span className="text-white">Student Special!</span>
            </h2>
            <div className="bg-red-500 text-white inline-block px-6 py-2 rounded-full text-2xl font-bold mb-4">
              20% OFF
            </div>
            <p className="text-white mb-2">
              Our delicious <span className="font-bold">READY MEALS</span>
            </p>
            <p className="text-white mb-6">
              when you order with your <span className="font-bold">STUDENTBEANS</span> account.
            </p>
            <p className="text-white text-sm font-bold mb-4">
              From tasty Meat Pies to delicious Jollof Rice and Chicken – fuel your study sessions the right way.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full">
              Click to start saving today!
            </Button>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src="/african-ready-meals-food-packages.jpg"
              alt="Ready meals"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
