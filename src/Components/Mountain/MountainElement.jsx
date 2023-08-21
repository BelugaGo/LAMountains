import { styled } from "styled-components";


export const MountainBox = styled.div`
    display: grid;

    @media screen and (max-width:670px) {
        display: none;
    }
`;


export const Title = styled.span`
      font-size: 22px;
      font-family: 'Lato', sans-serif;
      position: absolute;
      color: #414f6b;
      text-transform: uppercase;
      transform: translateX(10%);
      padding: 5px;

      @media screen and (max-width:670px) {
        font-size: 15px;
    }
`;

export const Dates = styled.div`
     align-self: center;
     background-color: #ffffff;
     opacity: 0.7;
     transform: translateX(80%);
     width: 352px;
     height: 229px;
     position: absolute;
     box-shadow: 10px 10px 79px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 79px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 79px 0px rgba(0,0,0,0.75);
    

     @media screen and (max-width:670px) {
        transform: translateX(20%);
        width: 250px;
        height: 200px;
     }

     // assistance with grid from - https://cssgrid-generator.netlify.app/
       .text {
        display: grid;
        transform: translateY(30%);
        grid-template-columns: repeat(2, 0fr) repeat(2, 1fr);
        grid-template-rows: repeat(4,1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 10px;
        line-height: 35px;
       font-family: 'Montserrat', sans-serif;
       font-weight: 700;

        @media screen and (max-width:670px) {
        font-size: 12px;
     }
       }

.div1 { grid-area: 1 / 3 / 2 / 4; }
.div2 { grid-area: 1 / 4 / 2 / 5; }
.div3 { grid-area: 2 / 3 / 3 / 4; }
.div4 { grid-area: 2 / 4 / 3 / 5; }
.div5 { grid-area: 3 / 3 / 4 / 4; }
.div6 { grid-area: 3 / 4 / 4 / 5; }
.div7 { grid-area: 4 / 3 / 5 / 4; }
.div8 { grid-area: 4 / 4 / 5 / 5; }

`;

export const MountainImage = styled.img`
    width: 100%;
`;

export const ImageSwitch = styled.div`
    display: flex;
    background-color: #414f6b;
    position: absolute;
    width: 100%;
    font-family: 'Oswald', sans-serif;
    
    
    
    .Adjust {
        padding: 3px;
        word-spacing: 10px;
        font-size: 2.2vw;
        transform: translateX(50%);
        letter-spacing: 1.9px;
        text-transform: uppercase;
        color: #b0b4be;
        
        
        .Mountain1 {
        text-decoration: none;
        color: inherit;

         &:target {
         color:#414f6b;
         background-color:#b0b4be;
         padding: 3px;
         text-decoration: underline;
         text-underline-offset: 3px;
            }
        }
        

       .Mountain2 {
        color: inherit;
        text-decoration: none;

        &:target {
         color:  #414f6b;
         background-color:#b0b4be;
         padding: 3px;
         text-decoration: underline;
         text-underline-offset: 3px;
            }
        }
    }
`;

