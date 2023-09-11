import { cva } from "class-variance-authority";

const config = cva(["flex", "items-center", "w-full", "gap-4", "p-4"], {
  variants: {
    status: {
      info: ["bg-white", "m-4", "rounded-md"],
      success: ["bg-green-600"],
      failure: ["bg-red-600"],
    },
  },
  defaultVariants: {
    status: "info",
  },
});

export default config;
