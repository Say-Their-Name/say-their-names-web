import styled from "styled-components";
import Color from "../../constants/Color";

const StyledFooter = styled.footer`
  display: flex;
  font-weight: normal;
  align-items: "center";
  justify-content: space-between;
  background-color: ${Color.WHITE};
  padding: 5rem 3rem;
`;

const StyledFooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${Color.PRIMARY};
  }
  a:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const InputEmail = styled.input.attrs({
  type: "email",
  placeholder: "email@email.com",
})`
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: width 0.5s ease-in-out;
  &:focus {
    width: 100%;
  }
`;
const InputSubmit = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  text-align: center;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyleFooterForm = styled.form`
  width: 33%;
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
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  StyleFooterForm,
  InputEmail,
  InputSubmit,
};
