import styled from 'styled-components';

const BackProfile = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;

  button {
    width: 162px;
    height: 36px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;

    :hover {
      opacity: 0.7;
    }
  }
`;

export default BackProfile;
