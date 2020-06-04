import styled from "styled-components";
import Color from "../../constants/Color";

const StyledFooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-top: 2px solid ${Color.GREY};
`;
const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
  align-items: "center";
  justify-content: space-between;
  background-color: ${Color.WHITE};
  padding: 2rem 0;
`;

const StyledFooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;

  @media (max-width: 650px) {
    width: 100%;
    align-items: center;
  }
  a {
    color: ${Color.PRIMARY};
  }
  a:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const InputEmail = styled.input`
  /* width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: width 0.5s ease-in-out;
  &:focus {
    width: 100%;
  } */
`;

const StyleFooterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 40%;
  margin: 1rem 0;
  @media (max-width: 850px) {
    width: 45%;
  }

  @media (max-width: 750px) {
    width: 55%;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: center;
  }

  span {
    color: ${Color.RED};
    margin: 0.5rem 0;
  }

  h4 {
    text-transform: uppercase;
  }
  .form-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5rem;

    @media (max-width: 650px) {
      width: 70%;
    }

    input {
      width: 70%;
      /* height: 100%; */
      font-family: "Karla", sans-serif;

      border: none;
      padding: 0.5rem;

      &:focus {
        border: none;
        outline: none;
        background: white !important;
      }
    }
    button {
      width: 20%;
      /* height: 100%; */
      border: none;
      font-family: "Karla", sans-serif;
      padding: 0.5rem;
      background-color: white;
    }
  }
`;
const StyledFooterMissions = styled.div`
  width: 33%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;

  @media (max-width: 750px) {
    text-align: center;
    width: 70%;
    margin: 3rem auto 0 auto;
  }

  h4 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
  }
`;

export {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  StyleFooterForm,
  InputEmail,
};
