import { ArrowRight, Tags } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useGetProductsQuery } from "@/features/products/productsAPI";
import { ErrorState, Loading, ProductCard } from ".";
import { useTranslation } from "react-i18next";

const NewArrivals = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const { t } = useTranslation();

  const products = data?.products || [];

  const newArrivalsProducts = [...products]
  .sort(
    (a, b) =>
      new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
  )
  .slice(0, 5);

   if (isLoading) {
    return <Loading />;
  }
  
  if (isError) {
    return <ErrorState />;
  }

  return (
    <section className="mt-12 ">
      <div className="site-container">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Tags className="h-9 w-9 text-primary" />

            <div>
              <h2 className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
                {t("newArrivals.title")}
              </h2>

              <p className=" text-xs text-muted-foreground  sm:text-sm">
                {t("newArrivals.description")}
              </p>
            </div>
          </div>

          <Button
            variant="link"
            className="shrink-0 gap-1 px-1 text-xs sm:gap-1.5 sm:text-sm"
          >
            {t("newArrivals.seeAll")}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="size-3.5 text-primary-dark sm:size-4" />
            </motion.div>
          </Button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {newArrivalsProducts.map((product) => (
                <ProductCard key={product.id}  product={product} showNew={true}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
