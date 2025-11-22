import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const rewards = [
  {
    id: 1,
    discount: "5% Off Your Next Order",
    points: "3,000 points",
    color: "bg-white",
  },
  {
    id: 2,
    discount: "10% Discount",
    points: "4,500 points",
    color: "bg-white",
  },
  {
    id: 3,
    discount: "15% Discount",
    points: "7,500 points",
    color: "bg-white",
  },
  {
    id: 4,
    discount: "20% Discount",
    points: "12,000 points",
    color: "bg-white",
  },
  {
    id: 5,
    discount: "25% Discount",
    points: "15,000 points",
    color: "bg-white",
  },
  {
    id: 6,
    discount: "30% Discount",
    points: "30,000 points",
    color: "bg-white",
  },
]

export default function LoyaltyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Rewards</h1>
          <div className="h-px w-full max-w-xs mx-auto bg-border"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-100 rounded-2xl">
          {rewards.map((reward) => (
            <div 
              key={reward.id} 
              className="flex flex-col items-center justify-between p-8 m-5 rounded-2xl bg-white shadow-sm h-[300px] hover:shadow-md transition-shadow"
            >
              <div className="flex-1 flex flex-col items-center w-full pt-4">
                <div className="mb-6 relative w-28 h-14">
                  <Image 
                    src="/zagwe-logo.png" 
                    alt="Zagwe" 
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-center font-bold text-xl mb-6 text-foreground leading-tight px-2">
                  {reward.discount}
                </h3>
                
                <div className="border-[1.5px] border-[#005f56] rounded-md px-6 py-1.5 mb-6">
                  <span className="text-[#005f56] font-medium text-lg">
                    {reward.points}
                  </span>
                </div>
              </div>

              <Button 
                className="w-full bg-[#7daea8] hover:bg-[#6a9c96] text-white text-lg font-medium rounded-lg h-12"
              >
                Redeem
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
