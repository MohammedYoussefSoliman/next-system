import i18next from "i18next";
import type { LangProps } from "@/common.types";

export default function changeLanguage(
  lng: LangProps,
  path: string,
  callback?: (path: string) => void
) {
  const langRegEx = /ar|en|fr|tr/i;
  const newPath = path.replace(langRegEx, lng);

  i18next.changeLanguage(lng);
  if (callback) callback(newPath);
}
