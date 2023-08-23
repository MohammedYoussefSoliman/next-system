import type { TypographyProps } from "@components/Typography/Typography.types";
export type NavLinkProps = {
  to: string;
  label: string;
  onClick?: () => void;
} & Omit<TypographyProps, "text">;
