import styled from "styled-components";
import { devices } from "../../styles";

export const Hero = styled.div`
    display: flex;
    width: 100vw;
    gap: 10px;
    box-sizing: border-box;
    padding: 0px 80px;
    margin-top: 20px;
    padding-bottom: 40px;
`;

export const UserWrapper = styled.div`
        width: 100%;
        padding: 30px 40px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: start;
        box-sizing: border-box;
        margin: auto;
`;

export const HeroTitle = styled.p`
    font-size: 45px;
    font-weight: 900;
    text-shadow: 1px 1px 1px white;
    margin: 0;
`;

export const UserHolder = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (${devices.md}) {
    justify-content: center;
    }
    @media only screen and (${devices.lg}) {
    justify-content: center;
    }
    @media only screen and (min-width: 1369px) {
      justify-content: start;
    }
`;


export const UserCard = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border: 1px solid rgba(131, 145, 255,0.2);
    border-radius: 10px;
    box-shadow: 1px 1px 6px 3px rgba(131, 145, 255,0.2);
    transition: all 0.2s ease-in-out;
    background-color: rgba(131, 145, 255,0.1) ;
    background: linear-gradient(145deg, rgba(255, 255, 255,0.1) 40%, rgba(131, 145, 255,0.2) 100%);
    &:hover {
        cursor: pointer;
        scale: 1.1;
        box-shadow: 1px 1px 16px 3px rgba(131, 145, 255,0.2);
    }
    @media only screen and (${devices.xl}) {
    width: 250px;
    height: 300px;
  }
  @media only screen and (${devices.lg}) {
    width: 280px;
    height: 320px;
  }
  @media only screen and (${devices.md}) {
    width: 200px;
    height: 250px;
  }
  @media only screen and (${devices.sm}) {
    width: 300px;
    height: 250px;
  }

`;

export const UserImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    box-shadow: 1px 1px 6px 3px rgba(0,0,0,0.1);
`;

export const UserEmail = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin: 0;
`;

export const UserName = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-top: -10px;
`;
