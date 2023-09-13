import { SVGProp } from "./icon.types";

function AppleIcon({ size }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3399 8.50055C20.2123 8.59956 17.9593 9.86909 17.9593 12.692C17.9593 15.9571 20.8262 17.1122 20.912 17.1408C20.8988 17.2112 20.4565 18.7228 19.4004 20.2629C18.4587 21.6183 17.4752 22.9714 15.9791 22.9714C14.4829 22.9714 14.0979 22.1023 12.3707 22.1023C10.6876 22.1023 10.0891 23 8.72057 23C7.35204 23 6.39714 21.7459 5.29923 20.2057C4.0275 18.3971 3 15.5875 3 12.9208C3 8.64356 5.78108 6.37514 8.51815 6.37514C9.9725 6.37514 11.1848 7.33003 12.0979 7.33003C12.967 7.33003 14.3223 6.31793 15.9769 6.31793C16.604 6.31793 18.857 6.37514 20.3399 8.50055ZM15.1914 4.50715C15.8757 3.69527 16.3597 2.56876 16.3597 1.44224C16.3597 1.28603 16.3465 1.12761 16.3179 1C15.2046 1.0418 13.8801 1.74147 13.0814 2.66777C12.4543 3.38064 11.8691 4.50715 11.8691 5.64906C11.8691 5.82068 11.8977 5.9923 11.9109 6.0473C11.9813 6.06051 12.0957 6.07591 12.2101 6.07591C13.209 6.07591 14.4653 5.40704 15.1914 4.50715Z"
        fill="black"
      />
    </svg>
  );
}

export default AppleIcon;
