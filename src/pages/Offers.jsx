import { ArrowRight, Clock, Gift, Percent, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import OfferCard from "../components/OfferCard";
import Button from "../components/Button";
import { offers } from "../data/juiceData";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <main className="min-h-screen bg-[#fffaf2] pb-20 pt-28 dark:bg-[#0d1511] lg:pt-36">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-violet-700 dark:bg-violet-600/10 dark:text-violet-400">
            <Sparkles size={14} />
            Fresh deals every week
          </div>

          <h1 className="text-4xl font-black text-slate-950 dark:text-white sm:text-6xl">
            Delicious deals.
            <span className="gradient-text block">Zero regrets.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            Bring your friends, treat yourself or simply make your next drink
            more exciting with our special offers.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} featured={index === 1} />
          ))}
        </div>

        <section className="mt-16 overflow-hidden rounded-[35px] bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-100">
                <Gift size={16} />
                Member special
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Get 10% off your next 3 orders.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-green-50">
                Join our Juice Club and unlock special discounts, early access
                to new flavors and surprise treats.
              </p>

              <Link to="/contact" className="mt-7 inline-block">
                <Button variant="dark" showArrow>
                  Join Juice Club
                </Button>
              </Link>
            </div>

            <div className="hidden text-[130px] lg:block">🥤</div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600">
              More reasons to smile
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
              Fresh perks
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Percent,
                title: "Weekly Discounts",
                text: "Fresh deals every week on selected drinks.",
              },
              {
                icon: Clock,
                title: "Happy Hours",
                text: "Special prices during selected evening hours.",
              },
              {
                icon: Gift,
                title: "Birthday Treats",
                text: "Celebrate your day with a complimentary surprise.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 text-center dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-600/10">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 font-black text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-14 text-center">
          <Link to="/menu">
            <button className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-violet-600/20 transition-all hover:-translate-y-1 hover:bg-violet-700">
              Browse Full Menu
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Offers;
