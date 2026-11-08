import { Categories, FlashSale, Hero, ProductCard } from "@/components";
import { useGetProductsQuery } from "@/features/products/productsAPI";

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  const uniqueProducts = data?.products
    ?.filter(
      (product, index, array) =>
        array.findIndex((item) => item.category === product.category) === index,
    )
    .slice(10, 15);

  console.log(data);
  console.log(isLoading);
  console.log(error);

  return (
    <div>
      <Hero />
      <Categories />
      <div className="site-container">
        <div className="rounded-2xl bg-[#FFF1F1] p-4">
          <FlashSale />

          <div className="mt-4 grid grid-cols-5 gap-4">
            {uniqueProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
