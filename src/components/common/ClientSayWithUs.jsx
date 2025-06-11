"use client";
import React, { useRef } from "react";
import Title from "./Title";
import { CLIENTS_REVIEWS } from "./Helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";
import Para from "./Para";

const ClientSayWithUs = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-[100px] max-xl:py-20 max-lg:py-16">
      <div className="container 2xl:max-w-[1200px] mx-auto px-5">
        <Title
          text="What clients say with us"
          className="text-center max-w-[512px] mx-auto"
        />
        <p className="pt-4 max-w-[720px] mx-auto text-center text-xl leading-[171%] text-white max-md:text-base">
          Fitness Point has completely changed my lifestyle. The trainers are
          incredibly supportive, and the atmosphere keeps me motivated every
          day. I’ve never felt stronger or more confident!
        </p>
        <Para text={""} />

        <div className="relative">
          <Swiper
            spaceBetween={0}
            loop={true}
            centeredSlides={true}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            slidesPerView={1}
          >
            {CLIENTS_REVIEWS.map((obj, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col items-center justify-center text-center w-full pt-7 max-md:pb-12"
              >
                <div className="flex justify-center">
                  <Image
                    src={obj.starImage}
                    alt={obj.name}
                    width={173}
                    height={32.5}
                    className="pointer-events-none"
                  />
                </div>
                <h2 className="font-medium text-[30px] text-white pt-9 pb-[26px] max-lg:py-6 max-sm:py-4">
                  {obj.name}
                </h2>
                <div className="flex justify-center">
                  <Image
                    src={obj.profileImage}
                    alt={obj.name}
                    width={112}
                    height={112}
                    className="pointer-events-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <button
              className="prev-btn absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 
             max-xl:left-0 max-lg:left-0 max-md:top-[104%] max-md:left-[40%]"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <LeftArrowIcon className={"max-md:w-[20px] max-md:h-[25px] max-lg:size-[26px]"}/>
            </button>

            <button
              className="next-btn absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 
             max-xl:right-0 max-lg:right-0 max-md:top-[104%] max-md:right-[40%]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <RightArrowIcon className={"max-md:w-[20px] max-md:h-[25px] max-lg:size-[26px]"}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSayWithUs;
