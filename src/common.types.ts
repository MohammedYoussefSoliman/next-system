export type PageProps = {
  children: React.ReactNode;
  params: {
    [key: string]: string;
  };
};

export type LangProps = "ar" | "en" | "fr" | "tr";

export type CountryType = {
  dialCode: string;
  ar: string;
  en: string;
  code: string;
  flag: string;
};
