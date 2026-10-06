import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white dark:border-slate-800">
      <div className="container-width py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-yellow-400 text-2xl">
                🍊
              </div>

              <div>
                <div className="text-xl font-black">
                  Juice<span className="text-violet-400">Mall</span>
                </div>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Freshness daily
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Fresh fruits, bold flavors and delicious moments served in every
              glass.
            </p>

            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  onClick={(event) => event.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:bg-violet-600 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-widest">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link className="transition hover:text-violet-400" to="/">
                Home
              </Link>
              <Link className="transition hover:text-violet-400" to="/menu">
                Menu
              </Link>
              <Link className="transition hover:text-violet-400" to="/about">
                About Us
              </Link>
              <Link className="transition hover:text-violet-400" to="/offers">
                Offers
              </Link>
              <Link className="transition hover:text-violet-400" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-widest">
              Opening Hours
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex justify-between gap-5">
                <span>Mon - Fri</span>
                <span className="text-white">9 AM - 10 PM</span>
              </p>

              <p className="flex justify-between gap-5">
                <span>Saturday</span>
                <span className="text-white">9 AM - 11 PM</span>
              </p>

              <p className="flex justify-between gap-5">
                <span>Sunday</span>
                <span className="text-violet-400">10 AM - 10 PM</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-widest">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <p className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-violet-400" />
                24 Fresh Street, Bengaluru, India
              </p>

              <p className="flex gap-3">
                <Phone size={18} className="shrink-0 text-violet-400" />
                +91 98765 43210
              </p>

              <p className="flex gap-3">
                <Mail size={18} className="shrink-0 text-violet-400" />
                hello@juicemall.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Juice Mall. All rights reserved.</p>
          <p>Made with fresh fruits & good vibes 🍹</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
