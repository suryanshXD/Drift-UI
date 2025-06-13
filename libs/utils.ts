import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, resolving Tailwind CSS conflicts.
 * Uses clsx for conditional class joining and tailwind-merge for handling Tailwind class conflicts.
 *
 * @param inputs - Class values to be combined (strings, objects, arrays, etc.)
 * @returns A string of combined class names with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
