import styled from 'styled-components';

const Profile = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PersonalInformation = styled.div`
    display: flex;
    width: 655px;
    height: 338px;
    border: 1px solid red;
`;
const Photo = styled.div`
    img {
        width: 270px;
        height: 338px;
    }
`;

const PersonSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 317px;
    /* height: 317px; */
    justify-content: center;
    align-items: center;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 217px;

        h2 {
            margin:0px
        }
    }
`;

const H4 = styled.h4`
    margin:  0px;
`;

const Div = styled.div`
    display: flex;
    height: 46px;
    width: 159px;
    justify-content: flex-start;
    border: 1px solid brown;
    margin: 10px -20px;
`;

const Age = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    width: 45%;
    height: 45px;
    border: 1px solid yellow;
    h2 {
            margin:0px
        }
`;


export {
  Profile, PersonalInformation, Photo, PersonSection, Name, H4, Div, Age
};
