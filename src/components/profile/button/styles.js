import styled from 'styled-components';

const BackProfile = styled.section`
    margin: 20px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 95vw;
    button {
        width: 162px;
        height: 36px; 
        border: 1px solid black;
        background-color: white; 
        cursor: pointer;
        outline: none;
        :hover {
            opacity: 0.7
        }     
    }
`;

export default BackProfile;
