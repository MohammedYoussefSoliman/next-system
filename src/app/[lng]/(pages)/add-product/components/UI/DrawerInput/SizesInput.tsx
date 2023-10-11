import React from "react";
import { SizesInputProps } from "../../../AddProducts.types";
import SizeCheckbox from "./SizeCheckbox";

const sizes = {
  adult: [
    { label: "xss_size", description: "xss_size_description" },
    { label: "xs_size", description: "xs_size_description" },
    { label: "s_size", description: "s_size_description" },
    { label: "m_size", description: "m_size_description" },
    { label: "l_size", description: "l_size_description" },
    { label: "xl_size", description: "xl_size_description" },
    { label: "xxl_size", description: "xxl_size_description" },
    { label: "xxxl_size", description: "xxxl_size_description" },
    { label: "xxxxl_size", description: "xxxxl_size_description" },
  ],
  child: [
    { label: "0-3 month" },
    { label: "3-6 month" },
    { label: "6-9 month" },
    { label: "9-12 month" },
    { label: "12-18 month" },
    { label: "18-24 month" },
    { label: "2-3 years" },
    { label: "4 years" },
    { label: "5 years" },
    { label: "6 years" },
    { label: "7 years" },
    { label: "8 years" },
    { label: "9 years" },
    { label: "10 years" },
    { label: "11 years" },
    { label: "12 years" },
    { label: "13 years" },
    { label: "14 years" },
    { label: "15 years" },
  ],
};

export default function SizesInput({ name, type }: SizesInputProps) {
  const checks = React.useMemo(() => sizes[type], [type]);
  return (
    <div className="flex flex-col w-full">
      {checks.map((check) => (
        <SizeCheckbox
          key={`${name}-${check.label}`}
          name={name}
          {...check}
          value={check.label}
        />
      ))}
    </div>
  );
}
