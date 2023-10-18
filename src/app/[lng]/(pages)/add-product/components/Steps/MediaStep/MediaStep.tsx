"use client";
import React from "react";
import loGet from "lodash/get";
import { useFormContext } from "react-hook-form";
import { useAxiosInstance } from "@/hooks";
import { formDataHandler } from "@/utils";
import Typography from "@/components/Typography";
import ImageInput from "@/components/Inputs/MultiImageInput/FileInput";
import ImagesInput from "@/components/Inputs/MultiImageInput/FilesInput";
import Step from "../../UI/Step";

export default function SubCategoryStep() {
  const { getValues, setValue } = useFormContext();
  const { post, delete: del } = useAxiosInstance();

  const productId = getValues("id");
  console.log(getValues());
  return (
    <Step title="addProduct">
      <div className="w-full flex flex-col gap-4 max-h-[580px] md:max-h-[520px]">
        <div className="flex flex-col gap-8">
          <Typography as="h6" text="uploadAttachment" />
          <ImagesInput
            name="image"
            type="image"
            label="uploadImages"
            setValue={setValue}
            uploadAction={async (file, type) => {
              const response = await post(
                `${productId}/media`,
                formDataHandler({
                  [type]: file,
                })
              );
              return response;
            }}
            deleteAction={async (fileId) => {
              await del(`${productId}/media/${fileId}`);
            }}
          />
        </div>
      </div>
    </Step>
  );
}
