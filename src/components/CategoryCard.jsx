import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CategoryCard = ({ category, onClick }) => {
  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group flex w-full items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-600/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-600/30"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-3xl dark:bg-violet-600/10">
        {category.emoji}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-black text-slate-900 dark:text-white">
          {category.name}
        </h3>

        <p className="mt-1 truncate text-xs text-slate-500 dark:text-slate-400">
          {category.description}
        </p>
      </div>

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:bg-violet-600 group-hover:text-white dark:bg-slate-800">
        <ArrowUpRight size={17} />
      </div>
    </motion.button>
  );
};

export default CategoryCard;
