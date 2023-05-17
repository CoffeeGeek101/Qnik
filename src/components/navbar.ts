import styled from "styled-components";

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    padding: 20px 70px;
    box-sizing: border-box;
    box-shadow: 0px 2px 14px 5px rgba(0,0,0,0.1);
    border-bottom : 1px solid #E2E2E2;
    background-color: rgba(255,235,252,0.3)
`;

export const Logo = styled.p`
    font-size: 35px;
    font-weight: 900;
    letter-spacing: 2px;
    color: beige;
    text-shadow:
    0px 1px 0px #8391FF,
    1px 0px 0px #FFBFE2,
    1px 2px 1px #8391FF,
    2px 1px 1px #FFBFE2,
    2px 3px 2px #8391FF,
    3px 2px 2px #FFBFE2,
    3px 4px 2px #8391FF,
    4px 3px 3px #FFBFE2,
    4px 5px 3px #8391FF,
    5px 4px 2px #FFBFE2,
    5px 6px 2px #8391FF,
    6px 5px 2px #FFBFE2,
    6px 7px 1px #8391FF,
    7px 6px 1px #FFBFE2,
    7px 8px 0px #8391FF,
    8px 7px 0px #FFBFE2;
    cursor: pointer;
    &:hover {
        scale: 1.1;
    }
    transition: all 0.2s ease-in-out;
`;

export const ActionButton = styled.button`
    width: 150px;
    height: auto;
    padding: 10px 15px;
    background-color: #FFBFE2;
    border-radius: 20px;
    border: 1px rgba(0,0,0,0.1) solid;
    box-shadow: 0px 2px 10px 5px rgba(0,0,0,0.1);
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    &:hover {
        background-color: #8391FF;
        color: white;
        cursor: pointer;
    }
    &:active {
        scale: 0.9;
    }
`;