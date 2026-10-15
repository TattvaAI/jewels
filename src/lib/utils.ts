import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amountInInr: number, currency: "INR" | "USD" = "INR"): string {
  if (currency === "USD") {
    // Standard conversion factor ~86 INR per USD, rounded for luxury pricing
    const usd = Math.max(1, Math.round(amountInInr / 18));
    return `$${usd}`;
  }
  return `₹${amountInInr.toLocaleString("en-IN")}`;
}
