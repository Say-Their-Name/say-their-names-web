import styled from 'styled-components';

const Card = styled.div`
  border: 3px solid lightgray;
  border-radius: 2px;
  margin-top: 30px;
`;

const CardContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 100px;

  @media (max-width: 1300px) {
    width: 80%;
  }
`;

const ImageDiv = styled.div`
  width: 794px;
  height: 280px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
`;

const LinkButton = styled.a`
  padding: 15px;
  font-size: 20px;
  color: black;
  border: 2px solid black;
  border-radius: 2px;
  text-align: center;

  &:hover {
    background-color: lightgray;
  }
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
  Card, Wrapper, LinkButton, CardContent, Image, ImageDiv, Type
};
