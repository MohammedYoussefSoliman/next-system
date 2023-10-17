export type NavLink = {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_top" | "_parent";
  className?: string;
};
