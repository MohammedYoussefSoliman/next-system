import { Control, UseFormSetValue } from "react-hook-form";

export type MultiImageInputProps = {
  name: string;
  label?: string;
  control: Control<any>;
  error?: string;
  uploadAction: (
    file: FileList,
    type: "image" | "audio" | "video"
  ) => Promise<void>;
  deleteAction: (
    id: number | string,
    productId: number | string,
    type: "image" | "audio" | "video"
  ) => Promise<void>;
};

export interface FileInputPropsType
  extends Omit<React.InputHTMLAttributes<any>, "required" | "type"> {
  name: string;
  label?: string;
  className?: string;
  required?: true | string;
  fileUrl?: string;
  accepts?: string[];
  setValue: UseFormSetValue<any>;
  uploadAction: (file: File, type: "image" | "audio" | "video") => Promise<any>;
  deleteAction: (id: number | string) => Promise<void>;
  type: "image" | "audio" | "video";
}
