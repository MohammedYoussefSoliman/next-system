export type TypographyProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p1" | "p2" | "small";
  color?: "base" | "success" | "warn" | "error";
  truncationWidth?: number;
  capitalizeFirstLetter?: boolean;
  uppercase?: boolean;
  translationSource?: string;
};
