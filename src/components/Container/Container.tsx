import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
};

export default function Container({ children, spacing }: Props) {
  return (
    <div className={`container mx-auto ${spacing ? `px-${spacing}` : ""}`}>
      {children}
    </div>
  );
}
