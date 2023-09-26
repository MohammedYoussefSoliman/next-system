import React from "react";
import NextImage from "next/image";

type Props = {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function Image({
  name,
  width,
  height,
  alt,
  className,
  style,
}: Props) {
  return (
    <NextImage
      src={`/images/${name}`}
      height={height}
      width={width}
      alt={alt}
      className={className}
      style={style}
      draggable={false}
    />
  );
}
