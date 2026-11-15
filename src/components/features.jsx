import { Award, Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";


const Features = () => {

    const {t} = useTranslation()

   const features = [
  {
    icon: Truck,
    title: t("features.freeShipping"),
    description: t("features.freeShippingDescription"),
  },
  {
    icon: RotateCcw,
    title: t("features.returns"),
    description: t("features.returnsDescription"),
  },
  {
    icon: ShieldCheck,
    title: t("features.securePayments"),
    description: t("features.securePaymentsDescription"),
  },
  {
    icon: Award,
    title: t("features.premiumQuality"),
    description: t("features.premiumQualityDescription"),
  },
  {
    icon: Headset,
    title: t("features.support"),
    description: t("features.supportDescription"),
  },
];

  return (
    <section className="mt-8 bg-[var(--color-surface)] py-6">
      <div className="site-container">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap justify-center gap-x-6 gap-y-6 lg:gap-x-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex basis-[calc(50%-12px)] items-center gap-3 sm:basis-[calc(33.333%-16px)] lg:basis-[calc(20%-26px)]"
              >
                <Icon className="size-8 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xs font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-[10px] text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
