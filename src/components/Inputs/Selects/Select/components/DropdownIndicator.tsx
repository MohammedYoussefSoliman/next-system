import { DropdownIndicatorProps, components } from "react-select";
import Icon from "@/components/Icon";
import Spinner from "@/components/Spinner";
import { OptionType } from "../../../Inputs.types";

const { DropdownIndicator } = components;

type Props = DropdownIndicatorProps<OptionType, true> & {
  loading?: boolean;
};

export default function Dropdown({ loading, ...rest }: Props) {
  return (
    <DropdownIndicator {...rest}>
      <>{loading ? <Spinner /> : <Icon size={20} name="chevron-down" />}</>
    </DropdownIndicator>
  );
}
