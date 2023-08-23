export type NavLinkProps = {
  to: string;
  label: string;
  type?: "normal" | "aside";
  onClick?: () => void;
};
