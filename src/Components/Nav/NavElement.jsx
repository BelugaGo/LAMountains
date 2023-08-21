import styled from "styled-components";


export const StickyNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  height: 65px;
`;

export const LALogo = styled.img`
    height: 35px;
    
    &:active {
 transform: translateY(1px);
    }
`;

export const HandTeamStickyNav = styled.div`
    display: flex;
    gap: 30px;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    word-spacing: 1.5px;
    text-underline-offset: 4px;
`;