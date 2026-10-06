import { motion } from "framer-motion";
import { Heart, Plus, Star, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleAddToOrder = () => {
    navigate("/order", {
      state: {
        productId: product.id,
      },
    });
  };

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-[#142019]"
    >
      {/* Product Image */}
      <div
        className={`relative flex h-64 items-center justify-center overflow-hidden ${product.color}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative text-8xl drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
        >
          {product.emoji}
        </motion.div>

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-110 dark:bg-slate-900/80 dark:text-white"
        >
          <Heart
            size={19}
            fill={liked ? "currentColor" : "none"}
            className={liked ? "text-red-500" : ""}
          />
        </button>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-800 shadow backdrop-blur dark:bg-slate-900/80 dark:text-white">
          <Star size={14} fill="currentColor" className="text-yellow-500" />
          {product.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-violet-600">
          {product.category}
        </div>

        <h3 className="text-xl font-black text-slate-900 dark:text-white">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <span className="text-xl font-black text-violet-600">
              ₹{product.price}
            </span>

            <span className="ml-2 text-sm text-slate-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          <button
            onClick={handleAddToOrder}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-violet-600 dark:bg-white dark:text-slate-900 dark:hover:bg-violet-600 dark:hover:text-white"
          >
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Add to Order</span>
            <Plus size={16} className="sm:hidden" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
