import colors from "tailwindcss/colors";
import { mediaSizes } from "@/utils";

type SelectStyles = {
  error?: boolean;
};

const useSelectStyles = ({ error }: SelectStyles) => {
  return {
    control: (base: any) => ({
      ...base,
      border: `1px solid ${error ? colors.red[500] : colors.gray[400]}`,
      boxShadow: "none",
      borderRadius: "12px",
      padding: "4px",
      //   height: "50px",
      width: "100%",
      "&:hover": {
        border: `1px solid  ${colors.gray[500]}`,
        background: colors.amber[50],
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      padding: "6px",
      height: "100%",
      borderRadius: "6px",
      background: `${
        state.isSelected
          ? colors.orange[300]
          : state.isFocused && !state.isSelected
          ? colors.orange[50]
          : colors.white
      }`,
      "&:hover": {
        background: !state.isSelected ? colors.orange[50] : colors.orange[300],
      },
      marginBottom: "8px",
      "&:last-of-type": {
        marginBottom: 0,
      },
    }),
    menu: (base: any) => ({
      ...base,
      border: `1px solid ${error ? colors.red[500] : colors.gray[400]}`,
      borderRadius: "10px",
      padding: "8px",
      overflow: "hidden",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: 2,
      [mediaSizes.sm]: {
        padding: 6,
      },
      [mediaSizes.md]: {
        padding: 8,
      },
    }),
  };
};

export default useSelectStyles;
