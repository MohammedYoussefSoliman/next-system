import React from "react";
import { v4 as uuidv4 } from "uuid";
import Typography from "@/components/Typography";
import FileInput from "./FileInput";
import Label from "../Label";

import type { ImageType, MultipleImagesProps } from "./MultiImageInput.types";

const newImage = (): ImageType => {
  return {
    file: null,
    id: uuidv4(),
  };
};

export default function FilesInput({
  name,
  files: currentFiles = [],
  setValue,
  uploadAction,
  deleteAction,
  type,
  label,
  required,
}: MultipleImagesProps) {
  const [files, setFiles] = React.useState<ImageType[]>([
    ...currentFiles?.map((item) => ({
      id: uuidv4(),
      file: item.file,
      url: item.url,
    })),
    newImage(),
  ]);

  const addFile = React.useCallback(() => {
    setFiles((prevState) => [...prevState, newImage()]);
  }, []);

  const removeFile = React.useCallback((id: string) => {
    setFiles((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }, []);

  return (
    <div className="flex flex-col w-full gap-2">
      {label && <Label label={label} required={required} />}
      <div className="flex gap-4">
        {files.map((item, index) => (
          <FileInput
            key={item.id}
            name={`${name}[${index}]`}
            setValue={setValue}
            type={type}
            uploadAction={async (file, type) => {
              try {
                await uploadAction(file, type);
                addFile();
              } catch (err) {}
            }}
            deleteAction={async (fileId) => {
              await deleteAction(fileId);
              removeFile(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
