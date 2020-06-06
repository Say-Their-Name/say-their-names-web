import styled from 'styled-components';
import Color from '../../constants/Color';

const StyledFooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-top: 2px solid ${Color.GREY};
  justify-content: center;
`;

const FooterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '20%')} ;
  margin-right: 3rem;

  h2 {
    margin: 0px;
    font-size: 17px;
    line-height: 20px;
  };
  background-color: ${Color.WHITE};

  @media (max-width: 780px) {
    width: 90%;
    align-items: center;
  }
`;

const StyledFooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;
  a {

    padding: 0.3rem 0rem;
    color: ${Color.PRIMARY};

    &:hover {
      opacity: 0.6;
    }

  }
  a:not(:first-child) {
    margin-top: 0.5rem;
  }
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
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5rem;

    @media (max-width: 650px) {
      width: 70%;
    }

    @media (max-width: 450px) {
      width: 90%;
    }

    @media (max-width: 350px) {
      width: 95%;
    }

    input {
      width: 70%;
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
      border: none;
      font-family: "Karla", sans-serif;
      padding: 0.5rem;
      background-color: white;
      cursor: pointer;

      &:focus {
        border: none;
        outline: none;
        background: white !important;
      }
    }
  }
`;
const StyledFooterMissions = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 80%;
  @media (max-width: 780px) {
    width: 100%;
    margin: 1rem;
  }
  p {
    margin-bottom: 0;
    @media (max-width: 780px) {
    text-align: center;
    
  }
  }
`;

const DowloadLogo = styled.div`
  display: flex;
  img {
    width: 45%;
    padding: 0.3rem;
  }
`;

export {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  StyleFooterForm,
  FooterContainer,
  DowloadLogo
};
