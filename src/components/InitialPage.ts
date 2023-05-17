import styled from "styled-components";

export const InitialPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

export const InitialImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: center;
`;

export const InitialText = styled.p`
    font-size: large;
    font-weight: 600;
    margin: 0;
    text-align: center;
    color: rgba(131, 115, 255,0.8);
    text-shadow: 1px 1px 15px rgba(131, 145, 255,0.8);
`;