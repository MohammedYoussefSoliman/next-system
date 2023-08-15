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
  ],
  {
    variants: {
      variant: {
        primary: ["text-white", "bg-gradient-primary"],
        secondary: ["text-rose-600", "bg-rose-100"],
      },
      size: {
        medium: [
          "py-2.5",
          "px-9",
          "h-10",
          "text-sm",
          "md:rounded-lg",
          "xl:rounded-xl",
        ],
        large: [
          "py-3",
          "px-10",
          "h-12",
          "text-base",
          "md:rounded-xl",
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
      size: "large",
      width: "initial",
    },
  }
);

export default config;
