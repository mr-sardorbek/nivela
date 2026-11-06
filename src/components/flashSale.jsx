import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";


const FlashSale = () => {

  const {t} = useTranslation()
  return (
  
        <div className="flex items-center justify-between gap-6">
          {/* Chap tomon */}

          <div className="flex items-center gap-3">
            <motion.div
  animate={{
    scale: [1, 1.12, 1],
    opacity: [1, 0.65, 1],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Zap className="text-red-500 fill-red-500" size={74} />
</motion.div>

            <div className="">
              <h2 className="font-serif text-[42px] font-bold leading-tight text-red-500">
  {t("flashSale.title")}
</h2>
              <p className="text-xl text-red-500">
  {t("flashSale.subtitle")}
</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
              <span className="text-2xl font-bold text-[#991B1B]">02</span>
              <span className="text-sm font-medium text-[#991B1B]">{t("flashSale.days")}</span>
            </div>

            <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
              <span className="text-2xl font-bold text-[#991B1B]">12</span>
              <span className="text-sm font-medium text-[#991B1B]">{t("flashSale.hours")}</span>
            </div>

            <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
              <span className="text-2xl font-bold text-[#991B1B]">45</span>
              <span className="text-sm font-medium text-[#991B1B]">
                {t("flashSale.minutes")}
              </span>
            </div>

            <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-xl bg-[#FCE4E6]">
              <span className="text-2xl font-bold text-[#991B1B]">30</span>
              <span className="text-sm font-medium text-[#991B1B]">
                {t("flashSale.seconds")}
              </span>
            </div>
          </div>

          <div>
            <Button
              variant="secondary"
              className="h-10 group rounded-2xl  px-7 text-[14px] font-bold  
               cursor-pointer transition-all duration-300 ease-out
"
            >
             {t("flashSale.viewAll")}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="ml-1 size-5 text-primary-dark" />
              </motion.div>
            </Button>
          </div>
        </div>
  );
};

export default FlashSale;
