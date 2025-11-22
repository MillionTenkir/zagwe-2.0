"use client"

import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/african-ready-meals-food-packages.jpg",
    title: (
      <>
        Enjoy <br /> <span className="text-white">Student Special!</span>
      </>
    ),
    badge: "20% OFF",
    description: (
      <>
        Our delicious <span className="font-bold">READY MEALS</span> when you order with your{" "}
        <span className="font-bold">STUDENTBEANS</span> account.
      </>
    ),
    subtext: "From tasty Meat Pies to delicious Jollof Rice and Chicken – fuel your study sessions the right way.",
    cta: "Click to start saving today!",
  },
  {
    id: 2,
    image: "/jollof-rice-african-dish.jpg",
    title: "Authentic Jollof Rice",
    description: "Experience the rich flavors of our signature Jollof Rice, cooked to perfection with traditional spices.",
    cta: "Order Now",
  },
  {
    id: 3,
    image: "/meat-pie-pastry.jpg",
    title: "Fresh Meat Pies",
    description: "Golden, flaky pastry filled with seasoned meat and vegetables. Baked fresh daily for your enjoyment.",
    cta: "View Menu",
  },
  {
    id: 4,
    image: "/egusi-soup-fufu.jpg",
    title: "Traditional Soups",
    description: "Dive into traditional African soups like Egusi, served with soft, fluffy Fufu for a complete meal.",
    cta: "Try It Today",
  },
]

export function PromoSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext()
      }, 4000)

      return () => clearInterval(autoplay)
    }
  }, [emblaApi])

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

      {/* Promo Carousel */}
      <div className="relative rounded-lg overflow-hidden mb-8 h-[500px] group">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide) => (
              <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={slide.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 md:p-16 max-w-3xl text-white">
                  <h2 className="text-5xl font-bold mb-6 leading-tight">{slide.title}</h2>
                  
                  {slide.badge && (
                    <div className="bg-red-500 text-white inline-block px-6 py-2 rounded-full text-2xl font-bold mb-6">
                      {slide.badge}
                    </div>
                  )}

                  <p className="text-xl mb-4 leading-relaxed">{slide.description}</p>
                  
                  {slide.subtext && (
                    <p className="text-white/90 text-sm font-bold mb-8 max-w-xl">
                      {slide.subtext}
                    </p>
                  )}

                  <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full text-lg px-8 py-6 mt-4">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
