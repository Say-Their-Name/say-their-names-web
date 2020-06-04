import styled from 'styled-components';

const ShareSection = styled.section`
display: flex; 
flex-wrap: wrap;
cursor: pointer;
flex-direction: row;
width : 247px;
:hover {
  opacity: 0.9;
}

i{
  font-size: 32px
}

  p {
    margin: 5px 0px;
  }
`;

const ShareStyle = styled.div`
margin: 1rem 0;
display: flex;
flex-wrap: wrap; 
display: inline-block;

h3 {
  margin: 5px;
  font-weight: bold;
  font-family: Karla;
  font-style: normal;
  font-size: 17px;
  line-height: 20px;
}
`;

export {
  ShareStyle,
  ShareSection
};
