
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const backgroundFruits = ["🍊", "🍓", "🥭", "🍍", "🍉", "🍋"];

export default function LoadingScreen() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      // Stage 0: Cutting
      setTimeout(() => setStage(1), 2200),

      // Stage 1: Fruits entering mixer
      setTimeout(() => setStage(2), 3800),

      // Stage 2: Blending
      setTimeout(() => setStage(3), 5400),

      // Stage 3: Pouring
      setTimeout(() => setStage(4), 7000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#16091f]">
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

        <div className="absolute left-[8%] top-[15%] h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="absolute bottom-[8%] right-[8%] h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* ================================================= */}
      {/* FLOATING BACKGROUND FRUITS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {backgroundFruits.map((fruit, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 0.1,
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              delay: index * 0.15,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-6xl"
            style={{
              left: `${8 + index * 16}%`,
              top: `${12 + (index % 3) * 28}%`,
            }}
          >
            {fruit}
          </motion.div>
        ))}
      </div>

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6">
        {/* ================================================= */}
        {/* BRAND */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: stage >= 4 ? 1 : 0.9,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-pink-300">
            Freshness in progress
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            JUICE{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              MALL
            </span>
          </h1>
        </motion.div>

        {/* ================================================= */}
        {/* STAGE 0 - CLEAR FRUIT CUTTING */}
        {/* ================================================= */}

        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative flex h-[330px] w-full items-center justify-center"
          >
            {/* Board shadow */}
            <div className="absolute bottom-[42px] h-8 w-[300px] rounded-full bg-black/30 blur-xl" />

            {/* Wooden cutting board */}
            <div className="absolute bottom-[55px] h-[32px] w-[300px] rounded-[1.2rem] border-4 border-[#6f321f] bg-gradient-to-b from-[#b96845] to-[#7f3926] shadow-2xl">
              <div className="absolute left-5 right-5 top-2 h-1 rounded-full bg-white/20" />
            </div>

            {/* Board handle */}
            <div className="absolute bottom-[63px] right-[calc(50%-150px)] h-3 w-10 rounded-full bg-[#552718]" />

            {/* ================================================= */}
            {/* WHOLE ORANGE */}
            {/* ================================================= */}

            <motion.div
              initial={{
                scale: 1,
              }}
              animate={{
                scale: [1, 0.94, 1, 0.94, 1, 0.94, 1],
                x: [0, -3, 0, -3, 0, -3, 0],
              }}
              transition={{
                duration: 1.7,
                ease: "easeInOut",
              }}
              className="absolute bottom-[82px] left-1/2 z-20 -translate-x-1/2"
            >
              <div className="relative h-[105px] w-[105px] rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 shadow-[0_15px_25px_rgba(0,0,0,0.35)]">
                {/* Orange texture */}
                <div className="absolute inset-3 rounded-full border border-orange-300/40" />

                <div className="absolute left-7 top-6 h-2 w-2 rounded-full bg-orange-200/60" />

                <div className="absolute right-8 top-9 h-2 w-2 rounded-full bg-orange-200/50" />

                <div className="absolute bottom-7 left-10 h-2 w-2 rounded-full bg-orange-200/40" />

                {/* Leaf */}
                <div className="absolute -top-5 left-[48%] h-7 w-4 -rotate-35 rounded-full bg-green-500" />
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* LEFT CUT HALF */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 0,
                rotate: 0,
              }}
              animate={{
                opacity: [0, 0, 1],
                x: [0, 0, -48],
                rotate: [0, 0, -18],
              }}
              transition={{
                delay: 1.45,
                duration: 0.65,
                ease: "easeOut",
              }}
              className="absolute bottom-[82px] left-[calc(50%-52px)] z-30"
            >
              <div className="relative h-[100px] w-[52px] overflow-hidden rounded-l-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 shadow-xl">
                <div className="absolute inset-4 rounded-l-full border-4 border-orange-200/80" />

                <div className="absolute left-7 top-8 h-2 w-2 rounded-full bg-orange-100" />

                <div className="absolute left-6 top-14 h-2 w-2 rounded-full bg-orange-100" />
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* RIGHT CUT HALF */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 0,
                rotate: 0,
              }}
              animate={{
                opacity: [0, 0, 1],
                x: [0, 48, 65],
                rotate: [0, 0, 18],
              }}
              transition={{
                delay: 1.45,
                duration: 0.65,
                ease: "easeOut",
              }}
              className="absolute bottom-[82px] left-[calc(50%)] z-30"
            >
              <div className="relative h-[100px] w-[52px] overflow-hidden rounded-r-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 shadow-xl">
                <div className="absolute inset-4 rounded-r-full border-4 border-orange-200/80" />

                <div className="absolute right-7 top-8 h-2 w-2 rounded-full bg-orange-100" />

                <div className="absolute right-6 top-14 h-2 w-2 rounded-full bg-orange-100" />
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* KNIFE */}
            {/* ================================================= */}

            <motion.div
              initial={{
                x: 70,
                y: -100,
                rotate: -25,
              }}
              animate={{
                x: [70, 18, 70, 18, 70],
                y: [-100, -5, -100, -5, -100],
                rotate: [-25, -8, -25, -8, -25],
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[42px] z-40 origin-bottom"
            >
              {/* Blade */}
              <div className="relative h-5 w-[150px] rounded-l-sm rounded-r-[2rem] bg-gradient-to-b from-white via-slate-200 to-slate-400 shadow-[0_5px_12px_rgba(0,0,0,0.35)]">
                <div className="absolute left-3 right-10 top-1 h-[2px] rounded-full bg-white" />

                {/* Handle */}
                <div className="absolute -right-9 -top-1 h-7 w-12 rounded-r-lg bg-gradient-to-b from-slate-700 to-slate-950 shadow-lg" />

                <div className="absolute -right-6 top-1 h-1 w-7 rounded-full bg-white/20" />
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* CUTTING IMPACT LINES */}
            {/* ================================================= */}

            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 1],
                }}
                transition={{
                  delay: 0.72 + item * 0.48,
                  duration: 0.35,
                }}
                className="absolute z-50 h-8 w-1 origin-bottom rounded-full bg-white/80"
                style={{
                  left: `${47 + item * 4}%`,
                  top: `${42 + item * 3}%`,
                  rotate: `${item % 2 === 0 ? -25 : 25}deg`,
                }}
              />
            ))}

            {/* ================================================= */}
            {/* FRUIT PIECES FLYING */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 0, 1, 1],
                x: [0, 0, -90, -110],
                y: [0, 0, 20, 65],
                rotate: [0, 0, -120, -220],
              }}
              transition={{
                delay: 1.55,
                duration: 0.7,
              }}
              className="absolute bottom-[105px] left-[47%] z-50 text-2xl"
            >
              🍊
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 0, 1, 1],
                x: [0, 0, 90, 115],
                y: [0, 0, 25, 70],
                rotate: [0, 0, 100, 200],
              }}
              transition={{
                delay: 1.55,
                duration: 0.7,
              }}
              className="absolute bottom-[105px] left-[47%] z-50 text-2xl"
            >
              🍊
            </motion.div>

            {/* ================================================= */}
            {/* STATUS */}
            {/* ================================================= */}

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="absolute bottom-0 flex items-center gap-2 text-sm font-bold text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-pink-400" />
              Cutting fresh fruits...
            </motion.div>
          </motion.div>
        )}

        {/* ================================================= */}
        {/* STAGE 1 - FRUITS INTO MIXER */}
        {/* ================================================= */}

        {stage === 1 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="relative flex h-[330px] w-full items-center justify-center"
          >
            {/* Falling fruits */}

            {["🍓", "🥭", "🍊", "🍍"].map((fruit, index) => (
              <motion.div
                key={index}
                initial={{
                  y: -170,
                  x: (index - 1.5) * 60,
                  rotate: 0,
                  opacity: 0,
                }}
                animate={{
                  y: [0, 120],
                  rotate: [0, 360],
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.18,
                  duration: 0.9,
                  ease: "easeIn",
                }}
                className="absolute top-0 text-5xl"
              >
                {fruit}
              </motion.div>
            ))}

            {/* Mixer */}
            <div className="absolute bottom-8 flex flex-col items-center">
              {/* Lid */}
              <div className="h-5 w-36 rounded-t-xl bg-slate-500 shadow-lg" />

              {/* Glass jar */}
              <div className="relative h-36 w-32 overflow-hidden rounded-b-[2rem] rounded-t-lg border-4 border-white/30 bg-white/10 backdrop-blur">
                {/* Juice */}
                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: "75%",
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                  className="absolute bottom-0 w-full bg-gradient-to-t from-violet-700 via-fuchsia-500 to-pink-400"
                />

                {/* Fruit pieces */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-1 p-5 text-2xl">
                  🍓 🥭 🍊 🍍
                </div>
              </div>

              {/* Mixer base */}
              <div className="h-12 w-40 rounded-b-2xl rounded-t-md bg-gradient-to-b from-slate-700 to-slate-900 shadow-xl" />

              {/* Power light */}
              <div className="mt-2 h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.8)]" />
            </div>

            <p className="absolute bottom-0 text-sm font-semibold text-white/60">
              Adding fresh fruits...
            </p>
          </motion.div>
        )}

        {/* ================================================= */}
        {/* STAGE 2 - MIXER BLENDING */}
        {/* ================================================= */}

        {stage === 2 && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative flex h-[330px] w-full flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Lid */}
              <div className="mx-auto h-5 w-36 rounded-t-xl bg-slate-500" />

              {/* Jar */}
              <div className="relative h-40 w-36 overflow-hidden rounded-b-[2rem] rounded-t-lg border-4 border-white/30 bg-white/10 backdrop-blur">
                {/* Juice */}
                <motion.div
                  initial={{
                    height: "25%",
                  }}
                  animate={{
                    height: ["30%", "85%", "55%", "90%"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 w-full bg-gradient-to-t from-violet-800 via-fuchsia-600 to-pink-400"
                />

                {/* Swirl */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="absolute left-1/2 top-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-white/60" />

                  <div className="absolute left-1/2 top-1/2 h-2 w-20 -translate-x-1/2 rotate-90 rounded-full bg-white/40" />
                </motion.div>

                {/* Bubbles */}
                {[...Array(8)].map((_, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      x: index * 8 - 28,
                      y: 40,
                    }}
                    animate={{
                      y: [-10, -60],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-8 left-1/2 h-2 w-2 rounded-full bg-white/50"
                  />
                ))}
              </div>

              {/* Mixer base */}
              <div className="h-14 w-44 rounded-b-2xl rounded-t-md bg-gradient-to-b from-slate-700 to-slate-950 shadow-2xl" />

              {/* Power button */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(236,72,153,0.3)",
                    "0 0 25px rgba(236,72,153,0.8)",
                    "0 0 5px rgba(236,72,153,0.3)",
                  ],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                className="mx-auto mt-2 h-3 w-3 rounded-full bg-pink-400"
              />
            </div>

            <p className="absolute bottom-0 text-sm font-semibold text-white/60">
              Blending your fresh juice...
            </p>
          </motion.div>
        )}

        {/* ================================================= */}
        {/* STAGE 3 - POURING INTO GLASS */}
        {/* ================================================= */}

        {stage === 3 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="relative flex h-[330px] w-full items-center justify-center"
          >
            {/* Juice stream */}
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: 130,
              }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
              }}
              className="absolute left-[53%] top-[42px] z-20 w-5 -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-400 to-violet-600 shadow-[0_0_18px_rgba(217,70,239,0.5)]"
            />

            {/* Juice container */}
            <motion.div
              initial={{
                rotate: 0,
                y: -40,
              }}
              animate={{
                rotate: -25,
                y: -20,
              }}
              transition={{
                duration: 0.8,
              }}
              className="absolute right-[18%] top-5"
            >
              <div className="flex h-28 w-20 items-center justify-center rounded-b-3xl rounded-t-xl border-4 border-white/30 bg-gradient-to-br from-fuchsia-500/80 to-violet-700/80 shadow-2xl">
                🧃
              </div>
            </motion.div>

            {/* Glass */}
            <div className="absolute bottom-8 left-1/2 h-40 w-28 -translate-x-1/2 overflow-hidden rounded-b-[2rem] rounded-t-lg border-4 border-white/50 bg-white/10 shadow-2xl backdrop-blur">
              {/* Juice */}
              <motion.div
                initial={{
                  height: "0%",
                }}
                animate={{
                  height: "72%",
                }}
                transition={{
                  delay: 0.6,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 w-full bg-gradient-to-t from-violet-800 via-fuchsia-500 to-pink-400"
              />

              {/* Bubbles */}
              <motion.div
                animate={{
                  y: [-5, -20, -5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="absolute bottom-16 left-7 text-xl"
              >
                ✨
              </motion.div>

              <motion.div
                animate={{
                  y: [-5, -25, -5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-5 text-sm"
              >
                ✨
              </motion.div>
            </div>

            <p className="absolute bottom-0 text-sm font-semibold text-white/60">
              Pouring freshness into your glass...
            </p>
          </motion.div>
        )}

        {/* ================================================= */}
        {/* STAGE 4 - FINAL REVEAL */}
        {/* ================================================= */}

        {stage >= 4 && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex flex-col items-center"
          >
            {/* Juice icon */}
            <motion.div
              initial={{
                scale: 0,
                rotate: -20,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
              }}
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-5xl shadow-[0_20px_70px_rgba(217,70,239,0.35)]"
            >
              🧃
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-3xl font-black text-white"
            >
              Your juice is ready!
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-2 text-sm text-white/50"
            >
              Fresh. Fruity. Made for you.
            </motion.p>

            {/* Small fruit row */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="mt-5 flex gap-2 text-2xl"
            >
              🍊 🍓 🥭 🍍
            </motion.div>
          </motion.div>
        )}

        {/* ================================================= */}
        {/* PROGRESS INDICATOR */}
        {/* ================================================= */}

        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2, 3, 4].map((item) => (
            <motion.span
              key={item}
              animate={{
                width: stage >= item ? 28 : 7,
                opacity: stage >= item ? 1 : 0.3,
              }}
              transition={{
                duration: 0.3,
              }}
              className="h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}