import {
  Award,
  Heart,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Fresh First",
      text: "We select fresh ingredients every morning and prepare every drink to order.",
    },
    {
      icon: Heart,
      title: "Made With Love",
      text: "Our recipes are crafted to make healthy choices delicious and exciting.",
    },
    {
      icon: Award,
      title: "Quality Matters",
      text: "From sourcing to serving, we maintain high standards at every step.",
    },
    {
      icon: Users,
      title: "People First",
      text: "Friendly service and happy customers are at the heart of everything we do.",
    },
  ];

  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden bg-[#fffaf2] pb-20 pt-32 dark:bg-[#0d1511] lg:pb-28 lg:pt-40">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="container-width relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-violet-700 dark:bg-violet-600/10 dark:text-violet-400">
              <Sparkles size={14} />
              Our story
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-6xl">
              More than a juice shop.
              <span className="gradient-text block">It's a fresh feeling.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Juice Mall began with a simple dream — create a place where
              people could enjoy delicious drinks made from real ingredients
              without compromising on taste.
            </p>

            <Link to="/menu" className="mt-8 inline-block">
              <Button showArrow>Explore Our Menu</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-violet-600 to-yellow-400 p-8 shadow-2xl sm:p-12">
              <div className="text-[120px] leading-none">🍊</div>

              <h2 className="mt-7 max-w-sm text-3xl font-black text-white">
                Freshness in every sip.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-violet-50">
                Real fruit. Creative recipes. Good energy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  25+ flavors
                </span>
                <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  100% fresh
                </span>
                <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  Made daily
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
              Our philosophy
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-5xl">
              Simple ingredients. Extraordinary flavor.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-500 dark:text-slate-400">
              We keep things simple. Fresh fruit, thoughtful combinations,
              quality ingredients and recipes that bring out natural flavor.
              That's the Juice Mall way.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 card-shadow dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-600/10">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-slate-900 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] py-20 dark:bg-[#101a14] lg:py-28">
        <div className="container-width grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {[
              ["25+", "Signature flavors"],
              ["50K+", "Drinks served"],
              ["4.9★", "Average rating"],
              ["7 days", "Freshness weekly"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-[28px] border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-3xl font-black text-violet-600">{number}</p>
                <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
              From our kitchen
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              Every cup is a little celebration.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-500 dark:text-slate-400">
              Whether you need a morning boost, an afternoon refreshment or a
              sweet evening treat, our menu is designed to give you something
              to look forward to.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                Naturally delicious
              </span>
              <span className="rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-violet-800 dark:bg-violet-600/10 dark:text-violet-400">
                Freshly blended
              </span>
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
                Full of flavor
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
