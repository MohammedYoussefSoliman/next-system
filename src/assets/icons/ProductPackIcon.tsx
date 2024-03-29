import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function ProductPackIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 10.2188V18.9987C19.5 20.9987 19 21.9987 16.5 21.9987H7.5C5 21.9987 4.5 20.9987 4.5 18.9987V10.2188"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.34"
        d="M10.1797 14H13.8197"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ProductPackIcon;
