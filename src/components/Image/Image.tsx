import React from "react";
import NextImage from "next/image";

type Props = {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  isNotRelative?: boolean;
};

export default function Image({
  name,
  width,
  height,
  alt,
  className,
  style,
  isNotRelative,
}: Props) {
  return (
    <NextImage
      src={isNotRelative ? name : `/images/${name}`}
      height={height}
      width={width}
      alt={alt}
      className={className}
      style={style}
      draggable={false}
    />
  );
}
