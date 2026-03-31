"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experienceData } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-32">
      <div className="glow -top-40 -right-40" />

      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading label="Where I've worked" title="Experience" />

        {/* Timeline */}
        <div className="relative mt-10 sm:mt-12">
          {/* Vertical line — anchored to dot center (left-[7px] = 14px/2 dot width center) */}
          <div
            className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent-light/30 to-transparent md:left-[9px]"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative pl-8 sm:pl-10 md:pl-12"
              >
                {/* Timeline dot — centered on the vertical line */}
                <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center md:h-[18px] md:w-[18px]">
                  <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/30 animate-ping md:h-[18px] md:w-[18px]" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-accent md:h-3 md:w-3" />
                </span>

                {/* Card */}
                <div className="group rounded-xl sm:rounded-2xl border border-card-border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  {/* Header */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground sm:text-lg" aria-label={exp.title}>
                        {exp.title}
                      </h3>
                      <p className="flex items-center gap-1.5 text-xs font-medium text-accent-light sm:text-sm">
                        <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] text-muted-fg sm:mt-0 sm:gap-3 sm:text-xs sm:text-right">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                    {exp.description.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted-fg sm:text-sm"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-light/60 sm:h-1.5 sm:w-1.5" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-card-border px-2 py-0.5 text-[10px] font-medium text-muted-fg transition-colors group-hover:border-accent/20 group-hover:text-foreground sm:px-3 sm:text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
