import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// We intentionally keep this thin. clsx + twMerge is the standard
// approach used by shadcn/ui and the broader Next.js community.
// If clsx/twMerge aren't installed yet, install them with:
//   npm install clsx tailwind-merge

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
