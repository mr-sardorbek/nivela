
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";

const ProductCard = ({ product }) => {
  const oldPrice = (
    product.price / (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white p-1.5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-2">

      {/* SALE ribbon */}
      <span className="absolute -left-7 top-3 z-10 w-24 -rotate-45 bg-red-500 py-1 text-center text-[9px] font-bold uppercase tracking-wider text-white shadow-sm sm:-left-7 sm:top-4 sm:w-28 sm:text-[10px]">
        -{Math.round(product.discountPercentage)}% SALE
      </span>

      {/* Product image */}
      <div className="relative mb-2 h-[105px] overflow-hidden rounded-xl bg-[#F7F5EF] sm:h-[130px] md:h-[145px] lg:h-[160px]">

        {/* Wishlist */}
        <button className="absolute right-1.5 top-1.5 z-10 rounded-full bg-white/80 p-1 text-gray-700 transition-colors hover:text-red-500 sm:right-2 sm:top-2 sm:p-1.5">
          <Heart className="size-4 sm:size-5 lg:size-[22px]" />
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product information */}
      <div className="min-w-0 px-1 sm:px-2">

        <h3 className="truncate text-sm font-semibold text-[#222222] sm:text-base">
          {product.title}
        </h3>

        <p className="mt-1 truncate text-xs leading-5 text-gray-500 sm:text-sm">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1 sm:mt-2 sm:gap-1.5">
          <Star className="size-3.5 shrink-0 fill-yellow-400 text-yellow-400 sm:size-4" />

          <span className="text-xs font-semibold text-[#222222] sm:text-sm">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400 sm:text-sm">
            ({product.reviews.length})
          </span>
        </div>

{/* Price and cart */}
<div className="mt-1.5 flex min-w-0 items-center justify-between gap-1 sm:mt-2">

  <div className="flex min-w-0 flex-nowrap items-baseline gap-1 sm:gap-2">
    <span className="whitespace-nowrap text-sm font-bold text-primary sm:text-lg lg:text-xl">
      ${product.price}
    </span>

    <span className="whitespace-nowrap text-[9px] text-gray-400 line-through sm:text-xs">
      ${oldPrice}
    </span>
  </div>

  <Button
    variant="default"
    size="icon"
    className="size-8 shrink-0 cursor-pointer rounded-lg sm:size-9 lg:size-10"
  >
    <ShoppingCart className="size-4 sm:size-[18px] lg:size-5" />
  </Button>
</div>

      </div>
    </div>
  );
};

export default ProductCard;
