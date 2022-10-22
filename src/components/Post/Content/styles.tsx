import styled, { css } from "styled-components";
import { InterfacePostSize } from "../interface";

export const Box = styled.div<InterfacePostSize>`
  display: flex;
  width: 100%;
  height: 320px;
  cursor: pointer;

  img {
    width: 320px;
    height: 100%;
  }

  ${(props) =>
    props.size === "large" &&
    css`
      display: flex;
      align-items: center;
      width: 100%;
      height: 640px;
      cursor: pointer;
      img {
        width: 50%;
        height: 100%;
      }
    `}
`;

export const Article = styled.article<InterfacePostSize>`
  padding: 35px 80px;

  h2 {
    color: #f1a10a;
    font-size: 36px;
    margin: ${(props) =>
      props.size === "large" ? "24px  0 15px" : "7px  0 13px"};
  }

  p {
    font-size: 24px;
  }
`;
