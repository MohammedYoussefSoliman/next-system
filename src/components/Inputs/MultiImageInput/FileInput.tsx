import React from "react";
import { isEmpty, get as lodashGet } from "lodash";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import colors from "tailwindcss/colors";
import Icon from "@/components/Icon";
import { useAppDispatch } from "@/hooks";
import { getResponseMessage } from "@/utils";
import { showError } from "@appState/slices/ui-actions";
import Label from "../Label";
import { FileInputPropsType } from "./MultiImageInput.types";
import { ImageWrapper } from "./styles";
import EmptyFile from "./EmptyFile";

export default function ImageInput({
  name,
  label,
  type,
  className,
  required,
  onChange,
  fileUrl,
  accepts,
  setValue,
  uploadAction,
  deleteAction,
  disabled,
  ...InputProps
}: FileInputPropsType) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<FileList | null>(null);
  const [fileId, setFileId] = React.useState<string>("");

  const handleFileChange = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      setFile(e.target.files);
      setLoading(true);
      try {
        if (e.target.files) {
          const response = await uploadAction(e.target.files[0], type);
          const id = lodashGet(response, "media.id");
          console.log(response, id);
          setValue(name, id);
          setFileId(id);
        }
      } catch (resPonseError) {
        setFile(null);
        dispatch(showError(getResponseMessage(resPonseError, true)));
      } finally {
        setLoading(false);
      }
    },
    [dispatch, name, setValue, type, uploadAction]
  );

  console.log(fileId);

  const resolvePreview = React.useCallback((): string | null => {
    if (file && !isEmpty(file)) {
      const fileType = file[0].type;
      if (fileType.includes("image")) {
        return "image";
      }
      if (fileType.includes("video")) {
        return "video";
      }
    }
    return null;
  }, [file]);

  const handleDelete = async () => {
    setValue(name, undefined);
    setFile(null);
    try {
      if (fileId) {
        await deleteAction(fileId);
      }
    } catch (resPonseError) {
      dispatch(showError(getResponseMessage(resPonseError, true)));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {label && <Label label={label} required={required} />}
      <label className="relative w-[88px] h-[88px] flex items-center justify-center">
        <input
          className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
          type="file"
          onChange={handleFileChange}
          accept={accepts ? accepts.join(",") : undefined}
          {...InputProps}
        />
        {file === null ? (
          <EmptyFile disabled={disabled} />
        ) : (
          <ImageWrapper>
            {file && (
              <button className="delete--button" onClick={handleDelete}>
                <Icon name="times" color={colors.black} size={16} />
              </button>
            )}
            {loading && (
              <div className="w-full h-full flex items-center justify-center rounded-[14px] overflow-hidden absolute">
                <Spinner
                  bottomColor={colors.transparent}
                  topColor={colors.white}
                  size={20}
                />
              </div>
            )}

            {file && resolvePreview() === "image" ? (
              <div className="w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src={URL.createObjectURL(file[0])}
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="image_thumb"
                />
              </div>
            ) : fileUrl ? (
              <Image
                src={fileUrl}
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt={name}
              />
            ) : null}
          </ImageWrapper>
        )}
      </label>
    </div>
  );
}
