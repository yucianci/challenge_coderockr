import styled from 'styled-components';

export const FullPage = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #000000c5;
`;

export const Main = styled.div`
  position: relative;
  height: 80%;
  width: 40%;
  background: #fff;
  color: #000;
  padding: 40px;

  a svg {
    position: absolute;
    top: 5%;
    font-size: 24px;
    right: 5%;
  }

  @media (max-width: 1000px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Title = styled.p`
  font-size: 36px;
  color: #f1a10a;
  font-weight: 600;
  text-align: center;
  margin-top: 24px;
`;

export const Content = styled.section`
  font-size: 18px;
  font-weight: 500;
  text-align: start;
  margin: 32px 10%;

  display: flex;
  flex-direction: column;

  input {
    padding: 8px;
  }

  label:not(first-child) {
    padding: 8px 0;
  }

  label:not(first-child) {
    margin-top: 24px;
  }

  textarea {
    padding: 8px;
    height: 80px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: #2d2d2d;
  color: #fff;
  border: 0;
  width: 142px;
  padding: 8px 0;
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 20px;
    transform: translateY(1px);
  }
`;
