import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function BellIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0225 2.90625C8.71253 2.90625 6.02253 5.59625 6.02253 8.90625V11.7963C6.02253 12.4063 5.76253 13.3362 5.45253 13.8562L4.30253 15.7663C3.59253 16.9463 4.08253 18.2563 5.38253 18.6963C9.69253 20.1363 14.3425 20.1363 18.6525 18.6963C19.8625 18.2963 20.3925 16.8663 19.7325 15.7663L18.5825 13.8562C18.2825 13.3362 18.0225 12.4063 18.0225 11.7963V8.90625C18.0225 5.60625 15.3225 2.90625 12.0225 2.90625Z"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8719 3.1975C13.5619 3.1075 13.2419 3.0375 12.9119 2.9975C11.9519 2.8775 11.0319 2.9475 10.1719 3.1975C10.4619 2.4575 11.1819 1.9375 12.0219 1.9375C12.8619 1.9375 13.5819 2.4575 13.8719 3.1975Z"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M15.0234 19.0625C15.0234 20.7125 13.6734 22.0625 12.0234 22.0625C11.2034 22.0625 10.4434 21.7225 9.90344 21.1825C9.36344 20.6425 9.02344 19.8825 9.02344 19.0625"
        stroke={color || colors.gray[700]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default BellIcon;
