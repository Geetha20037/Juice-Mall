import {
  ArrowRight,
  Check,
  ChevronRight,
  Leaf,
  Play,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import OfferCard from "../components/OfferCard";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import { categories, offers, products, testimonials } from "../data/juiceData";

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 6);

  const scrollToCategories = () => {
    document
      .getElementById("categories")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const addProduct = (product) => {
    window.alert(`${product.name} added to your order!`);
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-[#fffaf2] pb-20 pt-32 dark:bg-[#0d1511] lg:pb-28 lg:pt-40">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

        <div className="container-width relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-violet-700 dark:border-violet-600/20 dark:bg-violet-600/10 dark:text-violet-400">
              <Sparkles size={14} />
              Freshly blended every day
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Sip something
              <span className="gradient-text block">fresh & happy.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Discover handcrafted juices, creamy smoothies and refreshing
              mocktails made with fresh fruits and a whole lot of love.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => navigate("/menu")}
                showArrow
                className="w-full sm:w-auto"
              >
                Explore Our Menu
              </Button>

              <Button
                variant="secondary"
                onClick={scrollToCategories}
                className="w-full sm:w-auto"
              >
                <Play size={16} className="fill-current" />
                Discover Flavors
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
              {[
                "100% Fresh Fruits",
                "No Artificial Flavors",
                "Made To Order",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[530px]"
          >
            <div className="hero-glow relative aspect-square overflow-hidden rounded-[45px] bg-gradient-to-br from-violet-200 via-yellow-100 to-green-100 dark:from-orange-950 dark:via-yellow-950 dark:to-green-950">
              <div className="absolute left-10 top-12 h-24 w-24 rounded-full bg-white/25 blur-xl" />
              <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-green-400/20 blur-3xl" />

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[12%] top-[12%] text-6xl sm:text-7xl"
              >
                🍊
              </motion.div>

              <motion.div
                animate={{ y: [0, 13, 0], rotate: [4, -4, 4] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[11%] top-[17%] text-6xl sm:text-7xl"
              >
                🍓
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-4, 5, -4] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[13%] left-[10%] text-6xl sm:text-7xl"
              >
                🍍
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0], rotate: [3, -4, 3] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[12%] right-[9%] text-6xl sm:text-7xl"
              >
                🥭
              </motion.div>

              <div className="absolute left-1/2 top-1/2 flex h-[58%] w-[42%] -translate-x-1/2 -translate-y-[43%] items-end justify-center">
                <div className="relative h-[88%] w-[70%] rounded-b-[45px] rounded-t-[25px] border-[7px] border-white/80 bg-gradient-to-b from-violet-400 to-violet-700 shadow-2xl shadow-orange-900/20">
                  <div className="absolute left-1/2 top-1/2 h-[55%] w-[72%] -translate-x-1/2 rounded-full bg-white/15" />
                  <div className="absolute left-[18%] top-[-22%] h-[42%] w-[64%] rounded-full bg-white/20 blur-md" />
                </div>

                <div className="absolute bottom-[88%] left-[57%] h-28 w-3 -rotate-6 rounded-full bg-green-700/80" />
                <div className="absolute bottom-[89%] left-[42%] text-5xl">🌿</div>
              </div>

              <div className="absolute bottom-7 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl border border-white/50 bg-white/65 p-4 shadow-xl backdrop-blur-xl dark:bg-slate-950/60">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-violet-700 dark:text-violet-400">
                      Today's favorite
                    </p>
                    <p className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                      Mango Magic
                    </p>
                  </div>

                  <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-black text-white">
                    ₹149
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:block">
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                4.9/5
              </p>
              <p className="text-[10px] font-bold text-slate-500">
                2,000+ happy sips
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-7 dark:border-slate-800 dark:bg-slate-950">
        <div className="container-width grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Farm Fresh",
              text: "Freshly sourced ingredients",
            },
            {
              icon: ShieldCheck,
              title: "Clean & Safe",
              text: "Quality you can trust",
            },
            {
              icon: Truck,
              title: "Quick Delivery",
              text: "Freshness at your doorstep",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-600/10">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="categories" className="bg-white py-20 dark:bg-slate-950 lg:py-28">
        <div className="container-width">
          <div className="mb-10 flex flex-col items-center justify-center gap-5 text-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
                Pick your mood
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                What are you craving?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                From vibrant fruit juices to creamy shakes, there is a fresh
                favorite waiting for you.
              </p>
            </div>

            <Link
              to="/menu"
              className="group flex items-center gap-2 text-sm font-bold text-violet-700 dark:text-violet-400"
            >
              View full menu
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => navigate(`/menu?category=${category.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] py-20 dark:bg-[#101a14] lg:py-28">
        <div className="container-width">
          <div className="mb-10 flex flex-col items-center justify-center gap-5 text-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
                Customer favorites
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Fresh picks, made for you
              </h2>
            </div>

            <Link
              to="/menu"
              className="group flex items-center gap-2 text-sm font-bold text-violet-700 dark:text-violet-400"
            >
              See all drinks
              <ChevronRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950 lg:py-28">
        <div className="container-width">
          <div className="mb-10 flex flex-col items-center justify-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
              Today's deals
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Big flavor. Better value.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {offers.map((offer, index) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-[#101812] lg:py-28">
        <div className="container-width grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
              Why Juice Mall?
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
              We believe fresh fruit should taste this good.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-500 dark:text-slate-400">
              We started Juice Mall with one simple idea: make everyday
              refreshment exciting. Every drink is prepared to order with
              carefully selected fruits, creative combinations and zero
              shortcuts.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Fresh ingredients",
                "Made to order",
                "Creative recipes",
                "Friendly service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-200"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-8 inline-block">
              <Button showArrow>Our Story</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-green-400 to-emerald-700 p-8 shadow-2xl shadow-green-900/10 sm:p-12">
              <div className="absolute -right-10 -top-10 text-[170px] opacity-20">
                🍃
              </div>

              <div className="relative z-10">
                <div className="text-7xl">🥝</div>

                <h3 className="mt-8 max-w-sm text-3xl font-black text-white sm:text-4xl">
                  Good for your mood. Great for your day.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-green-50">
                  Colorful fruits, natural flavors and a fresh little moment
                  of happiness in every cup.
                </p>

                <div className="mt-9 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black text-white">25+</p>
                    <p className="mt-1 text-[10px] text-green-100">
                      Flavors
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black text-white">100%</p>
                    <p className="mt-1 text-[10px] text-green-100">Fresh</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black text-white">4.9★</p>
                    <p className="mt-1 text-[10px] text-green-100">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950 lg:py-28">
        <div className="container-width">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
              Real reviews
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Loved by fresh-juice fans
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              Thousands of customers have made Juice Mall part of their
              everyday routine.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 pb-20 dark:bg-slate-950">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-r from-violet-600 via-violet-600 to-yellow-400 px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-10 -top-20 text-[180px] opacity-15">
              🍹
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-100">
                Your next sip is waiting
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Ready to make your day a little fresher?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-violet-50">
                Explore our full menu and find a flavor that matches your mood.
              </p>

              <Link to="/menu" className="mt-7 inline-block">
                <button className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-violet-700 transition-all hover:-translate-y-1">
                  Order Your Favorite
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;






