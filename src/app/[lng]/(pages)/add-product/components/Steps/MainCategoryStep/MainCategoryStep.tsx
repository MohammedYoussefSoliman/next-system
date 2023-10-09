"use client";
import React from "react";
import loGet from "lodash/get";
import { useAppSelector } from "@/hooks";
import Typography from "@/components/Typography";
import { SlideModal } from "@/components/Modal";
import { Button } from "@/components/Button";
import Step from "../../UI/Step";
import CategoryCheckList from "../../UI/CategoryCheckList";
import CategoriesGuide from "./CategoriesGuide";

export default function MainCategoryStep() {
  const { mainCategories } = useAppSelector((state) => state.categories);

  const [openGuideModal, setOpenGuideModal] = React.useState<boolean>(false);

  return (
    <Step title="addProduct">
      <div className="w-full flex flex-col gap-4 max-h-[580px] md:max-h-[520px]">
        <div className="flex flex-col">
          <Typography as="h6" text="chooseMainCategory" />
          <span className="inline">
            <Typography
              as="p1"
              text="knowCorrectCat"
              color="light"
              capitalizeFirstLetter
              className="italic inline"
            />{" "}
            <Button
              className="inline-flex p-0.5 enabled:hover:font-bold enabled:hover:bg-transparent italic"
              variant="transparent"
              onClick={() => setOpenGuideModal(true)}
            >
              showGuide
            </Button>
          </span>
        </div>
        <CategoryCheckList
          name="category"
          checkItems={mainCategories.map((cat) => ({
            title: cat.name,
            value: cat.id,
            image:
              loGet(cat, "image.medium") ||
              loGet(cat, "image.place_holder.medium_bg", ""),
          }))}
        />
      </div>
      <SlideModal
        open={openGuideModal}
        title="categoriesGuide"
        onClose={() => setOpenGuideModal(false)}
        className={["h-[90vh]", "md:h-[80vh]"]}
      >
        <CategoriesGuide />
      </SlideModal>
    </Step>
  );
}
