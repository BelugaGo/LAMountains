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
  width: 90%;
  height: min-content;
`;

export const History = styled.a`
    color: inherit;
    transition: all .5s ease-in-out;

    &:hover {
     transform: scale(0.9);
     
    }
`;

export const Team = styled.a`
    color: inherit;
    transition: all .5s ease-in-out;

    &:hover {
    transform: scale(0.9); 
    }
`;

export const HandTeamNav = styled.div`
    display: flex;
    gap: 30px;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    color: #fefeff;
    letter-spacing: 1.0px;
    word-spacing: 1.5px;
    text-underline-offset: 4px;
`;
