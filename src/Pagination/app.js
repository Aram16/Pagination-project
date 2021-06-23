import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EventsPage from './index'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./index.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function App() {
  
  
  
  return (
    <>
        <Swiper
            slidesPerView={3} 
            spaceBetween={30} 
            slidesPerGroup={3} 
            loop={true} 
            loopFillGroupWithBlank={true} 
            pagination={{
                "clickable": true
            }} 
            navigation={true} 
            className="mySwiper"
        >
            <SwiperSlide> <EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
            <SwiperSlide><EventsPage /></SwiperSlide>
        </Swiper>
    </>
  )
}