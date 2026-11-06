import { ArrowRight, Zap } from "lucide-react"
import { Button } from "./ui/button"


const FlashSale = () => {
  return (
    <section className="bg-[#FFF1F1] py-5">
  <div className="site-container">
    <div className="flex items-center justify-between gap-6">
      {/* Chap tomon */}
      
<div>
  <div className="flex items-center gap-2">
    <Zap className="text-red-500 fill-red-500" size={36} />
    <h2 className="font-serif text-[42px] font-bold leading-tight text-red-500">
  Flash Sale
</h2>
  </div>

  <p className="text-xl text-red-500">
  Limited time. Great prices!
</p>
</div>

      <div className="flex items-center gap-2">
          <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
            <span className="text-2xl font-bold text-[#991B1B]">02</span>
            <span className="text-sm font-medium text-[#991B1B]">Days</span>
          </div>
           
          <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
            <span className="text-2xl font-bold text-[#991B1B]">12</span>
            <span className="text-sm font-medium text-[#991B1B]">Hours</span>
          </div>
           
          <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
            <span className="text-2xl font-bold text-[#991B1B]">45</span>
            <span className="text-sm font-medium text-[#991B1B]">Minutes</span>
          </div>
             
          <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
            <span className="text-2xl font-bold text-[#991B1B]">30</span>
            <span className="text-sm font-medium text-[#991B1B]">Seconds</span>
          </div>
      </div>

      <div>
  <Button
  variant="ghost"
  className="h-16 rounded-2xl bg-white px-7 text-base font-bold text-[#222222] shadow-sm hover:bg-white cursor-pointer"
>
  View All Deals
  <ArrowRight className="ml-1 text-primary/70" size={32} />
</Button>
</div>

    </div>
  </div>
</section>
  )
}

export default FlashSale
