"use client";
import React from "react";
import loGet from "lodash/get";
import { useFormContext } from "react-hook-form";
import { useAppSelector } from "@/hooks";
import Typography from "@/components/Typography";
import Step from "../../UI/Step";
import CategoryCheckList from "../../UI/CategoryCheckList";

export default function SubCategoryStep() {
  const { subCategories } = useAppSelector((state) => state.categories);

  const { getValues } = useFormContext();

  const mainCategory = getValues("category");
  const currentSubCategories = subCategories.filter(
    (cat) => cat.parent_id == mainCategory
  );

  return (
    <Step title="addProduct">
      <div className="w-full flex flex-col gap-4 max-h-[580px] md:max-h-[520px]">
        <div className="flex flex-col">
          <Typography as="h6" text="chooseSubCategory" />
        </div>
        {currentSubCategories.length > 0 ? (
          <CategoryCheckList
            name="subCategory"
            checkItems={currentSubCategories.map((cat) => ({
              title: cat.name,
              value: cat.id,
              image: loGet(cat, "image.medium", ""),
            }))}
          />
        ) : (
          <Typography text="noSubCategoriesFound" />
        )}
      </div>
    </Step>
  );
}
