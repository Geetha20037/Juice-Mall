import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="relative rounded-[28px] border border-slate-200 bg-white p-7 card-shadow dark:border-slate-800 dark:bg-slate-900"
    >
      <Quote className="absolute right-6 top-6 text-violet-100 dark:text-violet-600/10" size={45} />

      <div className="mb-5 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="relative mb-7 text-sm leading-7 text-slate-600 dark:text-slate-300">
        “{testimonial.text}”
      </p>

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-yellow-400 text-xs font-black text-white">
          {testimonial.avatar}
        </div>

        <div>
          <h4 className="text-sm font-black text-slate-900 dark:text-white">
            {testimonial.name}
          </h4>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
