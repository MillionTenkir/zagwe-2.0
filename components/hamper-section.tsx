import { Button } from "@/components/ui/button"

export function HamperSection() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <img src="/festive-christmas-hamper-gift-box.jpg" alt="Taste the Festivities Hamper" className="w-full rounded-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Taste The Festivities Hamper</h2>
          <p className="text-muted-foreground mb-6">(Nationwide Delivery)</p>
          <p className="text-foreground mb-6 leading-relaxed">
            This carefully curated hamper has everything you need to create an unforgettable Christmas feast. Treat
            yourself or a loved one to the ultimate festive indulgence and make this holiday season truly special.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Order Now</Button>
        </div>
      </div>
    </section>
  )
}
