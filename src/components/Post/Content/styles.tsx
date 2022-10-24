import styled, { css } from 'styled-components';
import { InterfacePostStyle } from '../interface';

export const Box = styled.div<InterfacePostStyle>`
  position: relative;
  display: flex;
  width: 100%;
  height: 320px;
  cursor: pointer;

  img {
    width: 35%;
    height: 100%;

    @media (max-width: 800px) {
      width: 0%;
    }
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

        @media (max-width: 1000px) {
          width: 40%;
        }

        @media (max-width: 800px) {
          width: 0%;
        }
      }

      @media (max-width: 800px) {
        height: 350px;
      }
    `}

  ${(props) => props.side === 'left'
    && props.size === 'small'
    && css`
      flex-direction: row-reverse;
    `}

  ${(props) => props.size === 'small'
    && css`
      @media (max-width: 1000px) {
        height: 420px;
      }

      @media (max-width: 800px) {
        height: 350px;
      }
    `}
`;

export const Wrapper = styled.article<InterfacePostStyle>`
  height: 100%;
  width: ${(props) => (props.size === 'large' ? '50%' : '65%')};
  padding: 35px 80px;

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
      && props.size === 'small'
      && css`
        @media (min-width: 800px) {
          bottom: 35px;
          right: calc(35% + 26px);
        }
      `}
  }

  ${(props) => props.size === 'large'
    && css`
      @media (max-width: 1000px) {
        width: 60%;
      }

      @media (max-width: 800px) {
        width: 100%;
      }
    `}

  ${(props) => props.size === 'small'
    && css`
      @media (max-width: 800px) {
        width: 100%;
      }
    `}


  @media (max-width: 800px) {
    position: relative;
  }
`;

export const Article = styled.div`
  height: 100%;
  overflow-y: auto;
`;
