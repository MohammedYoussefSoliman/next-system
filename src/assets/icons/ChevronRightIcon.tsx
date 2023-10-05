import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function ChevronRightIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.40625 19.9181L15.9263 13.3981C16.6963 12.6281 16.6963 11.3681 15.9263 10.5981L9.40625 4.07812"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronRightIcon;
