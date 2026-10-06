import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-[#fffaf2] pb-20 pt-28 dark:bg-[#0d1511] lg:pt-36">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
            Get in touch
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-950 dark:text-white sm:text-6xl">
            Let's talk <span className="gradient-text">fresh.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Have a question, suggestion or just want to say hello? We'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {[
              {
                icon: MapPin,
                title: "Visit us",
                text: "24 Fresh Street, Bengaluru, India",
              },
              {
                icon: Phone,
                title: "Call us",
                text: "+91 98765 43210",
              },
              {
                icon: Mail,
                title: "Email us",
                text: "hello@juicemall.com",
              },
              {
                icon: Clock,
                title: "Opening hours",
                text: "Every day · 9 AM - 10 PM",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[25px] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-600/10">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-600 to-yellow-400 p-7 text-white">
              <MessageCircle size={28} />

              <h3 className="mt-5 text-2xl font-black">
                Need help with an order?
              </h3>

              <p className="mt-3 text-sm leading-6 text-violet-50">
                Our team is happy to help with menu questions, custom orders
                and anything else you need.
              </p>

              <button
                onClick={() => window.alert("Our support team will contact you shortly!")}
                className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-black text-violet-700 transition hover:-translate-y-0.5"
              >
                Talk to us
              </button>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[32px] border border-slate-200 bg-white p-6 card-shadow sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-7">
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                We'll get back to you as soon as possible.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl bg-green-50 p-4 text-sm text-green-700 dark:bg-green-500/10 dark:text-green-400">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-black">Message sent successfully!</p>
                  <p className="mt-1 text-xs">
                    Thanks for reaching out to Juice Mall.
                  </p>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition focus:border-violet-400 focus:ring-4 focus:ring-violet-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition focus:border-violet-400 focus:ring-4 focus:ring-violet-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition focus:border-violet-400 focus:ring-4 focus:ring-violet-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition focus:border-violet-400 focus:ring-4 focus:ring-violet-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-violet-600/20 transition-all hover:-translate-y-1 hover:bg-violet-700"
            >
              Send Message
              <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
