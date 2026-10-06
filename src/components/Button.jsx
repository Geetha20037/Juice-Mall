import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  showArrow = false,
  type = "button",
}) => {
  const styles = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/20",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:border-violet-300 hover:text-violet-700 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:border-violet-600",
    dark: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900",
    outline:
      "border-2 border-violet-600 text-violet-700 hover:bg-violet-600 hover:text-white dark:text-violet-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ${styles[variant]} ${className}`}
    >
      {children}

      {showArrow && (
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
