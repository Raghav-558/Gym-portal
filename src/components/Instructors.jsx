"use client";
import React, { useRef } from "react";
import Title from "./common/Title";
import {
  InstructionLeftArrowIcon,
  InstructionRightArrowIcon,
} from "./common/Icons";
import { INSTRUCTORS_LIST } from "./common/Helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Instructors = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-[150px] max-xl:py-20 max-lg:py-16">
      <div className="container 2xl:max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between pb-[60px] max-md:pb-10 max-md:flex-col max-md:items-center">
          <Title text={"Instructors"} className="max-md:text-center" />
          <div className="flex items-center gap-3 max-md:hidden">
            <button
              className="size-[52px] flex items-center justify-center border border-white hover:border-[#FF4601] hover:bg-[#FF4601] transition-all duration-300 rounded-full group"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <InstructionLeftArrowIcon
                className={"group-hover:stroke-white"}
              />
            </button>
            <button
              className="size-[52px] flex items-center justify-center border border-white hover:bg-[#FF4601] hover:border-[#FF4601] transition-all duration-300 rounded-full group"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <InstructionRightArrowIcon
                className={"group-hover:stroke-white"}
              />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {INSTRUCTORS_LIST.map((obj, i) => (
            <SwiperSlide key={i}>
              <div className="group text-center">
                <Image
                  src={obj.image}
                  alt={obj.name}
                  width={271}
                  height={400}
                  className="object-cover w-full pointer-events-none border border-transparent group-hover:border-[#ff4601] transition-all duration-300"
                />
                <p className="font-medium text-2xl leading-[100%] text-white pt-6">
                  {obj.name}
                </p>
                <p className="text-[18px] leading-[171%] text-white/80 pt-[3px]">
                  Gym trainer
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-3 justify-center pt-10 md:hidden">
          <button
            className="size-[52px] flex items-center justify-center border border-white hover:border-[#FF4601] hover:bg-[#FF4601] transition-all duration-300 rounded-full group"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <InstructionLeftArrowIcon className={"group-hover:stroke-white"} />
          </button>
          <button
            className="size-[52px] flex items-center justify-center border border-white hover:border-[#FF4601] hover:bg-[#FF4601] transition-all duration-300 rounded-full group"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <InstructionRightArrowIcon className={"group-hover:stroke-white"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
