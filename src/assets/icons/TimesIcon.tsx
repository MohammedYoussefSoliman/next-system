import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function TimesIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18L6 6"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TimesIcon;
