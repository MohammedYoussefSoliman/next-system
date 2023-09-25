import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/hooks";
import { AvatarProps } from "./Avatar.types";

const getAbbreviation = (username: string): string => {
  const nameArray = username.split(" ");
  const firstLetter = nameArray[0][0];
  let lastLetter = "";

  if (nameArray.length > 1) {
    lastLetter = nameArray[nameArray.length - 1][0];
  }

  return `${firstLetter}${lastLetter}`;
};

export default function Avatar({ image, username, isLink }: AvatarProps) {
  const { language } = useAppSelector((state) => state.ui);
  const abbreviation = React.useMemo(
    () => getAbbreviation(username),
    [username]
  );

  return (
    <>
      {image ? (
        <>
          {isLink ? (
            <Link
              href={`/${language}/dashboard`}
              className="rounded-full overflow-hidden w-10 h-10 hover:border-orange-400"
            >
              <Image
                src={image}
                width={40}
                height={40}
                alt={`${username}-image`}
                className="object-cover"
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          ) : (
            <div className="rounded-full overflow-hidden w-10 h-10">
              <Image
                src={image}
                width={40}
                height={40}
                alt={`${username}-image`}
                className="object-cover"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </>
      ) : (
        <>
          {isLink ? (
            <Link
              href={`/${language}/dashboard`}
              className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:border-2 hover:border-orange-500"
            >
              <p className="uppercase text-white text-lg font-bold !leading-3 mt-2">
                {abbreviation}
              </p>
            </Link>
          ) : (
            <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center">
              <p className="uppercase text-white text-lg font-bold mt-2 !leading-5">
                {abbreviation}
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
