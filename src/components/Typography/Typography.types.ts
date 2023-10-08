export type TypographyProps = {
  text?: string;
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p1" | "p2" | "small";
  color?: "base" | "light" | "secondary" | "success" | "warn" | "error";
  truncationWidth?: number;
  capitalizeFirstLetter?: boolean;
  uppercase?: boolean;
  namespace?: string;
  className?: string;
  hoverStyles?: string[];
};
