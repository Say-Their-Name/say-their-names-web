import styled from 'styled-components';
import Color from '../../constants/Color';

const TabActive = styled.button`
  padding: 0.7rem;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background: ${Color.PRIMARY};
  text-transform: uppercase;
  margin-right: 5px;

  @media (max-width: 610px) {
    font-size: 12px;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    border-color: ${Color.WHITE} ${Color.PRIMARY};
  }

  &:focus {
    outline: 2px solid black;
  }

`;

const TabInactive = styled.button`
  color: ${Color.PRIMARY};
  padding: 0.7rem;
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  border: 1px solid ${Color.PRIMARY};
  text-transform: uppercase;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (max-width: 610px) {
    font-size: 12px;
  }

  &:hover {
    background-color: ${Color.PRIMARY};
    color: ${Color.WHITE};
  }

  &:focus {
    outline: 2px solid black;
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
  align-items: center;
`;

export { TabActive, TabInactive, TabNav };
