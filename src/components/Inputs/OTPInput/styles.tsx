import colors from "tailwindcss/colors";
import styled from "@emotion/styled";
import { mediaSizes } from "@/utils";
import { css } from "@emotion/react";

export const Wrapper = styled("div")`
  &:lang(ar) {
    direction: rtl !important;
  }
  .otp-container {
    &:lang(ar) {
      direction: rtl !important;
    }
    gap: 10px;
    ${mediaSizes.lg} {
      gap: 15px;
    }
    ${mediaSizes.xl} {
      gap: 20px;
    }
  }
  align-self: center;
`;

type InputProps = {
  hasError?: boolean;
};

export const Input = styled("input")<InputProps>`
  height: 48px !important;
  width: 40px !important;
  border-radius: 14px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.gray[400]};
  color: ${colors.gray[800]};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  flex: 1;
  &:lang(ar) {
    padding-top: 6px;
  }
  ${mediaSizes.md} {
    height: 48px !important;
    width: 50px !important;
    flex: unset;
  }
  &:focus {
    border: 1px solid ${colors.rose[600]};
  }
  ${({ hasError }) =>
    hasError &&
    css(`
          border: 1px solid ${colors.red[300]};
      background: ${colors.red[100]};

  `)}
`;
