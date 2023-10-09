"use client";
import React from "react";
import { useQueries } from "react-query";
import loGet from "lodash/get";
import { getResponseMessage } from "@/utils";
import { useFormContext } from "react-hook-form";
import { useAxiosInstance, useAppDispatch } from "@/hooks";
import Spinner from "@/components/Spinner";
import { showError } from "@appState/slices/ui-actions";
import Typography from "@/components/Typography";
import { Property } from "../../../AddProducts.types";
import Step from "../../UI/Step";
import Properties from "./Properties";

export default function PropertiesStep() {
  const { getValues, control, watch } = useFormContext();
  const { get } = useAxiosInstance();
  const dispatch = useAppDispatch();

  const subCategory = getValues("subCategory");

  const [propertiesQuery, countriesQuery] = useQueries([
    {
      queryKey: ["properties", subCategory],
      queryFn: ({ queryKey }: { queryKey: any[] }) => {
        const [_, subCategory] = queryKey;
        if (subCategory) {
          return get(`properties/${subCategory}`);
        }
        return;
      },
    },
    {
      queryKey: ["countries"],
      queryFn: () => get("countries"),
    },
  ]);

  const { data: propertiesData } = propertiesQuery;
  const { data: countriesData } = countriesQuery;

  const properties = loGet(propertiesData, "data", []);
  const countries = loGet(countriesData, "data", []);

  React.useEffect(() => {
    if (propertiesQuery.error) {
      dispatch(showError(getResponseMessage(propertiesQuery.error, true)));
    }
    if (countriesQuery.error) {
      dispatch(showError(getResponseMessage(countriesQuery.error, true)));
    }
  }, [dispatch, propertiesQuery, countriesQuery]);

  if (propertiesQuery.isLoading || countriesQuery.isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner size={50} />
      </div>
    );
  }

  // console.log(properties);
  // console.log(countries);

  return (
    <Step title="addProduct">
      <div className="w-full flex flex-col gap-4 max-h-[580px] md:max-h-[520px]">
        <div className="flex flex-col gap-1">
          <Typography as="h6" text="fillFields" />
          <Typography text="muchInfoGuide" color="light" />
        </div>
        properties for subCategory {subCategory}
        <Properties
          properties={(properties as Property[]).filter(
            (property) => property.type === "list"
          )}
          control={control}
          watch={watch}
        />
      </div>
    </Step>
  );
}
