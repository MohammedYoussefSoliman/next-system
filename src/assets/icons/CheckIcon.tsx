import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function CheckIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7101 5.29289C21.1006 5.68342 21.1006 6.31659 20.7101 6.70711L9.71003 17.7072C9.5225 17.8947 9.26814 18 9.00292 18C8.7377 18 8.48335 17.8947 8.29581 17.7071L3.29582 12.7071C2.9053 12.3166 2.9053 11.6834 3.29583 11.2929C3.68635 10.9024 4.31952 10.9024 4.71004 11.2929L9.00293 15.5858L19.2959 5.29289C19.6864 4.90237 20.3195 4.90237 20.7101 5.29289Z"
        fill={color || colors.gray[700]}
      />
    </svg>
  );
}

export default CheckIcon;
