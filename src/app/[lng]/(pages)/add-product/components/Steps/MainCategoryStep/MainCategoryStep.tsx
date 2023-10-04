"use client";
import React from "react";
import loGet from "lodash/get";
import { useStepperApi } from "@/components/Stepper";
import { useAppSelector } from "@/hooks";
import Step from "../../UI/Step";
import CategoryCheckList from "../../UI/CategoryCheckList";

const sampleItems = [
  {
    title: "Electronics",
    value: "electronics",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
  },
  {
    title: "Oriental plants",
    value: "oriental-plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
  },
  {
    title: "Cars and Automobiles",
    value: "cars",
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    title: "Cars and Automobiles",
    value: "cars2",
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    title: "Cloths",
    value: "cloths",
    image:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  },
  {
    title: "Spices",
    value: "spices",
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Desert",
    value: "desert",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    title: "Desert",
    value: "desert",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    title: "Desert",
    value: "desert",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    title: "Travel tools",
    value: "travel-tools",
    image:
      "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80",
  },
];

export default function AuctionTypeStep() {
  const { handleCompleted } = useStepperApi();
  const { mainCategories } = useAppSelector((state) => state.categories);
  return (
    <Step
      handleNext={() => {
        console.log("next");
      }}
      title="addProduct"
      subTitle="chooseMainCategory"
    >
      <div className="w-full max-h-[580px] md:max-h-[520px]">
        <CategoryCheckList
          name="category"
          checkItems={mainCategories.map((cat) => ({
            title: cat.name,
            value: cat.id,
            image:
              loGet(cat, "image.medium", "") ||
              loGet(cat, "image.place_holder.medium_bg", ""),
          }))}
        />
      </div>
    </Step>
  );
}
