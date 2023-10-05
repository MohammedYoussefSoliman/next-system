import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import colors from "tailwindcss/colors";
import { styled } from "@mui/material/styles";
import withMuiTheme from "@components/withMuiTheme";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  background: colors.white,
  boxShadow: "none",
  width: "100%",
  overflow: "hidden",
  "&:before": {
    display: "none",
  },
  "&$expanded": {
    margin: 0,
  },
}));

export const StyledAccordion = withMuiTheme<AccordionProps>(Accordion);

const Summary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={null} {...props} />
))(() => ({
  width: "100%",
  minHeight: "auto",
  borderBottom: `1px solid ${colors.gray[200]}`,
  "&:last-of-type": {
    borderBottom: "none",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "&:hover": {
    background: colors.orange[50],
  },
  // [mediaSizes.md]: {
  //   padding: 20,
  // },
  // [mediaSizes.lg]: {
  //   padding: 22,
  // },
}));

export const AccordionSummary = withMuiTheme<AccordionSummaryProps>(Summary);

export const Details = styled(MuiAccordionDetails)(() => ({
  width: "100%",
}));

export const StyledAccordionDetails = withMuiTheme<any>(Details);
