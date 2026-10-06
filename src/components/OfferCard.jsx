import { ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

const OfferCard = ({ offer, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      className={`relative overflow-hidden rounded-[30px] border p-6 transition-all duration-300 ${
        featured
          ? "border-violet-400 bg-gradient-to-br from-violet-600 to-amber-400 text-white shadow-xl shadow-violet-600/20"
          : "border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
      }`}
    >
      <div className="absolute -right-8 -top-8 text-7xl opacity-15">
        {offer.emoji}
      </div>

      <div className="relative z-10">
        <div
          className={`mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-widest ${
            featured
              ? "bg-white/20 text-white"
              : "bg-violet-50 text-violet-700 dark:bg-violet-600/10 dark:text-violet-400"
          }`}
        >
          <Tag size={12} />
          {offer.discount}
        </div>

        <div className="mb-1 text-3xl">{offer.emoji}</div>

        <h3 className="mt-3 text-xl font-black">{offer.title}</h3>

        <p
          className={`mt-1 text-sm ${
            featured
              ? "text-violet-50"
              : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {offer.subtitle}
        </p>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="text-2xl font-black">₹{offer.price}</span>
            <span
              className={`ml-2 text-xs line-through ${
                featured ? "text-white/60" : "text-slate-400"
              }`}
            >
              ₹{offer.oldPrice}
            </span>
          </div>

          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 ${
              featured
                ? "bg-white text-violet-600"
                : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white"
            }`}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCard;
