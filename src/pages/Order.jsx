
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/juiceData";

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedId = location.state?.productId;

  const selectedProduct = products.find(
    (product) => product.id === selectedId
  );

  const [quantity, setQuantity] = useState(1);
  const [ordered, setOrdered] = useState(false);

  // If there is no selected product
  if (!selectedProduct) {
    return (
      <main className="min-h-screen bg-[#fffaf2] px-4 pb-20 pt-32 dark:bg-[#0d1511]">
        <div className="container-width">
          <div className="mx-auto max-w-xl rounded-[2rem] bg-white p-10 text-center shadow-xl dark:bg-[#142019]">
            <ShoppingBag className="mx-auto mb-5 h-16 w-16 text-violet-600" />

            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              No Order Found
            </h1>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Please select a juice from our menu to add it to your order.
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="mt-7 rounded-2xl bg-violet-600 px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-violet-700"
            >
              Browse Menu
            </button>
          </div>
        </div>
      </main>
    );
  }

  const total = selectedProduct.price * quantity;

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  // Remove complete order
  const removeOrder = () => {
    navigate("/menu", {
      replace: true,
    });
  };

  // Place order
  const handlePlaceOrder = () => {
    setOrdered(true);
  };

  return (
    <main className="min-h-screen bg-[#fffaf2] px-4 pb-20 pt-28 dark:bg-[#0d1511]">
      <div className="container-width">
        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-violet-600 dark:text-slate-300"
        >
          <ArrowLeft size={18} />
          Back to Menu
        </button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* PRODUCT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl dark:bg-[#142019]"
          >
            <div
              className={`flex min-h-[420px] items-center justify-center rounded-[1.5rem] ${selectedProduct.color}`}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[150px] drop-shadow-2xl"
              >
                {selectedProduct.emoji}
              </motion.div>
            </div>
          </motion.div>

          {/* ORDER DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            {/* Category */}
            <span className="mb-3 w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700 dark:bg-violet-600/10 dark:text-violet-400">
              {selectedProduct.category}
            </span>

            {/* Name */}
            <h1 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              {selectedProduct.name}
            </h1>

            {/* Description */}
            <p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-400">
              {selectedProduct.description}
            </p>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-3xl font-black text-violet-600">
                ₹{selectedProduct.price}
              </span>

              <span className="text-lg text-slate-400 line-through">
                ₹{selectedProduct.oldPrice}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-600">
                ⭐ {selectedProduct.rating}
              </span>
            </div>

            {/* QUANTITY */}
            <div className="mt-8">
              <p className="mb-3 font-bold text-slate-900 dark:text-white">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#18251e]">
                {/* Minus */}
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className={`flex h-14 w-14 items-center justify-center transition ${
                    quantity === 1
                      ? "cursor-not-allowed text-slate-300 dark:text-slate-600"
                      : "text-slate-700 hover:bg-violet-50 hover:text-violet-600 dark:text-white dark:hover:bg-violet-600/10"
                  }`}
                >
                  <Minus size={19} />
                </button>

                {/* Quantity */}
                <span className="flex h-14 min-w-16 items-center justify-center border-x border-slate-200 px-4 text-lg font-black text-slate-900 dark:border-slate-700 dark:text-white">
                  {quantity}
                </span>

                {/* Plus */}
                <button
                  onClick={increaseQuantity}
                  className="flex h-14 w-14 items-center justify-center text-slate-700 transition hover:bg-violet-50 hover:text-violet-600 dark:text-white dark:hover:bg-violet-600/10"
                >
                  <Plus size={19} />
                </button>
              </div>
            </div>

            {/* TOTAL */}
            <div className="mt-8 flex items-center justify-between rounded-2xl bg-violet-50 p-5 dark:bg-violet-600/10">
              <span className="font-semibold text-slate-600 dark:text-slate-300">
                Total Amount
              </span>

              <span className="text-2xl font-black text-violet-600">
                ₹{total}
              </span>
            </div>

            {/* BUTTONS */}
            {!ordered ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {/* Place Order */}
                <button
                  onClick={handlePlaceOrder}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-4 font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <ShoppingBag size={20} />
                  Place Order
                </button>

                {/* Remove Order */}
                <button
                  onClick={removeOrder}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 font-bold text-red-600 transition hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
                >
                  <Trash2 size={19} />
                  Remove Order
                </button>
              </div>
            ) : (
              <div className="mt-6">
                {/* Success */}
                <div className="rounded-2xl bg-green-50 p-5 text-center dark:bg-green-500/10">
                  <CheckCircle2 className="mx-auto mb-2 h-9 w-9 text-green-500" />

                  <h3 className="font-bold text-green-700 dark:text-green-400">
                    Order Placed Successfully!
                  </h3>

                  <p className="mt-1 text-sm text-green-600 dark:text-green-300">
                    {quantity} × {selectedProduct.name} is being prepared.
                  </p>

                  <p className="mt-2 text-lg font-black text-green-700 dark:text-green-400">
                    Total: ₹{total}
                  </p>
                </div>

                {/* Remove after order */}
                <button
                  onClick={removeOrder}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 font-bold text-red-600 transition hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
                >
                  <Trash2 size={19} />
                  Remove Order
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
