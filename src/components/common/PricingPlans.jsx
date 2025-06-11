import React from "react";
import Title from "./Title";
import { MEMBERSHIP_PLANS_LIST } from "./Helper";
import { RightTickArrow } from "./Icons";
import Image from "next/image";

const PricingPlans = () => {
  return (
    <div>
      <div className="container 2xl:max-w-[1200px] mx-auto px-5">
        <Title className={"text-center"} text={"Pricing Plans"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {MEMBERSHIP_PLANS_LIST.map((obj, i) => (
            <div
              key={i}
              className="group border border-[#FE5B00] border-opacity-30 group-hover:border-opacity-[100%] hover:bg-[#181818] w-full transition-all duration-300"
            >
              <div className="px-6 py-[23.5px]">
                <h2 className="font-semibold leading-[100%] text-2xl text-white">
                  {obj.type}
                </h2>
                <p className="text-white font-extrabold text-[32px] sm:text-[28px] leading-[100%] pt-[26px]">
                  {obj.price}
                  <span className="font-normal text-xl">{obj.days}</span>
                </p>
              </div>
              <div className="border border-[#d4d4d4] border-opacity-40"></div>
              <div className="px-6 ">
                <h4 className="font-semibold text-lg leading-[150%] text-[#FF4601] text-opacity-90 pt-[31px] pb-[18px]">
                  Includes:-
                </h4>
                <ul className="flex flex-col gap-2">
                  {obj.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm sm:text-base leading-[150%] text-white/90"
                    >
                      <RightTickArrow />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center pt-[31px] pb-6">
                  <button className="border border-[#FF4601] font-medium text-lg sm:text-xl leading-[100%] text-white py-[18px] max-md:py-3 w-full transition-all duration-300 group-hover:bg-[#FF4601] group-hover:text-white">
                    Get Membership
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
