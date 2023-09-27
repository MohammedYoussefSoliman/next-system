import { cva } from "class-variance-authority";

const config = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "font-medium",
    "outline-none",
    "border-none",
    "cursor-pointer",
    "rounded-xl",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white",
          "bg-gradient-to-r",
          "from-rose-500",
          "to-amber-500",
          "enabled:hover:from-rose-600",
          "enabled:hover:to-amber-600",
        ],
        secondary: [
          "text-rose-600",
          "bg-rose-100",
          "enabled:hover:bg-rose-200",
        ],
        transparent: ["text-rose-600", "enabled:hover:bg-rose-100"],
      },
      size: {
        small: [
          "py-2",
          "px-4",
          "h-8",
          "text-sm",
          "md:rounded-lg",
          "xl:rounded-2xl",
        ],
        medium: [
          "py-2",
          "px-6",
          "h-10",
          "text-base",
          "md:rounded-lg",
          "xl:rounded-xl",
        ],
        large: [
          "py-2",
          "px-9",
          "h-12",
          "text-lg",
          "md:rounded-xl",
          "xl:rounded-2xl",
        ],
        xLarge: [
          "py-3",
          "px-12",
          "h-14",
          "text-xl",
          "rounded-xl",
          "xl:rounded-2xl",
        ],
      },
      width: {
        full: "w-full",
        min: "w-min",
        max: "w-max",
        fit: "w-fit",
        initial: "min-w-32",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      width: "initial",
    },
  }
);

export default config;
