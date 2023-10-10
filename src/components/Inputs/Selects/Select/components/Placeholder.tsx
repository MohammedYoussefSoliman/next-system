import { PlaceholderProps, components } from "react-select";
import Typography from "@/components/Typography";
import { OptionType } from "../../../Inputs.types";

export default function Placeholder(props: PlaceholderProps<OptionType, true>) {
  const { children } = props;
  return (
    <components.Placeholder {...props}>
      {typeof children === "string" ? (
        <Typography as="p2" text={children} capitalizeFirstLetter />
      ) : (
        children
      )}
    </components.Placeholder>
  );
}
