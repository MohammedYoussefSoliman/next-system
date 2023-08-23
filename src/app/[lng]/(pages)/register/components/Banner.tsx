import React from "react";
import Image from "@components/Image";

import Counter from "./Counter";

export default function Banner() {
  return (
    <div className="relative w-full md:w-[624px] mr-auto">
      <div className="w-full h-full">
        <Image
          height={756}
          width={624}
          name="register-banner.png"
          alt="register banner"
        />
      </div>
      <div className="flex justify-between absolute top-0 left-0 w-full h-full mr-auto p-12">
        <Counter number={43} label="categories" />
        <Counter number={30} label="products" />
        <Counter number={26} label="providers" />
      </div>
    </div>
  );
}
