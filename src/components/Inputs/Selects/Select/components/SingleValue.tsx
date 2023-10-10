import { SingleValueProps, components } from "react-select";
import Typography from "@/components/Typography";
import { OptionType } from "../../../Inputs.types";

export default function SingleValue({
  children,
  ...props
}: SingleValueProps<OptionType, true>) {
  return (
    <components.SingleValue {...props}>
      {typeof children === "string" ? (
        <Typography text={children} capitalizeFirstLetter />
      ) : (
        children
      )}
    </components.SingleValue>
  );
}
