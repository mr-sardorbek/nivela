import { Ellipsis } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HomeCategories } from "@/data/homeCategories";

const cardClass =
  "group flex min-w-0 flex-col items-center gap-1.5 rounded-lg " +
  "bg-[#f8f6f2] px-1 py-2 text-center text-[8px] font-medium " +
  "transition-colors hover:bg-[#eeece4] dark:bg-muted dark:hover:bg-accent " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary " +
  "sm:gap-2 sm:rounded-xl sm:p-3 sm:text-sm";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="home-categories-title"
  className="site-container py-6 sm:py-8"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
         <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b6038] dark:text-[#afc798]">
  {t("homeCategories.eyebrow")}
</p>

          <h2
            id="home-categories-title"
            className="mt-1 font-serif text-3xl leading-tight lg:text-4xl"
          >
            {t("homeCategories.title")}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {t("homeCategories.description")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1.5 sm:gap-3 xl:grid-cols-10">
        {HomeCategories.map(({ key, image, slug }) => (
          <Link
            key={key}
            to={`/shop?category=${slug}`}
            className={cardClass}
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              className="aspect-square w-full max-w-24 rounded-2xl object-contain motion-safe:transition-transform motion-safe:group-hover:scale-105"
            />

            <span className="w-full [overflow-wrap:anywhere] leading-tight">
              {t(`categories.${key}`)}
            </span>
          </Link>
        ))}

        <Link to="/shop" className={cardClass}>
          <span className="grid aspect-square w-full max-w-24 place-items-center">
            <span className="grid size-8 place-items-center rounded-full border border-border text-primary sm:size-11">
              <Ellipsis className="size-4 sm:size-5" aria-hidden="true" />
            </span>
          </span>

          <span className="leading-tight">{t("homeCategories.more")}</span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;