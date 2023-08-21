import styled from "styled-components";


export const StickyNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  gap: 3.5rem;
  height: 65px;


@media screen and (max-width:480px) {
  height: 50px;
}

`;

export const LALogo = styled.img`
    height: 27px;
    
   @media screen and (max-width:480px) {
       height: 22px ;
   }

    &:active {
 transform: translateY(1px);
    }
`;

export const HandTeamStickyNav = styled.div`
    display: flex;
    gap: 30px;
    font-size: 1.4vh;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    word-spacing: 1.5px;
    text-underline-offset: 4px;

    @media screen and (max-width:480px) {
      font-size: 10px;
      gap: 25px;

    }
`;