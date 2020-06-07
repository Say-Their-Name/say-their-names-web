import styled from 'styled-components';

const TabActive = styled.a`
  position: relative;
  width: 30%;
  padding: 15px 32px;
  font-size: 16px;
  color: #fff;
  background: #000000;
  text-transform: uppercase;
  margin-right: 5px;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-width: 16px 16px 0px 0;
    border-style: solid;
    border-color: #fff #000000;
}
`;

const TabInactive = styled.a`
  position: relative;
    color: #000000;
    width: 30%;
    padding: 13px 32px;
    font-size: 16px;
    border: 2px solid #000000;
    text-transform: uppercase;
    margin-right: 5px;
}
`;


export {
  TabActive,
  TabInactive
};
