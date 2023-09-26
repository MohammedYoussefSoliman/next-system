import React from "react";

type HTMLProps = {
  content: string;
};

export default function HTML({ content }: HTMLProps) {
  return (
    <div
      className="html-content w-full"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
