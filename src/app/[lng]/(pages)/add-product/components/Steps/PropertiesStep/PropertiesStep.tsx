"use client";
import React from "react";
import { useQuery } from "react-query";
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
  const {
    data: propertiesData,
    error,
    isLoading,
  } = useQuery(
    ["properties", subCategory],
    ({ queryKey }: { queryKey: any[] }) => {
      const [_, subCategory] = queryKey;
      if (subCategory) {
        return get(`properties/${subCategory}`);
      }
      return;
    }
  );

  const properties = loGet(propertiesData, "data", []);

  React.useEffect(() => {
    if (error) {
      dispatch(showError(getResponseMessage(error, true)));
    }
  }, [dispatch, error]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner size={50} />
      </div>
    );
  }

  const listProperties = (properties as Property[]).filter(
    (property) => property.type === "list"
  );

  return (
    <Step title="addProduct">
      <div className="w-full flex flex-col gap-4 max-h-[580px] md:max-h-[520px]">
        <div className="flex flex-col gap-1">
          <Typography as="h6" text="fillFields" />
          <Typography text="muchInfoGuide" color="light" />
        </div>
        {listProperties && listProperties.length > 0 && (
          <Properties
            properties={listProperties}
            control={control}
            watch={watch}
          />
        )}
      </div>
    </Step>
  );
}
