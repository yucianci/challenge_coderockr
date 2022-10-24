import styled, { css } from 'styled-components';
import { InterfaceContainer } from './interface';

export const Wrapper = styled.div`
  display: flex;
  background: #fff;
  color: #1a1a1a;
  width: 50%;

  @media (max-width: 1400px) {
    width: 100%;
    margin: 32px 10%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 32px 5%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 32px 0;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: 24px 0;
  }
`;

export const LargeWrapper = styled.div<InterfaceContainer>`
  width: 100%;
  display: flex;
  justify-content: end;

  ${(props) => props.side === 'left'
    && css`
      justify-content: start;
    `}
`;

export const Container = styled.section`
  display: flex;
  background: #fff;
  color: #1a1a1a;
  justify-content: end;
  margin: 80px 0;
  width: 65%;

  @media (max-width: 1400px) {
    width: 75%;
  }

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    margin: 24px 0;
  }
`;
