import React from "react";
import { AccordionSummaryProps } from "@mui/material/AccordionSummary";

export type AccordionProps = {
  summary: React.ReactNode;
  details: React.ReactNode;
  expanded: boolean;
  onChange?: (value: boolean) => void;
  onClick?: (event?: React.ChangeEvent<any>) => void;
  expandIcon?: AccordionSummaryProps["expandIcon"];
};
