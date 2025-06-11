"use client";
import React, { useEffect, useState } from "react";
import { NAVBAR_LIST } from "./Helper";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (isOpen && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleOverflow);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex items-center justify-between container 2xl:max-w-[1200px] mx-auto px-5 pt-[30px]">
        <a href="/">
          <Image
            src="/assets/images/page-logo.webp"
            alt="logo"
            width={209}
            height={49}
            className="pointer-events-none max-md:w-[180px] pb-1"
          />
        </a>
        <div
          className={`flex items-center justify-center max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-black max-lg:z-[90] transition-transform duration-300 ${
            isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"
          }`}
        >
          <ul className="flex items-center justify-center gap-[26px] max-lg:flex-col max-lg:gap-6">
            {NAVBAR_LIST.map((obj, i) => (
              <li key={i}>
                <a
                  href={obj.link}
                  onClick={handler}
                  className="leading-[100%] text-xl font-medium transition-all duration-300 text-white/90 hover:text-[#ff4601]"
                >
                  {obj.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden pt-8">
            <CustomBtn text="Contact Us" />
          </div>
        </div>
        <div className="max-lg:hidden">
          <CustomBtn text="Contact Us" />
        </div>
        <button
          onClick={handler}
          className="flex flex-col justify-center items-center z-[100] gap-1 lg:hidden relative size-6"
        >
          <span
            className={`h-1 w-full bg-[#FF4601] rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-[#FF4601] rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-[#FF4601] rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </button>
      </nav>
    </>
  );
};

export default Header;
