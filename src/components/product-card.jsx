

import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";

const ProductCard = ({product}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-sm 
    transition-shadow duration-300 hover:shadow-md ">
        <span className="absolute -left-7 top-4 z-10 w-28 -rotate-45 bg-red-500 py-1 text-center text-[10px] 
        font-bold uppercase tracking-wider text-white shadow-sm">
  -{Math.round(product.discountPercentage)}%  SALE
</span>
      <div className="relative mb-2 h-[160px]  overflow-hidden rounded-xl bg-[#F7F5EF]">

        <button className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-1.5 text-gray-700 transition-colors hover:text-red-500">
          <Heart size={22} />
        </button>

        <img
          src={product.thumbnail}
          alt="Product"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="px-2">
        <h3 className="line-clamp-1 text-base font-semibold text-[#222222]">
          {product.title}
        </h3>

      <p className="mt-1 truncate text-sm leading-5 text-gray-500">
  {product.description}
</p>

        <div className="mt-2 flex items-center gap-1.5">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-[#222222]">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviews.length})</span>
        </div>

        <div className=" flex items-center justify-between">
  <div className="flex items-center gap-2">
    <span className="text-xl font-bold text-primary-dark">
      {product.price}
    </span>

    <span className="text-sm text-gray-400 line-through">
      {product.oldPrice}
    </span>
  </div>

  <Button
    variant="default"
    size="icon"
    className="size-10 cursor-pointer rounded-xl"
  >
    <ShoppingCart size={20} />
  </Button>
</div>
      </div>
    </div>
  );
};

export default ProductCard;
