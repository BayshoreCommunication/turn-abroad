import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import SliderContent from "./SliderContent";

const Slider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 1000 }}
        onSlideChange={() => "slide change"}
        // onSwiper={}
      >
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
      </Swiper>
      {/* <div className="absolute top-1/2 -translate-y-1/2 z-50 left-0 w-full">
        <button
          onClick={slidePrev}
          className="text-xl md:text-5xl lg:-left-[1%] xl:-left-[5%] xxl:-left-[10%] relative border rounded-full text-[#A8A8A8]"
        >
          <MdOutlineArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 z-50 right-0 w-full">
        <button
          onClick={slideNext}
          className="text-xl md:text-5xl lg:left-[96%] xl:left-[101%] xxl:left-[110%]  right relative border rounded-full text-[#A8A8A8]"
        >
          <MdOutlineArrowRight />
        </button>
      </div> */}
      {/* <div className="swiper-nav-btns hidden  lg:inline-flex justify-between items-center gap-6 absolute w-full z-[999] top-1/2 -translate-y-2/4 px-4 lg:-px-[2%] xl:-px-[3%] xxl:px-[10%]">
        <button
          onClick={() => slidePrev()}
          className="text-xl md:text-2xl text-black bg-slate-300 rounded-full p-2"
        >
          <MdOutlineArrowLeft size={24} />
        </button>
        <button
          onClick={() => slideNext()}
          className="text-xl md:text-2xl text-black bg-slate-300 rounded-full p-2"
        >
          <MdOutlineArrowRight size={24} />
        </button>
      </div> */}
    </div>
  );
};

export default Slider;
