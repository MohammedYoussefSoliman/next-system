import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function HammerIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0125 18.5125L15.0625 13.5625"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0622 13.56L11.5222 17.1C10.7422 17.88 9.47219 17.88 8.69219 17.1L4.45219 12.86C3.67219 12.08 3.67219 10.81 4.45219 10.03L11.5222 2.96C12.3022 2.18 13.5722 2.18 14.3522 2.96L18.5922 7.20002C19.3722 7.98002 19.3722 9.25001 18.5922 10.03L15.0622 13.56Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M2 21H8"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.5625 7.92188L13.6325 14.9919"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HammerIcon;
