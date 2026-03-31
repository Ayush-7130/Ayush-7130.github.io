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
    <section id="skills" className="relative py-20 sm:py-24 md:py-32">
      <div className="glow -bottom-40 -right-40" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="What I work with" title="Skills & Technologies" />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group rounded-xl sm:rounded-2xl border border-card-border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-light mb-3 sm:text-sm sm:mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 text-xs text-muted-fg group-hover:text-foreground transition-colors sm:text-sm"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent-light sm:h-4 sm:w-4" />
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
