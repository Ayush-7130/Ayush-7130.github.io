"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// ─── Lazy-load 3D canvas ───
const Scene3D = dynamic(() => import("@/components/scene-3d"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/20 blur-3xl" />
    </div>
  ),
});

// ─── Framer Motion variants ───
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stats = [
  { value: "12+", label: "Projects" },
  { value: "5+", label: "Years Exp." },
];

// ─── Typewriter config ───
const toRotate = ["Software Developer", "Full Stack Web Dev"];
const TYPING_PERIOD = 400;

// ─── Hero Component ───
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Typewriter state
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Typewriter tick
  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updated = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updated);

      if (isDeleting) {
        setDelta((prev) => prev / 2);
      }

      if (!isDeleting && updated === fullText) {
        setIsDeleting(true);
        setDelta(TYPING_PERIOD);
      } else if (isDeleting && updated === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(500);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* ── Deep space CSS gradient base ── */}
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          background:
            "radial-gradient(circle at center, #1a0b2e 0%, #050510 60%, #000000 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── 3D Canvas — full-screen background ── */}
      <div className="absolute inset-0 z-0">
        {mounted && !isMobile ? (
          <Scene3D />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer slow-pulse ring */}
              <div className="absolute w-56 h-56 rounded-full border border-indigo-500/20 animate-[spin_12s_linear_infinite]" />
              <div className="absolute w-44 h-44 rounded-full border border-violet-500/20 animate-[spin_8s_linear_infinite_reverse]" />
              {/* Glow aura */}
              <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-purple-700/10 blur-2xl" />
              {/* Core sphere */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700 shadow-[0_0_60px_rgba(139,92,246,0.5)]" />
            </div>
          </div>
        )}
      </div>

      {/* Left readability gradient — keeps text crisp over 3D */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/60 to-transparent z-[1] pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-[1] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── UI Content Overlay ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* ─── LEFT: Content ─── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-7"
            >
              {/* Tagline badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  Welcome to my Portfolio
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-medium text-slate-300 sm:text-3xl">
                  {"Hi! I'm"}
                </h2>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl mt-1">
                  <span className="hero-gradient-text">Ayush Kumar</span>
                </h1>
              </motion.div>

              {/* Typewriter subtitle */}
              <motion.div
                variants={itemVariants}
                className="text-lg text-slate-400 font-medium tracking-wide sm:text-xl h-8"
              >
                <span className="text-indigo-400">{text}</span>
                <span className="inline-block w-[2px] h-5 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="max-w-lg text-base leading-relaxed text-slate-500"
              >
                Passionate about software development, with project-based
                experience in full stack web development and a focus on the
                MERN stack. I employ my skills efficiently to become an asset
                while gaining true experience in real-time development.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                <a
                  href="/Resume.pdf"
                  className="hero-btn-primary group"
                  download
                >
                  <span>Download CV</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </motion.div>

            {/* ─── RIGHT: spacer (3D is in background) + Stats card ─── */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative hidden lg:flex h-[500px] items-end justify-end"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                className="hero-glass-card"
              >
                <div className="flex items-center gap-5">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-bold text-white">
                        {s.value}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wide">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
