import styled from 'styled-components';

interface InterfaceHeaderArticleMobile {
  imageUrl: string;
}

export const Wrapper = styled.div`
  display: flex;
  color: black;
  padding: 160px 320px 60px;

  @media (max-width: 1600px) {
    padding: 160px 160px 60px;
  }

  @media (max-width: 1000px) {
    padding: 160px 80px 60px;
  }

  @media (max-width: 800px) {
    padding: 160px 40px 60px;
  }
`;

export const Main = styled.div`
  background: #fff;
`;

export const HeaderArticle = styled.header`
  display: flex;
  height: 640px;
  width: 100%;

  img {
    height: 100%;
    width: 50%;
  }

  div {
    height: 100%;
    width: 50%;
    padding: 200px 120px;

    span {
      font-size: 18px;
    }

    p {
      font-size: 24px;
      margin: 20px 0;
    }

    h2 {
      font-size: 36px;
      color: #f1a10a;
    }
  }
  @media (max-width: 1300px) {
    display: none;
    padding: 200px 60px;
  }
`;

export const ContentArticle = styled.section`
  margin: 125px 250px;

  p {
    font-size: 24px;
    margin-bottom: 36px;
  }

  @media (max-width: 1300px) {
    margin: 100px;
  }
`;

export const HeaderArticleMobile = styled.div<InterfaceHeaderArticleMobile>`
  display: none;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: 100%;

  div {
    height: 100%;
    width: 100%;
    margin: 200px 120px;
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(50px);

    span {
      font-size: 18px;
    }

    p {
      font-size: 24px;
      margin: 20px 0;
    }

    h2 {
      font-size: 36px;
      color: #f1a10a;
    }

    @media (max-width: 1150px) {
      margin: 100px 60px;
    }
  }
  @media (max-width: 1300px) {
    display: flex;
  }
`;
