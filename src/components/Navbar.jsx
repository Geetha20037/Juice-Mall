import { useState } from "react";
import {
  ChevronDown,
  Menu,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/85">
      <div className="container-width flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-yellow-400 text-2xl shadow-lg shadow-violet-600/20">
            🍊
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Juice
              </span>
              <span className="text-xl font-black tracking-tight text-violet-600">
                Mall
              </span>
              <Sparkles size={13} className="text-yellow-500" />
            </div>

            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
              Freshness daily
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive(link.path)
                  ? "bg-violet-50 text-violet-700 dark:bg-violet-600/10 dark:text-violet-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            to="/menu"
            className="group flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-600 dark:hover:text-white"
          >
            <ShoppingBag size={17} />
            Order Now
            <ChevronDown
              size={15}
              className="rotate-[-90deg] transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden"
          >
            <nav className="container-width flex flex-col gap-2 py-5">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`block rounded-xl px-4 py-3 font-semibold ${
                      isActive(link.path)
                        ? "bg-violet-50 text-violet-700 dark:bg-violet-600/10 dark:text-violet-400"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/menu"
                onClick={closeMobileMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 font-bold text-white"
              >
                <ShoppingBag size={18} />
                Order Fresh Juice
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
