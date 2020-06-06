import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  width: 1024px;
  margin: 24px auto 0px;
  min-height: 80vh;

  p {
    margin-bottom: 36px;
    max-width: 360px;
  }
`;

const ImageCover = styled.img`
  width: 550px;
  height: 476px;
  margin-left: 24px;
  margin-bottom: -20px;
`;

const HomeButton = styled.article`
  button {
    width: 162px;
    height: 36px;
    border: 1px solid black;
    color: #040d14;
    background-color: white;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    :hover {
      opacity: 0.7;
      transform: translateY(-2px);
    }
  }
`;

const BoxContent = styled.div`
  margin-bottom: 24px;
  span {
    color: #040d14;
    font-family: "Capsule Sans Display", system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.1px;
    text-decoration: unset;
  }
`;

const InnerContainer = styled.div``;
export {
  ContainerDiv, ImageCover, HomeButton, BoxContent, InnerContainer
};
