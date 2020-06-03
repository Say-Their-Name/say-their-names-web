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

export default StyledProfileList;
