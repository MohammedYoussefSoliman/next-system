"use client";
import React from "react";
import { useQuery } from "react-query";
import loGet from "lodash/get";
import { getResponseMessage } from "@/utils";
import { useAxiosInstance, useAppDispatch, useAppSelector } from "@/hooks";
import Image from "@/components/Image";
import { showError } from "@appState/slices/ui-actions";
import Spinner from "@/components/Spinner";
import Typography from "@/components/Typography";
import GuideItem from "./GuideItem";

export default function CategoriesGuide() {
  const { get } = useAxiosInstance();
  const { mainCategories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  const [categoryId, setCategoryId] = React.useState<number | string>(
    mainCategories[0].id
  );
  const {
    data: guidesData,
    error,
    isLoading,
  } = useQuery(
    ["category-guide", categoryId],
    async ({ queryKey }) => {
      const [_, categoryId] = queryKey;
      if (categoryId) {
        return get(`category-guided/${categoryId}`);
      }
    },
    { retry: false }
  );

  React.useEffect(() => {
    if (error) {
      dispatch(showError(getResponseMessage(error, true)));
    }
  }, [dispatch, error]);

  const guides = loGet(guidesData, "data", []).map((guide: any) => ({
    id: guide.id,
    name: guide.name,
    image: guide.image,
    features: guide.category_guided_features,
  }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner size={50} />
      </div>
    );
  }
  return (
    <div className="flex w-full h-full gap-6">
      <div className="flex-1 md:border-l md:border-gray-200">
        <Typography as="h6" text="mainCategories" />
        {mainCategories.map(({ name, id, image }) => (
          <GuideItem
            key={`${name}${image}`}
            id={id}
            title={name}
            image={
              loGet(image, "medium") ||
              loGet(image, "place_holder.medium_bg", "")
            }
            guides={guides}
            onChange={(id) => setCategoryId(id)}
            active={categoryId === id}
          />
        ))}
      </div>
      <div className="hidden md:flex flex-col gap-4 flex-2">
        <Typography as="h6" text="subCategories" />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 grid-flow-col w-full">
          {guides.map((guide: any) => (
            <div key={guide.name} className="flex flex-col gap-4 w-full">
              <div className="flex flex-col items-center w-full justify-center gap-1 bg-orange-50 rounded-xl p-4">
                <Typography as="p2" text={guide.name} />
                <Image
                  isNotRelative
                  name={guide.image}
                  alt={guide.name}
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
                {guide.features.map((feature: any) => (
                  <li key={feature}>
                    <Typography as="p2" className="inline" text={feature} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
