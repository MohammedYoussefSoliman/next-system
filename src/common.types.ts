export type PageProps = {
  children: React.ReactNode;
  params: {
    [key: string]: string;
  };
};

export type LangProps = "ar" | "en" | "fr" | "tr";
