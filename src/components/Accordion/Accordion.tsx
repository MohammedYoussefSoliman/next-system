import React from "react";

import withMuiTheme from "@components/withMuiTheme";
import {
  StyledAccordionDetails,
  AccordionSummary,
  StyledAccordion,
} from "./styles";
import type { AccordionProps } from "./Accordion.type";

function Accordion({
  expanded,
  onChange,
  summary,
  details,
  expandIcon,
  onClick,
}: AccordionProps) {
  return (
    <StyledAccordion
      expanded={expanded}
      onChange={() => {
        if (onChange) onChange(!expanded);
      }}
    >
      <AccordionSummary onClick={onClick} expandIcon={expandIcon}>
        <div className="w-full">{summary}</div>
      </AccordionSummary>
      <StyledAccordionDetails>
        <div className="w-full">{details}</div>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}

export default withMuiTheme<AccordionProps>(Accordion);
