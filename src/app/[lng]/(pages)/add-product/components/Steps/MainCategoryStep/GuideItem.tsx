import React from "react";
import { classNames } from "@/utils";
import { useAppSelector } from "@/hooks";
import Accordion from "@/components/Accordion";
import Image from "@/components/Image";
import Typography from "@/components/Typography";
import Icon from "@components/Icon";

type GuideType = {
  image: string;
  name: string;
  features: string[];
};
type GuideItemProps = {
  id: string | number;
  active: boolean;
  image: string;
  title: string;
  onChange: (id: string | number) => void;
  guides: GuideType[];
};

export default function GuideItem({
  id,
  title,
  image,
  active,
  onChange,
  guides,
}: GuideItemProps) {
  const { language } = useAppSelector((state) => state.ui);
  const classes = classNames([
    "relative",
    "flex-1",
    "flex",
    "justify-between",
    "items-center",
    "border-b",
    "border-gray-200",
    "py-2",
    "hover:bg-orange-50",
  ]);
  return (
    <div className="w-full">
      {/** small view accordion */}
      <div className="md:hidden">
        <Accordion
          onClick={() => onChange(id)}
          summary={
            <div
              className={classNames(classes, [
                "justify-normal",
                "flex-initial",
                "gap-4",
              ])}
            >
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
          }
          expandIcon={
            <Icon name={`chevron-${language === "ar" ? "right" : "left"}`} />
          }
          details={
            <div className="flex w-full flex-col gap-4">
              {guides.map(({ name, image, features }) => (
                <div
                  key={`${name}-${image}`}
                  className="w-full flex flex-col gap-2"
                >
                  <div className="w-full flex items-center justify-between bg-orange-50 rounded-xl p-4">
                    <Typography as="p1" text={name} />
                    <Image
                      isNotRelative
                      name={image}
                      alt={name}
                      width={100}
                      height={100}
                      className="rounded-xl"
                      style={{
                        objectFit: "cover",
                        height: "90px",
                        width: "120px",
                      }}
                    />
                  </div>
                  <ul className="list-disc list-outside mr-6">
                    {features.map((feature) => (
                      <li key={feature}>
                        <Typography className="inline" text={feature} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          }
          expanded={active}
        />
      </div>
      {/** medium and above view accordion */}
      <button
        type="button"
        onClick={() => onChange(id)}
        className={classNames(
          classes,
          ["hidden", "md:flex", "p-2", "w-full"],
          [active && ["border-b", "border-b-orange-400", "bg-orange-100"]]
        )}
      >
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
      </button>
    </div>
  );
}
