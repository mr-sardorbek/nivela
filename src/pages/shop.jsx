import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const categories = [
    "Skin Care",
    "Hair Care",
    "Body Care",
    "Home & Lifestyle",
    "Accessories",
    "All Products",
  ];


  const [activeCategory, setActiveCategory] = useState("Skin Care")


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

        <span className="font-medium text-foreground">Skin Care</span>
      </nav>
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-60 shrink-0">
          <div>
            <h2 className="text-sm font-semibold text-primary">
              CATEGORIES
            </h2>

            <ul className="mt-3 space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveCategory(category)}
                    className={`h-auto justify-start px-2 py-0 text-sm font-normal text-foreground hover:text-primary
                        ${activeCategory === category ? "font-semibold text-primary" : "text-foreground "}`}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
  <h2 className="text-sm font-semibold text-foreground">
    FILTER BY
  </h2>

  <div className="mt-5">
    <h3 className="text-sm font-medium text-foreground">
      Price
    </h3>
  </div>
</div>
        </aside>

        {/* Products */}
        <section className="min-w-0 flex-1">Products</section>
      </div>
    </main>
  );
};

export default Shop;
