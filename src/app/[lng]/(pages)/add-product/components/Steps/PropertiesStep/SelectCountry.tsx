import React from "react";
import { useQuery } from "react-query";
import loGet from "lodash/get";
import { getResponseMessage } from "@/utils";
import { useAxiosInstance, useAppDispatch } from "@/hooks";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import Typography from "@/components/Typography";
import { Select } from "@components/Inputs";

import { showError } from "@appState/slices/ui-actions";
import { Control } from "react-hook-form";

type SelectCountryProps = {
  name: string;
  control: Control<any>;
};

export default function SelectCountry({ control, name }: SelectCountryProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);
  const { get } = useAxiosInstance();
  const dispatch = useAppDispatch();

  const {
    data: countriesData,
    error,
    isLoading,
  } = useQuery(["countries"], () => get("countries"));

  React.useEffect(() => {
    if (error) {
      dispatch(showError(getResponseMessage(error, true)));
    }
  }, [dispatch, error]);

  const countries = loGet(countriesData, "data", []);

  if (isLoading) return null;
  return (
    <Select
      name={name}
      placeholder={
        <div className="flex items-center gap-1">
          <Typography as="p2" text={name} />{" "}
          <Typography as="p2" text={t("optional")} color="light" />
        </div>
      }
      control={control}
      options={
        countries.map((option: any) => ({
          label: option.name,
          value: option.id,
        })) || []
      }
      changeHandler={({ value }) => {
        console.log(value.value);
      }}
    />
  );
}
