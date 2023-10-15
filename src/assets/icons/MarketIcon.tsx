import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function MarketIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3069 12C20.3269 12 21.8069 10.36 21.6069 8.35L21.3269 5.6C20.9669 3 19.9669 2 17.3469 2H14.2969L14.9969 9.01C15.1669 10.66 16.6569 12 18.3069 12Z"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.63842 12C7.28842 12 8.77842 10.66 8.93842 9.01L9.15842 6.8L9.63842 2H6.58842C3.96842 2 2.96842 3 2.60842 5.6L2.33842 8.35C2.13842 10.36 3.61842 12 5.63842 12Z"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M3.00781 11.2188V15.7087C3.00781 20.1987 4.80781 21.9987 9.29781 21.9987H14.6878C19.1778 21.9987 20.9778 20.1987 20.9778 15.7087V11.2188"
          stroke={color || colors.gray[700]}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
          stroke={color || colors.gray[700]}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default MarketIcon;
