import styled, { css } from 'styled-components';
import { InterfaceContainer } from './interface';

export const Wrapper = styled.div`
  display: flex;
  background: #fff;
  color: #1a1a1a;
  width: 50%;
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
`;
