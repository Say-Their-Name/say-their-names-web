import styled from 'styled-components';

const StyledProfileList = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const H2 = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 3rem 0;
  font-size: 1.5rem;
`;

export { StyledProfileList, H2 };
