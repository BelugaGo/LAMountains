import { styled } from "styled-components";

export const HeroBox = styled.div`
    display: flex;
`;

export const HeroImg = styled.img`
    width: 100%;
`;

export const Icon = styled.img`
    height: 45px;
    padding: 3px;
   
    // copied and paste transform from a recent project
    &:active {
 transform: translateY(1px);
    }
`;

export const IconAndNavWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  gap: 8rem;
  width: 90%;
  height: min-content;
`;

export const History = styled.a`
    color: inherit;
`;

export const Team = styled.a`
    color: inherit; 
`;

export const HandTeamNav = styled.div`
    display: flex;
    gap: 20px;
    font-size: 1.4vh;
    font-family: 'Lato', sans-serif;
    color: #fefeff;
    letter-spacing: 1.0px;
    word-spacing: 1.5px;
    text-underline-offset: 4px;

    @media screen and (max-width:480px) {
      font-size: 10px;
      gap: 25px;

    }
`;
