import styled from 'styled-components';

const ShareSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.7;
  }

  button {
    :focus {
      background-color: red;
      border: 1px solid red;
      outline: 2px solid black;
    }
  }

  i {
    font-size: 32px;
    margin-right: 0.5rem;
  }

  p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const ShareStyle = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    justify-content: space-evenly;
  }

  h3 {
    margin: 5px;
    font-weight: bold;
    font-family: Karla;
    font-style: normal;
    font-size: 17px;
    line-height: 20px;
    width: 100%;
  }
`;

export { ShareStyle, ShareSection };
