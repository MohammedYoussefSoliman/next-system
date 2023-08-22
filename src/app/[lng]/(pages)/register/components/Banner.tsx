import React from "react";
import Image from "@components/Image";

export default function Banner() {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <Image
          height={756}
          width={624}
          name="register-banner.png"
          alt="register banner"
        />
      </div>
      <div className="flex justify-between text-white">dddd numbers</div>
    </div>
  );
}
