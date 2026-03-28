"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { skillsData } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="glow -bottom-40 -right-40" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="What I work with" title="Skills & Technologies" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 text-sm text-muted-fg group-hover:text-foreground transition-colors"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent-light" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
