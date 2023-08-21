import styled from 'styled-components'

export const HistoryBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    
    .background {
  position: absolute;
  bottom: 0;
  opacity: 0.5;
  width: 100%;
  height: 22%;
  background-color:#414f6b;
 
  @media screen and (max-width:480px) {
    height: 30%;
  }
}
`;

export const HistoryImg = styled.img`
    width: 100%;
`;

export const History1 = styled.div`
     position: absolute;
     width: 80%;
     height: 100%;
     font-family: 'Oswald', sans-serif;
     color:#414f6b;
   


.Number {
  display: inline-block;
  font-size: 7.5vw;
  opacity: 0.6;
  transform: translateY(12%);

  @media screen and (max-width:480px) {
    font-size: 10vw;
  }
}

.Text {
  display: inline-block;
  transform: translateX(-16%);
  color: #414f6b;
  font-size: 3.3vw;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (max-width:480px) {
    font-size: 4vw;
  }
}

.Paragraph {
 transform: translateY(-5%);
 font-family: 'Arimo', sans-serif;
 font-size: 1.6vw;
 font-weight: 300;
 line-height: 1.5;

 @media screen and (max-width:480px) {
    font-size: 1.9vw;
    transform: translateY(-10%);
    line-height: 10px;
  }
}

.swiper {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    bottom: 0;
    padding: 10px;

    @media screen and (max-width:480px) {
      width: 100%;
    }
}
 
.swiper-slide {
    width: 100px;
}

.swiper-slide img {
    margin: 0 auto;
    display: block;
    width: 100%;
}
`;