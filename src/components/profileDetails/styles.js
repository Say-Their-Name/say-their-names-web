import styled from 'styled-components';

const Profile = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PersonalInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Photo = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  min-height: 500px;

  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 900px) {
    width: 45%;
  }

  @media screen and (max-width: 750px) {
    min-height: auto;
    margin: 1rem 0;
    width: 90%;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 750px) {
      border-radius: 50%;
      width: 300px;
      height: 300px;
    }

    @media screen and (max-width: 500px) {
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
  }
`;

const PersonSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    width: 45%;
  }

  @media screen and (max-width: 750px) {
    width: 85%;
    align-items: center;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10px;

  @media screen and (max-width: 1050px) {
    width: 70%;
  }

  @media screen and (max-width: 750px) {
    width: 85%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      margin: 0px;
    }
  }
`;

const H4 = styled.h4`
  margin: 0px;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: rgba(16, 16, 16, 0.58);
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  margin: 10px;

  @media screen and (max-width: 750px) {
    width: 85%;
  }
`;

const Age = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 25%;
  border-right: 1px solid #d8d8d8;

  h2 {
    margin: 0px;
  }
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  padding-left: 15px;
  h2 {
    margin: 0px;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  margin: 10px;

  @media screen and (max-width: 750px) {
    width: 85%;
  }
  h2 {
    margin: 0px;
  }
`;

const Button = styled.div`
  margin: 1rem 0px;
  button {
    width: ${(props) => (props.width ? props.width : '244px')};
    padding: ${(props) => (props.padding ? props.padding : '1rem')};
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    outline: none;
    :hover {
      opacity: 0.9;
    }
    :focus {
      2px solid black;
    }
  }
`;

const ShareSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 247px;
  p {
    margin: 5px 0px;
  }


`;

const Share = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  p {
    margin: 5px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
  }

`;

const H2 = styled.h2`
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #101010;
  text-transform: uppercase;
`;

const Context = styled.section`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  p {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 2rem;
  }
`;

export {
  Profile,
  PersonalInformation,
  Photo,
  PersonSection,
  Name,
  H4,
  Div,
  Age,
  Children,
  Location,
  ShareSection,
  Button,
  H2,
  Share,
  Context
};
