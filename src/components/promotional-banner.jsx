import { NivelaFreshLooks, NivelaSuistainable } from "@/assets"


const PromotionalBanner = () => {
  return (
    <section className="mt-8 mb-8">
        <div className="site-container">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src={NivelaSuistainable} alt="NivelaSuistainable" 
                className="w-full h-full object-cover rounded-3xl"/>
              </div>

              <div>
                <img src={NivelaFreshLooks} alt="NivelaFreshLooks" 
                className="w-full h-full object-cover rounded-3xl"/>
              </div>
           </div>
        </div>
    </section>
  )
}

export default PromotionalBanner
