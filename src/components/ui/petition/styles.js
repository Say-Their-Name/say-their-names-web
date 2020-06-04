import styled from 'styled-components';

const PetitionCard = styled.div`
  text-align: center;
  padding: 10px;
  border: 3px solid lightgray;
  border-radius: 5px;
  height: 500px;
`;

const PetitionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  margin: 20px;
`;

const PetitionLink = styled.a`
  padding: 10px;
  font-size: 20px;
  color: black;
  border: 2px solid black;
  border-radius: 5px;

  &:hover {
    background-color: lightgray;
  }
`;

export { PetitionCard, PetitionWrapper, PetitionLink };
