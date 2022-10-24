import styled from 'styled-components';

export const Navbar = styled.nav`
  overflow: hidden;
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-around;
  padding: 12px 0;
  border-bottom: 1px solid #383838;
  background: #2d2d2d;
  height: 100px;
  width: 100%;
  z-index: 2;
`;

export const Menu = styled.section`
  a {
    font-size: 1.5rem;
    font-weight: 500;

    :last-child {
      margin-left: 42px;
    }
  }
`;
