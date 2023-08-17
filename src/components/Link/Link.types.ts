import type { TypographyProps } from "@components/Typography/Typography.types";
export type NavLinkProps = {
  to: string;
  label: string;
} & Omit<TypographyProps, "text">;
