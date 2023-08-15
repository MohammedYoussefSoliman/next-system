import { cva } from "class-variance-authority";

const config = cva(["text-grey-800", "font-normal"], {
  variants: {
    as: {
      p1: ["text-base", "md:text-lg"],
      p2: ["text-[0.625rem]", "md:text-lg"],
      h1: ["text-4xl", "md:text-5xl", "xl:text-6xl", "font-bold"],
      h2: ["text-3xl", "md:text-4xl", "xl:text-5xl", "font-bold"],
      h3: ["text-2xl", "md:text-3xl", "xl:text-4xl", "font-bold"],
      h4: ["text-xl", "md:text-2xl", "xl:text-3xl", "font-bold"],
      h5: ["text-lg", "md:text-xl", "xl:text-2xl", "font-medium"],
      h6: ["text-base", "md:text-lg", "xl:text-xl", "font-medium"],
      small: ["text-[0.5rem]", "md:text-[0.625rem]"],
    },
    color: {
      base: ["text-grey-800", "dark:text-white"],
      success: ["text-green-500", "dark:text-green-400"],
      warn: ["text-amber-500", "dark:text-amber-400"],
      error: ["text-red-500", "dark:text-red-400"],
    },
  },
  defaultVariants: {
    as: "p1",
    color: "base",
  },
});

export default config;