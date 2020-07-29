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
  justify-content: space-between;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '20%')};

  h2 {
    margin: 0px;
    font-size: 17px;
    line-height: 20px;

    span {
      color: grey;
      font-size: 0.9rem;
    }
  }
  background-color: ${Color.WHITE};

  @media (max-width: 780px) {
    width: 100%;
    align-items: center;
    margin: 0.5rem;
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

  @media (max-width: 780px) {
    align-items: center;
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

const DownloadLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    width: 80%;
  }
`;

export {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  FooterContainer,
  DownloadLogo
};
