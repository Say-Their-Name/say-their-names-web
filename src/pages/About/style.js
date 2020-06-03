import styled from 'styled-components';
import Color from '../../constants/Color';

const StyledAbout = styled.div`
 
  line-height: 1.6;
  font-weight: normal;
  margin: auto;
  background-color: ${Color.WHITE};
  text-align: center;
  width: 50%;
  padding: 5rem 3rem;
 

  h2 {
    margin-top: 0;
    text-align: left;
    font-weight: 'bold';
    

  }
  
`;


const StyledAboutContainer = styled.div`


  h3 {
   
  font-weight: 'bold';
  text-align: left;

  }

  p{
    margin-left: auto;
    margin-right: auto;
    color:#333;
    word-wrap:break-word;
    text-align: justify;
    
  }
  hr{
    padding: 0px;
    margin: 0px;    
  }
  a:hover: {
    textDecoration: 'underline',
  }
 
`;


export {

  StyledAbout,
  StyledAboutContainer

};
