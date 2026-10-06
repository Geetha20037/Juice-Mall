import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/juiceData";

const Menu = () => {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const addProduct = (product) => {
    window.alert(`${product.name} added to your order!`);
  };

  return (
    <main className="min-h-screen bg-[#fffaf2] pb-20 pt-28 dark:bg-[#0d1511] lg:pt-36">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-violet-700 dark:bg-violet-600/10 dark:text-violet-400">
            🍹 Freshly prepared
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            The <span className="gradient-text">Juice Mall</span> Menu
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Pick your perfect drink from our collection of fresh juices,
            smoothies, milkshakes and sparkling mocktails.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                  : "bg-white text-slate-600 hover:text-violet-600 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              All Drinks
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition-all ${
                  activeCategory === category.id
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                    : "bg-white text-slate-600 hover:text-violet-600 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your favorite..."
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-900 transition-all focus:border-violet-400 focus:ring-4 focus:ring-violet-600/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Showing{" "}
            <span className="font-black text-slate-900 dark:text-white">
              {filteredProducts.length}
            </span>{" "}
            drinks
          </p>

          <div className="hidden items-center gap-2 text-xs font-bold text-slate-400 sm:flex">
            <SlidersHorizontal size={15} />
            Freshly selected
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addProduct}
              />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-[30px] border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="text-6xl">🍹</div>

            <h2 className="mt-5 text-xl font-black text-slate-900 dark:text-white">
              No drinks found
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try searching for another flavor or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-6 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white"
            >
              Show all drinks
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
