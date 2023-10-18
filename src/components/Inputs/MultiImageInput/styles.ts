import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "tailwindcss/colors";

type ProgressProps = {
  progress: string;
};

export const ImageWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: linear-gradient(
      0deg,
      ${colors.gray[700]} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .delete--button {
    position: absolute;
    top: 0;
    left: -12px;
    z-index: 3000;
    border: 1.5px solid ${colors.black};
    border-radius: 12px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    &:enabled {
      cursor: pointer;
      &:hover {
        background-color: ${colors.gray[50]};
      }
    }
  }
`;
