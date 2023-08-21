import React from 'react';
import { HistoryBox, HistoryImg, History1, } from './HistoryElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



function History() {

  return (
    <HistoryBox id="history">
      <HistoryImg src='Photos/History.jpg' />
      <div className='background'></div>
      <History1>
        <span className='Number'>01.</span>
        <span className='Text'>History</span>
        <p className='Paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus doloremque delectus nulla quis. Dignissimos, exercitationem. Sint veniam itaque est tenetur maiores, excepturi dignissimos fuga odio deleniti earum blanditiis molestiae!</p>
        
        {/*Outside sources ( Carousel Element - https://swiperjs.com/react ) */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'3'}
          slideShadows={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          autoplay

          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="Photos/Group8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group10.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group10.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group10.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Photos/Group10.png" />
          </SwiperSlide>
        </Swiper>
      </History1>
    </HistoryBox>

  )
}

export default History;



