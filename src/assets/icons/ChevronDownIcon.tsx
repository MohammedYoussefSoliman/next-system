import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function ChevronDownIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      className="chevron"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.3759 8.24114C3.76642 7.85061 4.39959 7.85061 4.79011 8.24113L11.3101 14.7611C11.6896 15.1406 12.3164 15.1406 12.6959 14.7611L19.2159 8.24113C19.6064 7.85061 20.2396 7.85061 20.6301 8.24114C21.0206 8.63166 21.0206 9.26483 20.6301 9.65535L14.1101 16.1753C12.9496 17.3358 11.0564 17.3358 9.8959 16.1753C9.8959 16.1753 9.89591 16.1753 9.8959 16.1753L3.3759 9.65535C2.98538 9.26483 2.98538 8.63166 3.3759 8.24114Z"
        fill={color || colors.gray[700]}
      />
    </svg>
  );
}

export default ChevronDownIcon;
