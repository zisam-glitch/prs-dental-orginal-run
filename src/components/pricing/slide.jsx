import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-20" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
