import React from "react";
import { v4 as uuidv4 } from "uuid";
import FileInput from "./FileInput";
import Label from "../Label";

import type { FileType, MultipleFilesProps } from "./MultiImageInput.types";

const newFile = (file?: File): FileType => {
  return {
    file: file || null,
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
}: MultipleFilesProps) {
  const [files, setFiles] = React.useState<FileType[]>([
    ...currentFiles?.map((item) => ({
      id: uuidv4(),
      file: item.file,
      url: item.url,
    })),
    newFile(),
  ]);

  console.log({ currentFiles });

  const addFile = React.useCallback((file: File) => {
    setFiles((prevState) => [...prevState, newFile(file)]);
  }, []);

  const removeFile = React.useCallback((id: string) => {
    setFiles((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }, []);

  console.log(files);

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
              const response = await uploadAction(file, type);
              addFile(file);
              return response;
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
