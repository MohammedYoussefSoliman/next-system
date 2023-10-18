import React from "react";
import Icon from "@/components/Icon";
import colors from "tailwindcss/colors";

import type { EmptyButtonProps } from "./MultiImageInput.types";

export default function EmptyFile({ disabled }: EmptyButtonProps) {
  return (
    <button
      className="w-full h-full flex items-center justify-center rounded-[14px] border-2 border-dashed border-rose-500 enabled:hover:bg-rose-50 enabled:cursor-pointer disabled:bg-gray-100 disabled:border-gray-500"
      disabled={disabled}
    >
      <Icon
        name="plus"
        color={disabled ? colors.gray[600] : colors.rose[500]}
      />
    </button>
  );
}
