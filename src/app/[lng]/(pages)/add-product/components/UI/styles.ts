import styled from "@emotion/styled";
import colors from "tailwindcss/colors";
import { css } from "@emotion/react";

type RadioProps = {
  active: boolean;
  error?: boolean;
};

type CheckboxProps = {
  active: boolean;
};

export const StyledRadio = styled("label")<RadioProps>`
  ${({ active }) => css`
    border: 1.5px solid ${active ? colors.orange[500] : colors.orange[100]};
    background-color: ${active ? colors.orange[50] : colors.white};
    &:hover {
      background-color: ${active ? colors.orange[100] : colors.orange[50]};
    }
    .icon--wrapper {
      border: 1px solid ${active ? colors.orange[300] : colors.gray[400]};
      background-color: ${colors.white};
    }
    .radio--circle {
      border: 1px solid ${active ? colors.orange[500] : colors.orange[100]};
      background-color: ${colors.white};
      width: 24px;
      height: 24px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      .inner--circle {
        display: ${active ? "block" : "none"};
        width: 12px;
        height: 12px;
        border-radius: 12px;
        background-color: ${colors.orange[500]};
      }
    }
  `}
`;

export const CheckCircle = styled("div")<CheckboxProps>`
  ${({ active }) => css`
    border: 1px solid ${active ? colors.orange[500] : colors.orange[100]};
    background-color: ${active ? colors.orange[500] : colors.white};
  `}
`;
export const RadioPill = styled("div")<CheckboxProps>`
  ${({ active }) => css`
    border: 1px solid ${active ? colors.orange[500] : colors.gray[200]};
    background-color: ${active ? colors.orange[500] : colors.white};
  `}
`;
export const Check = styled("div")<CheckboxProps>`
  ${({ active }) => css`
    border: 1px solid ${active ? colors.orange[500] : colors.orange[200]};
    background-color: ${active ? colors.orange[500] : colors.white};
  `}
`;
