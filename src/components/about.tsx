"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="glow -top-40 -left-40" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="Get to know me" title="About Me" />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-fg leading-relaxed">
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
            className="space-y-5"
          >
            {aboutData.highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/30"
              >
                <p className="text-xs uppercase tracking-widest text-accent-light mb-1">
                  {h.label}
                </p>
                <p className="text-foreground font-medium">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
