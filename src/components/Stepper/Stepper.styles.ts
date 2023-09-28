import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaSizes } from "@/utils";

type PanelProps = {
  hidden?: boolean;
};

export const StyledPanel = styled("div")<PanelProps>`
  width: 100%;
  min-width: 100%;
  ${mediaSizes.md} {
    width: 100%;
    min-width: 280px;
  }
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
