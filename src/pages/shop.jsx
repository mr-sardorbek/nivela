import { ErrorState, Loading, ProductCard } from "@/components";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useGetProductsQuery } from "@/features/products/productsAPI";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {

  const categories = [
  { label: "All Products", value: "all" },
  { label: "Beauty", value: "beauty" },
  { label: "Skin Care", value: "skin-care" },
  { label: "Fragrances", value: "fragrances" },
  { label: "Furniture", value: "furniture" },
  { label: "Groceries", value: "groceries" },
  { label: "Home Decoration", value: "home-decoration" },
  { label: "Kitchen Accessories", value: "kitchen-accessories" },
  { label: "Laptops", value: "laptops" },
  { label: "Men's Shirts", value: "mens-shirts" },
  { label: "Men's Shoes", value: "mens-shoes" },
  { label: "Men's Watches", value: "mens-watches" },
  { label: "Mobile Accessories", value: "mobile-accessories" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Sports Accessories", value: "sports-accessories" },
  { label: "Sunglasses", value: "sunglasses" },
  { label: "Tablets", value: "tablets" },
  { label: "Tops", value: "tops" },
  { label: "Women's Bags", value: "womens-bags" },
  { label: "Women's Dresses", value: "womens-dresses" },
  { label: "Women's Jewellery", value: "womens-jewellery" },
  { label: "Women's Shoes", value: "womens-shoes" },
  { label: "Women's Watches", value: "womens-watches" },
];

  const { data, isLoading, isError } = useGetProductsQuery();
  const [sortBy, setSortBy] = useState("default");

  const products = data?.products || [];

  

  const sortedProducts = [...products].sort((a,b) => {
    if (sortBy === "price-low") {
      return a.price - b.price
    }

    if (sortBy === "price-high") {
      return b.price - a.price
    }

    if (sortBy === "rating")  {
      return b.rating - a.rating
    }

    return 0
  })

  console.log(products)



  

  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 4000]);

  
  const filteredProducts = sortedProducts.filter((product) => {
  const matchesPrice =
    product.price >= priceRange[0] &&
    product.price <= priceRange[1];

  const matchesCategory =
    activeCategory === "all" ||
    product.category === activeCategory;

  return matchesPrice && matchesCategory;
});


console.log(
  [...new Set(products.map((product) => product.category))]
);


  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorState />;
  }

  return (
    <main className="site-container">
      <nav className="mb-6 mt-4 flex items-center gap-2 text-sm">
        <Link
          to="/"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          Home
        </Link>

        <ChevronRight className="size-4 text-muted-foreground" />

        <span className="text-foreground">Shop</span>

        <ChevronRight className="size-4 text-muted-foreground" />

       <span className="font-medium text-foreground">
  {categories.find((category) => category.value === activeCategory)?.label || "All Products"}
</span>
      </nav>
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-60 shrink-0">
          <div>
            <h2 className="text-sm font-semibold text-primary">CATEGORIES</h2>

            <ul className="mt-3 space-y-1">
              {categories.map((category) => (
  <li key={category.value}>
    <Button
      variant="ghost"
      onClick={() => setActiveCategory(category.value)}
      className={`h-auto justify-start px-2 py-0 text-sm font-normal transition-colors hover:text-primary ${
        activeCategory === category.value
          ? "font-semibold text-primary"
          : "text-foreground"
      }`}
    >
      {category.label}
    </Button>
  </li>
))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold text-foreground">FILTER BY</h2>

            <div className="mt-5">
              <h3 className="text-sm font-medium text-foreground">Price</h3>

              <Slider
  value={priceRange}
  onValueChange={setPriceRange}
  min={0}
  max={4000}
  step={10}
  className="mt-4"
/>

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <section className="min-w-0 flex-1">
          <div className="mb-5 flex items-center justify-between">
  <p className="text-sm text-muted-foreground">
    Showing {filteredProducts.length} products
  </p>
<Select value={sortBy} onValueChange={setSortBy}>
  <SelectTrigger className="h-10 w-[190px] cursor-pointer rounded-lg border border-primary/20 bg-background text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary focus:ring-2 focus:ring-primary/20">
    <SelectValue placeholder="Sort by" />
  </SelectTrigger>

  <SelectContent className="rounded-xl border border-border bg-background p-1 shadow-lg">
    <SelectItem
      value="default"
      className="cursor-pointer rounded-lg text-foreground focus:bg-primary/10 focus:text-primary"
    >
      Featured
    </SelectItem>

    <SelectItem
      value="price-low"
      className="cursor-pointer rounded-lg text-foreground focus:bg-primary/10 focus:text-primary"
    >
      Price: Low to High
    </SelectItem>

    <SelectItem
      value="price-high"
      className="cursor-pointer rounded-lg text-foreground focus:bg-primary/10 focus:text-primary"
    >
      Price: High to Low
    </SelectItem>

    <SelectItem
      value="rating"
      className="cursor-pointer rounded-lg text-foreground focus:bg-primary/10 focus:text-primary"
    >
      Top Rated
    </SelectItem>
  </SelectContent>
</Select>
</div>


          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showSale={product.discountPercentage > 12}
                oldPrices={product.discountPercentage > 12}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Shop;
