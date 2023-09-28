import styled from "@emotion/styled";
import { css } from "@emotion/react";

type ProgressProps = {
  progress: string;
};

export const StyledProgress = styled("div")<ProgressProps>`
  ${({ progress }) => css`
    width: ${progress}%;
  `}
`;
