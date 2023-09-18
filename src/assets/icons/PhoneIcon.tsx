import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function PhoneIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.5H10"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0031 19.1C12.8592 19.1 13.5531 18.406 13.5531 17.55C13.5531 16.694 12.8592 16 12.0031 16C11.1471 16 10.4531 16.694 10.4531 17.55C10.4531 18.406 11.1471 19.1 12.0031 19.1Z"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PhoneIcon;
