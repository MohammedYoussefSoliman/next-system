import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function FlashIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08717 13.2809H9.17717V20.4809C9.17717 22.1609 10.0872 22.5009 11.1972 21.2409L18.7672 12.6409C19.6972 11.5909 19.3072 10.7209 17.8972 10.7209H14.8072V3.52087C14.8072 1.84087 13.8972 1.50087 12.7872 2.76087L5.21717 11.3609C4.29717 12.4209 4.68717 13.2809 6.08717 13.2809Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FlashIcon;
