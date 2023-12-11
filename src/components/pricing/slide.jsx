import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay,  Mousewheel, Keyboard } from "swiper";


export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 300,
        }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={6}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img className=" px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="px-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Bupa_logo.svg/800px-Bupa_logo.svg.png?20180213120730" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
