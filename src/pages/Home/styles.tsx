import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 0;
  border-bottom: 1px solid #383838;
  background-color: #242424;
`;

export const Menu = styled.section`
  display: flex;

  a {
    font-size: 1.5rem;
    font-weight: 500;

    :last-child {
      margin-left: 42px;
    }
  }
`;
