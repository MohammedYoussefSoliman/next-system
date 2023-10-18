import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function PlusIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.51472 12.0009H20.4853"
        stroke={color || colors.gray[700]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.4862V3.51562"
        stroke={color || colors.gray[700]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PlusIcon;
