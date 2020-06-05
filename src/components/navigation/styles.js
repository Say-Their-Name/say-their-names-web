import styled from "styled-components";
import Color from "../../constants/Color";

const StyledNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  width: 100%;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const StyledNavigationLogo = styled.div`
  padding: 1rem;
  a {
    display: flex;
    align-items: center;
  }
  img {
    height: 40px;
    margin-right: 15px;
  }
  h1 {
    font-size: 20px;
    margin: 0;
    color: ${Color.WHITE};
    text-transform: uppercase;
  }
`;

const StyledNavigationLinks = styled.div`
  a {
    color: ${Color.WHITE};
    margin: 0 25px;
    position: relative;
    text-decoration: none;
    padding-bottom: 0.5rem;

    @media (max-width: 780px) {
      margin: 0 15px;
    }

    @media (max-width: 680px) {
      margin: 0;
    }
  }

  .active {
    border-bottom: 2px solid ${Color.WHITE};
    &:after {
      background: inherit;
      transition: none;
    }
  }

  a:after {
    content: "";
    background: none;
    bottom: 0;
    top: 1.5em;
    left: 50%;
    height: 2px;
    width: 0;
    position: absolute;
    background: ${Color.WHITE};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 680px) {
    text-align: center;
    margin: 0 auto;
    padding: 0.5em;
  }
`;

const StyledNavigationLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

export {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
  StyledNavigationLinkContainer,
};
