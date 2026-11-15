import { ArrowRight, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useGetProductsQuery } from "@/features/products/productsAPI";
import { ErrorState, Loading, ProductCard } from ".";

const BestSeller = () => {
    const { t } = useTranslation();

    const {data, isLoading, isError, } = useGetProductsQuery()


    const products = data?.products || []

    const bestSellingProducts = [...products].sort(
        (a,b) => b.rating - a.rating
    ).slice(174, 179)

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
  <Crown className="h-9 w-9 text-primary" />

  <div>
    <h2 className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
  {t("bestSellers.title")}
</h2>

    <p className=" text-xs text-muted-foreground  sm:text-sm">
      {t("bestSellers.description")}
    </p>
  </div>
</div>
<Button
  variant="link"
  className="shrink-0 gap-1 px-1 text-xs sm:gap-1.5 sm:text-sm"
>
  {t("bestSellers.seeAll")}
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

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {bestSellingProducts.map((product) => (
                <ProductCard key={product.id}  product={product} showSale={false} oldPrices={false}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
