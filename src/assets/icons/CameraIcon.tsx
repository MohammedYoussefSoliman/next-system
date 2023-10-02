import colors from "tailwindcss/colors";
import { SVGProp } from "./icon.types";

function CameraIcon({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.53 20.4181H6.21C3.05 20.4181 2 18.3181 2 16.2081V7.78813C2 4.62812 3.05 3.57812 6.21 3.57812H12.53C15.69 3.57812 16.74 4.62812 16.74 7.78813V16.2081C16.74 19.3681 15.68 20.4181 12.53 20.4181Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M19.5222 17.0962L16.7422 15.1462V8.83623L19.5222 6.88623C20.8822 5.93623 22.0022 6.51623 22.0022 8.18623V15.8062C22.0022 17.4762 20.8822 18.0562 19.5222 17.0962Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
        stroke={color || colors.gray[400]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CameraIcon;
