import styled from "styled-components";


export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 65px;
  background-color: #414f6b;
`;

export const LALogo = styled.img`
    height: 35px;
    &:active {
    transform: translateY(1px);
    }

    @media screen and (max-width:480px) {
        height: 30px;
        padding: 5px;
    }
`;

export const CopyRight = styled.h5`
    color: #63769d;

    @media screen and (max-width:480px) {
    font-size: 10px;
    }
`;

export const CopyWrapper = styled.div`
    font-size: 13px;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    word-spacing: 1.5px;
    
`;