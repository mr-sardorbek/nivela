
import {
  BeautyImg,
  ElectronicsImg,
  FashionImg,
  FurnitureImg,
  KitchenImg,
} from "@/assets";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const banners = [
  FurnitureImg,
  FashionImg,
  KitchenImg,
  ElectronicsImg,
  BeautyImg,
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + banners.length) % banners.length,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="mx-auto m-4 w-full max-w-[1360px] min-[1920px]:max-w-[1460px] min-[1800px]:px-8 px-3 sm:px-6">
      <div className="relative aspect-[9/3] w-full overflow-hidden rounded-xl sm:rounded-2xl lg:aspect-auto lg:h-[calc(100svh-170px)] min-[1800px]:h-[calc(100svh-180px)]">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentSlide}
            src={banners[currentSlide]}
            alt={`Nivela banner ${currentSlide + 1}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="absolute inset-0 h-full w-full object-fill"
          />
        </AnimatePresence>

        {/* Previous */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 shadow-md hover:bg-white sm:left-4"
        >
          <ChevronLeft size={20} />
        </Button>

        {/* Next */}
        <Button
          type="button"
          variant="ghost"
          size="icon" 
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 shadow-md hover:bg-white sm:right-4"
        >
          <ChevronRight size={20} />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
          {banners.map((_, index) => (
            <Button
              key={index}
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 cursor-pointer rounded-full p-0 transition-all duration-300 ${
                currentSlide === index
                  ? "w-7 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]"
                  : "w-2 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
