import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("h-11 w-full rounded-xl border border-stone-200 bg-white px-3.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10", className)} {...props} />; }
