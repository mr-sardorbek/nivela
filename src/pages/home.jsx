import { Toys } from "@/assets";
import { Categories, FlashSale, Hero, ProductCard } from "@/components"


const Home = () => {

  const products = [
    {
  id: 1,
  title: "Premium Wireless Headphones",
  description: "High-quality sound with comfortable wireless design.",
  img: Toys,
  price: 89.99,
  oldPrice: 129.99,
  discount: 30,
  rating: 4.8,
  reviewsCount: 120,
},

{
  id: 2,
  title: "Premium Wireless Headphones",
  description: "High-quality sound with comfortable wireless design.",
  img: Toys,
  price: 89.99,
  oldPrice: 129.99,
  discount: 30,
  rating: 4.8,
  reviewsCount: 120,
},

{
  id: 3,
  title: "Premium Wireless Headphones",
  description: "High-quality sound with comfortable wireless design.",
  img: Toys,
  price: 89.99,
  oldPrice: 129.99,
  discount: 30,
  rating: 4.8,
  reviewsCount: 120,
},

{
  id: 4,
  title: "Premium Wireless Headphones",
  description: "High-quality sound with comfortable wireless design.",
  img: Toys,
  price: 89.99,
  oldPrice: 129.99,
  discount: 30,
  rating: 4.8,
  reviewsCount: 120,
},

{
  id: 5,
  title: "Premium Wireless Headphones",
  description: "High-quality sound with comfortable wireless design.",
  img: Toys,
  price: 89.99,
  oldPrice: 129.99,
  discount: 30,
  rating: 4.8,
  reviewsCount: 120,
}
  ]

  return (
    <div>
      <Hero />
      <Categories />
      <div className="site-container">
  <div className="rounded-2xl bg-[#FFF1F1] p-4">
    <FlashSale />

    <div className="mt-4 grid grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
