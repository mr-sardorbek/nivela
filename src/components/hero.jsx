import { MainHeroImg } from "@/assets"
import { Button } from "./ui/button"


const Hero = () => {
  return (
        <section className="mx-auto max-w-7xl px-3 sm:px-6">
      <div className="relative min-h-[500px] overflow-hidden rounded-2xl">

        {/* Background Image */}
        <img
          src={MainHeroImg}
          alt="Nivela marketplace"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[500px] items-center">
          <div className="max-w-xl p-8 sm:p-12 lg:p-16">

            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
              NIVELA
            </span>

            <h1 className="font-serif text-4xl leading-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
              SHOP BETTER.
              <br />
              LIVE BETTER.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--color-foreground)]/70 sm:text-base">
              Thoughtfully chosen products for a better everyday life.
            </p>

            <div className="mt-7">
              <Button>
                Shop Now
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>

  )
}

export default Hero
