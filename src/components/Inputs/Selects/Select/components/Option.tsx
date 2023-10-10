import { OptionProps, components } from "react-select";
import Typography from "@/components/Typography";
import { OptionType } from "../../../Inputs.types";

export default function Option(props: OptionProps<OptionType, true>) {
  const { children, isSelected } = props;

  return (
    <components.Option {...props}>
      {typeof children === "string" ? (
        <Typography
          text={children}
          color={isSelected ? "white" : "base"}
          capitalizeFirstLetter
        />
      ) : (
        children
      )}
    </components.Option>
  );
}
