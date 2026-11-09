
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const FlashSale = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">

      {/* Chap tomon */}
      <div className="flex items-center gap-2 sm:gap-3">
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
          className="shrink-0"
        >
          <Zap className="size-8 text-red-500 fill-red-500 sm:size-10 md:size-12 lg:size-[74px]" />
        </motion.div>

        <div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-red-500 sm:text-3xl md:text-[32px] lg:text-[42px]">
            {t("flashSale.title")}
          </h2>

          <p className="text-sm text-red-500 sm:text-base md:text-lg lg:text-xl">
            {t("flashSale.subtitle")}
          </p>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex w-full items-center justify-center sm:justify-start gap-4.5 sm:gap-2 lg:w-auto">
        {[
          { value: "02", label: t("flashSale.days") },
          { value: "12", label: t("flashSale.hours") },
          { value: "45", label: t("flashSale.minutes") },
          { value: "30", label: t("flashSale.seconds") },
        ].map((item, index) => (
          <div
            key={index}
            className="flex h-[44px] min-w-0 flex-1 flex-col items-center justify-center rounded-xl bg-[#FCE4E6] sm:h-[72px] sm:max-w-[80px] lg:h-[80px] lg:w-[80px] lg:flex-none"
          >
            <span className="text-[14px] font-bold text-[#991B1B] sm:text-2xl">
              {item.value}
            </span>

            <span className="text-[10px] font-medium text-[#991B1B] sm:text-xs lg:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="flex justify-center sm:justify-end sm:mt-[-70px] sm:mb-5 lg:m-0 lg:justify-start">
        <Button
          variant="secondary"
          className="group h-7 cursor-pointer rounded-2xl px-5 text-[10px] font-bold transition-all duration-300 ease-out sm:h-10 sm:px-7 sm:text-sm"
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
            <ArrowRight className="ml-1 size-3 text-primary-dark" />
          </motion.div>
        </Button>
      </div>
    </div>
  );
};

export default FlashSale;
