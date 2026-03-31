"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-32">
      <div className="glow -top-40 -left-40" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="Get to know me" title="About Me" />

        <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-12 md:grid-cols-2">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5"
          >
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-fg sm:text-base">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Highlights column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 sm:space-y-5"
          >
            {aboutData.highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-xl border border-card-border bg-card p-4 transition-colors hover:border-accent/30 sm:p-5"
              >
                <p className="text-[11px] uppercase tracking-widest text-accent-light mb-1 sm:text-xs">
                  {h.label}
                </p>
                <p className="text-sm font-medium text-foreground sm:text-base">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
