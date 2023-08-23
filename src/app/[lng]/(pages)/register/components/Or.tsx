import Typography from "@/components/Typography";
import React from "react";

export default function Or() {
  return (
    <div className="relative px-2 flex items-center justify-center before:absolute before:content-[''] before:top-[50%] before:w-full before:h-px before:bg-gray-300">
      <div className="flex h-10 w-10 p-2 bg-white items-center justify-center z-10">
        <Typography text="or" className="uppercase" namespace="register" />
      </div>
    </div>
  );
}
