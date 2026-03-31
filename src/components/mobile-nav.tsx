"use client";

import { useState, useEffect } from "react";
import { Home, User2, Wrench, FolderOpen, Mail, Briefcase } from "lucide-react";
import { navLinks } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  About: User2,
  Experience: Briefcase,
  Skills: Wrench,
  Projects: FolderOpen,
  Contact: Mail,
};

export default function MobileNav() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sectionIds = navLinks.map((n) => n.href.slice(1));

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      observers.forEach((obs, i) => {
        const el = document.getElementById(sectionIds[i]);
        if (obs && el) obs.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-4 py-3 rounded-full border border-purple-500/20 bg-black/40 backdrop-blur-xl shadow-lg shadow-black/40">
      {navLinks.map(({ href, label }) => {
        const isActive = active === href;
        const Icon = iconMap[label];
        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            onClick={() => setActive(href)}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-accent/20 text-accent"
                : "text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {Icon && <Icon size={18} />}
          </a>
        );
      })}
    </nav>
  );
}
