import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function MultiProductPackIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.92 2.26375L19.43 5.77375C20.19 6.18375 20.19 7.35375 19.43 7.76375L12.92 11.2738C12.34 11.5838 11.66 11.5838 11.08 11.2738L4.57 7.76375C3.81 7.35375 3.81 6.18375 4.57 5.77375L11.08 2.26375C11.66 1.95375 12.34 1.95375 12.92 2.26375Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M3.61 10.1277L9.66 13.1577C10.41 13.5377 10.89 14.3077 10.89 15.1477V20.8677C10.89 21.6977 10.02 22.2277 9.28 21.8577L3.23 18.8277C2.48 18.4477 2 17.6777 2 16.8377V11.1177C2 10.2877 2.87 9.75773 3.61 10.1277Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M20.3894 10.1277L14.3394 13.1577C13.5894 13.5377 13.1094 14.3077 13.1094 15.1477V20.8677C13.1094 21.6977 13.9794 22.2277 14.7194 21.8577L20.7694 18.8277C21.5194 18.4477 21.9994 17.6777 21.9994 16.8377V11.1177C21.9994 10.2877 21.1294 9.75773 20.3894 10.1277Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MultiProductPackIcon;
