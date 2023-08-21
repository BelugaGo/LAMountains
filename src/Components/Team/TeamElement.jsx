import { styled } from "styled-components";

export const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Team2 = styled.div`
     display: flex;
     width: 80%;
     height: 100%;
     align-items: center;
     font-family: 'Oswald', sans-serif;
     color:#414f6b;
    

.Number {
  font-size: 7.5vw;
  opacity: 0.6;
  transform: translateY(-5%);

  @media screen and (max-width:480px) {
    font-size: 12vw;
  }
}

.Text {
  transform: translateX(-20%);
  color: #414f6b;
  font-size: 3.3vw;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (max-width:480px) {
    font-size: 5vw;
  }
}

.Paragraph {
 transform: translateY(-30%);
 font-family: 'Arimo', sans-serif;
 font-size: 1.7vw;
 font-weight: 300;
 line-height: 1.5;

 @media screen and (max-width:480px) {
    font-size: 2.2vw;
    transform: translateY(-10%);
    line-height: 10px;
  }
}
`;