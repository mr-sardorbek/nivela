import { NivelaFreshLooks, NivelaSuistainable } from "@/assets";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const PromotionalBanner = () => {

  const { t } = useTranslation();

  return (
    <section className="mt-8 mb-8">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <img
              src={NivelaSuistainable}
              alt="NivelaSuistainable"
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
              <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl text-white">
                {t("promotionalBanners.sustainableTitle")}
              </h2>
              <p className="mt-3 max-w-[55%] text-xs sm:max-w-xs sm:text-sm text-white/80">
                {t("promotionalBanners.sustainableDescription")}
              </p>

              <Button
                variant="secondary"
                size="lg"
                className="mt-5 h-8 rounded-full px-4 text-xs sm:h-9 sm:px-6 sm:text-sm"
              >
                {t("promotionalBanners.shopNow")}
                <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="ml-1 size-4 text-primary-dark" />
          </motion.div>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={NivelaFreshLooks}
              alt="NivelaFreshLooks"
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2">
              <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl text-[#222222]">
               {t("promotionalBanners.freshTitle")}
              </h2>

              <p className="mt-3 max-w-[55%] text-xs sm:max-w-xs sm:text-sm text-[#666666]">
               {t("promotionalBanners.freshDescription")}
              </p>

              <Button
                variant="secondary"
                size="lg"
                className="mt-5 h-8 rounded-full px-4 text-xs sm:h-9 sm:px-6 sm:text-sm"
              >
                {t("promotionalBanners.shopNow")}
                  <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="ml-1 size-4 text-primary-dark" />
          </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
