import styled, { css } from 'styled-components';
import { InterfacePostStyle } from '../interface';

export const Box = styled.div<InterfacePostStyle>`
  display: flex;
  width: 100%;
  height: 320px;
  cursor: pointer;

  img {
    width: 320px;
    height: 100%;
  }

  ${(props) => props.size === 'large'
    && css`
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

    ${(props) => props.side === 'left' && props.size === 'small'
    && css`
      flex-direction: row-reverse;
    `}
`;

export const Article = styled.article<InterfacePostStyle>`
  position: relative;
  padding: 35px 80px;
  overflow-y: auto;

  h2 {
    color: #f1a10a;
    font-size: 36px;
    margin: ${(props) => (props.size === 'large' ? '24px  0 15px' : '7px  0 13px')};
  }

  p {
    font-size: 24px;
  }

  img.icon {
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: 35px;
    right: 26px;

    ${(props) => props.side === 'left'
    && css`
      bottom: 35px;
      left: 578px;
    `}
  }
`;
