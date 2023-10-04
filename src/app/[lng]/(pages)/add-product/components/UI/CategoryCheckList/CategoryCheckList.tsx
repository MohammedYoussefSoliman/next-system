import React from "react";
import { classNames } from "@/utils";
import { CheckListProps } from "../../../AddProducts.types";
import Checkbox from "./Checkbox";

export default function CategoryCheckList({
  name,
  checkItems,
}: CheckListProps) {
  const classes = classNames([
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "overflow-y-auto",
  ]);
  return (
    <div className={classes}>
      {checkItems.map(({ title, value, image }) => (
        <Checkbox
          key={`${title}-${value}`}
          title={title}
          name={name}
          value={value}
          image={image}
        />
      ))}
    </div>
  );
}
