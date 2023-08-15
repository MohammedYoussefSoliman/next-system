import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function classNames(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export default classNames;
