"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 md:py-32">
      <div className="glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="What I've built" title="Projects" />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group relative flex flex-col rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Gradient top stripe */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-accent via-accent-light to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="flex-1 text-sm text-muted-fg leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-card-border px-3 py-0.5 text-[11px] font-medium text-muted-fg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent-light hover:text-foreground transition-colors sm:text-sm"
                >
                  <GithubIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent-light hover:text-foreground transition-colors sm:text-sm"
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
