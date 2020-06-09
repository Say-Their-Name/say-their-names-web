import styled from 'styled-components';
import Color from '../../constants/Color';

const TabActive = styled.a`
  /* padding: 15px 32px; */
  padding: 0.7rem 1rem;
  font-size: 16px;
  color: #fff;
  background: ${Color.PRIMARY};
  text-transform: uppercase;
  margin-right: 5px;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    border-color: ${Color.WHITE} ${Color.PRIMARY};
  }
`;

const TabInactive = styled.a`
  color: ${Color.PRIMARY};
  padding: 0.7rem 1rem;
  font-size: 16px;
  border: 2px solid ${Color.PRIMARY};
  text-transform: uppercase;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${Color.PRIMARY};
    color: ${Color.WHITE};
  }

  @media (max-width: 800px) {
    margin: 0.5rem 5px 0.5rem 0;
  }
`;

const TabNav = styled.nav`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 610px) {
    justify-content: center;
  }
`;

export { TabActive, TabInactive, TabNav };
