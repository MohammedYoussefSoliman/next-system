import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function GlobeIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00156 3H9.00156C7.05156 8.84 7.05156 15.16 9.00156 21H8.00156"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3C16.95 8.84 16.95 15.16 15 21"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.00156C8.84 7.05156 15.16 7.05156 21 9.00156"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GlobeIcon;