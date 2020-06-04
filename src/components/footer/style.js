import styled from 'styled-components';
import Color from '../../constants/Color';

const StyledFooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-top: 2px solid ${Color.GREY};
`;
const StyledFooter = styled.div`
  display: flex;
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

const InputSubmit = styled.input``;
// const InputSubmit = styled.input.attrs({
//   type: "submit",
//   value: "Submit",
// })`
//   width: 40%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   text-align: center;
//   display: inline-block;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// `;

const StyleFooterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  .form-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5rem;

    input {
      width: 70%;
      /* height: 100%; */
      font-family: "Karla", sans-serif;

      border: none;
      padding: 0.5rem;
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
  InputSubmit
};
