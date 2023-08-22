import React from "react";
import NextImage from "next/image";

type Props = {
  name: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Image({ name, width, height, alt }: Props) {
  return (
    <NextImage
      src={`/images/${name}`}
      height={height}
      width={width}
      alt={alt}
    />
  );
}
