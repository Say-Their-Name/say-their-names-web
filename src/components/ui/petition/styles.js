import styled from 'styled-components';
import Color from '../../../constants/Color';

const Card = styled.div`
  border: 1px solid lightgray;
  margin-top: 30px;
`;

const CardContent = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    margin: 0;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  a {
    padding: 15px;
    font-size: 20px;
    color: black;
    border: 2px solid black;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${Color.PRIMARY};
      color: ${Color.WHITE};
    }
  }
`;

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 100px;
  min-height: 70vh;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Type = styled.p`
  position: absolute;
  top: 5px;
  right: 16px;
  color: white;
  background-color: black;
  padding: 5px;
`;

export {
  Card, Wrapper, CardContent, Image, ImageDiv, Type
};
