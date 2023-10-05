import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function ChevronLeftIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0975 4L8.5775 10.52C7.8075 11.29 7.8075 12.55 8.5775 13.32L15.0975 19.84"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
