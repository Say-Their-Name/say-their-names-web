import styled from 'styled-components';
import Color from '../../constants/Color';

const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;

  @media (max-width: 750px) {
    height: auto;
  }

  p {
    margin-bottom: 36px;
    max-width: 360px;
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

const ImageCover = styled.img`
  width: 550px;
  height: 476px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const HomeButton = styled.article`
  button {
    border: 1px solid black;
    color: ${Color.WHITE};
    background-color: ${Color.PRIMARY};
    font-size: 1rem;
    width: 300px;
    cursor: pointer;
    padding: 1rem;
    outline: none;
    transition: all 0.4s ease-in-out;
    :hover {
      opacity: 0.7;
      transform: translateY(-2px);
      color: ${Color.PRIMARY};
      background-color: ${Color.WHITE};
    }

    @media (max-width: 500px) {
      width: auto;
    }
  }
`;

const BoxContent = styled.div`
  margin-bottom: 24px;
  h1 {
    font-size: 6rem;
    margin: 0;

    @media (max-width: 700px) {
      font-size: 4rem;
    }
  }
  h4 {
    color: #040d14;
    font-family: "Capsule Sans Display", system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.1px;
    text-decoration: unset;
    margin: 0;
  }
`;

export {
  ContainerDiv,
  ImageCover,
  ImageContainer,
  HomeButton,
  BoxContent,
  InnerContainer
};
