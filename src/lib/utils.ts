import { useState, useEffect } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* ─── Tailwind class merge (shadcn-style) ─── */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─── Typewriter hook (used by Hero) ─── */
export function useTypewriter(words: readonly string[], holdMs = 1500) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % words.length;
      const fullText = words[i];
      const updated = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updated);

      if (!isDeleting && updated === fullText) {
        // Word fully typed — hold before deleting
        setIsDeleting(true);
        setDelta(holdMs);
      } else if (isDeleting && updated === "") {
        // Finished deleting — move to next word
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(300);
      } else if (isDeleting) {
        // Steady deletion speed (clamped so short words stay visible)
        setDelta(60);
      } else {
        // Typing speed with slight variance
        setDelta(120 + Math.random() * 40);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, words, holdMs]);

  return text;
}
