"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import Image from "@/components/Image";
import Icon from "@components/Icon";
import Typography from "@/components/Typography";
import colors from "tailwindcss/colors";
import { classNames } from "@/utils";
import { CheckCircle } from "../styles";
import type { CheckboxProps } from "../../../AddProducts.types";

export default function Checkbox({ name, value, image, title }: CheckboxProps) {
  const classes = classNames([
    "relative",
    "w-full",
    "flex",
    "justify-between",
    "items-center",
    "border-b",
    "border-gray-200",
    "last-of-type:border-none",
    "py-2",
    "hover:bg-orange-50",
  ]);
  const { watch, register } = useFormContext();

  // const active = (watch(name) || []).includes(`${value}`);
  const active = watch(name) == value;

  return (
    <label className={classes}>
      <input
        type="radio"
        value={value}
        {...register(name)}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div className="flex items-center gap-2 mr-1">
        <Image
          isNotRelative
          name={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-xl"
          style={{
            objectFit: "cover",
            height: "48px",
            width: "48px",
          }}
        />
        <Typography as="p1" text={title} />
      </div>
      <CheckCircle
        className="flex items-center justify-center w-6 h-6 rounded-full ml-1"
        active={active}
      >
        <Icon size={20} name="check" color={colors.white} />
      </CheckCircle>
    </label>
  );
}
