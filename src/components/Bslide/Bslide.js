import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "../Bslide/Bslide.css";

import { FreeMode, Pagination } from 'swiper/modules';

const Bslide = () => {
    return (
        <div className='bslide-area px-2 pt-4'>
        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='slide-1 px-2 pt-4'>
          <div className='border-box'>
          <h5>Asian black bears</h5>
          <p>Nulla Lorem mollit cupidatat irure. Laborum to magna nulla duis ullamco cillum dolor.</p>
          <button className='slide-btn'>Learn more</button>
          <button className='slide-btn2 next'><i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='slide-2 px-2 pt-4'></SwiperSlide>
        <SwiperSlide className='slide-3 px-2 pt-4'></SwiperSlide>
        <SwiperSlide className='slide-1 px-2 pt-4'>
        <div className='border-box'>
          <h5>Asian black bears</h5>
          <p>Nulla Lorem mollit cupidatat irure. Laborum to magna nulla duis ullamco cillum dolor.</p>
          <button className='slide-btn'>Learn more</button>
          <button className='slide-btn2 next'><i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='slide-text d-flex'>
       <h4>Asian black bears</h4>
       <h4 className='text2'>American flamingo</h4>
       <h4>Lions</h4>
      </div>
            
        </div>
    );
};

export default Bslide;