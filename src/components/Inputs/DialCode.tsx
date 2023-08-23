import React from "react";
import { Control } from "react-hook-form";
import type { CountryType, LangProps } from "@/common.types";
import { useAppSelector } from "@/hooks";
import countries from "@/assets/data/countries";
import Typography from "@components/Typography";
import { SelectField } from ".";

const dialCodeMapper = (
  country: CountryType,
  index: number,
  lng: LangProps
) => {
  return {
    label: (
      <div
        key={country.dialCode + country.en + index}
        className="flex items-center gap-1"
      >
        <Typography text={country.flag} />
        <Typography as="p2" text={country[lng === "ar" ? "ar" : "en"]} />
      </div>
    ),
    value: country.dialCode,
  };
};

type Props = {
  control: Control<any>;
};

export default function DialCode({ control }: Props) {
  const { language } = useAppSelector((state) => state.ui);
  return (
    <SelectField
      name="dialCode"
      control={control}
      defaultValue="+971"
      //   label="dialCode"
      options={countries.map((country, index) => {
        return dialCodeMapper(country, index, language);
      })}
      renderValueHandler={(value) => {
        const selectedCountry = countries.find((opt) => opt.dialCode === value);
        if (selectedCountry) {
          return (
            <div
              key={`${selectedCountry.dialCode}-${selectedCountry.en}`}
              className="flex items-center gap-1 w-full justify-between mt-2 mr-1"
            >
              <Typography as="p2" text={selectedCountry.dialCode} />
              <Typography text={selectedCountry.flag} />
            </div>
          );
        }
        return null;
      }}
    />
  );
}
