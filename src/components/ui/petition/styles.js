import styled from 'styled-components';

const PetitionCard = styled.div`
  border: 3px solid lightgray;
  border-radius: 2px;
  margin-top: 30px;
`;

const CardContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const PetitionWrapper = styled.div`
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

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
`;

const PetitionLink = styled.a`
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

export {
  PetitionCard, PetitionWrapper, PetitionLink, CardContent, Image, ImageDiv
};
