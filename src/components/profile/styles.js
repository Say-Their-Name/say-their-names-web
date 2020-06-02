
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
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    color: rgba(16, 16, 16, 0.47129);
`;

const Div = styled.div`
    display: flex;
    height: 46px;
    width: 217px;
    justify-content: flex-start;
    margin: 10px;
`;

const Age = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    width: 45%;
    height: 45px;
    border-right: 1px solid #D8D8D8;;
    h2 {
            margin:0px
        }
`;

const Location = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    width: 217px;
    height: 45px;
    h2 {
            margin:0px
        }
`;

const Button = styled.div`
    margin: 15px 0px;
    button {
        width:244px;
        height: 46px;
        color: white;
        background-color: black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }
`;

const ShareSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;

    p {
        margin: 5px;
    }
`;

const H2 = styled.h2`
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #101010;
`;


export {
  Profile, PersonalInformation, Photo, PersonSection, Name, H4, Div, Age, Location, ShareSection, Button, H2
};
