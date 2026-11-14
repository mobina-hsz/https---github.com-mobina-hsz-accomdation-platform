import * as React from "react";
import { cn } from "@/lib/utils";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost" | "secondary"; size?: "default" | "sm" | "lg" | "icon" };
export function Button({ className, variant = "default", size = "default", ...props }: Props) {
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2", variant === "default" && "bg-teal-800 text-white hover:bg-teal-900", variant === "outline" && "border border-stone-200 bg-white text-stone-700 hover:border-teal-700 hover:text-teal-800", variant === "ghost" && "text-stone-600 hover:bg-stone-100", variant === "secondary" && "bg-teal-50 text-teal-900 hover:bg-teal-100", size === "default" && "h-11 px-5 text-sm", size === "sm" && "h-9 px-3 text-xs", size === "lg" && "h-13 px-7 text-base", size === "icon" && "size-10", className)} {...props} />;
}
