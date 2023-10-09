import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function DrawerIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H21"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        opacity="0.34"
        d="M3 12H21"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DrawerIcon;
