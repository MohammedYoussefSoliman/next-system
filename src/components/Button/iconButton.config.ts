import { cva } from "class-variance-authority";

const config = cva(
  [
    "flex",
    "items-center",
    "justify-center",
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
          "p-2",
          "w-8",
          "h-8",
          "md:w-9",
          "md:h-9",
          "lg:w-10",
          "lg:h-10",
          "md:rounded-lg",
          "xl:rounded-2xl",
        ],
        medium: [
          "p-2",
          "w-10",
          "h-10",
          "md:w-11",
          "md:h-11",
          "lg:w-12",
          "lg:h-12",
          "md:rounded-lg",
          "xl:rounded-2xl",
        ],
        large: [
          "p-2",
          "w-12",
          "h-12",
          "md:w-13",
          "md:h-13",
          "lg:w-14",
          "lg:h-14",
          "md:rounded-xl",
          "xl:rounded-2xl",
        ],
        xLarge: [
          "p-2",
          "w-14",
          "h-14",
          "md:w-15",
          "md:h-15",
          "lg:w-16",
          "lg:h-16",
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
