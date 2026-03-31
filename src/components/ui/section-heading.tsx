"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-[11px] uppercase tracking-widest text-accent-light mb-2 sm:text-xs">
        {label}
      </p>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-light sm:mt-4 sm:w-16" />
    </motion.div>
  );
}
