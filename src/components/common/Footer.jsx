"use client";
import Link from "next/link";
import {
  CONTACT_US_LIST,
  QUICK_LINKS,
  SOCIAL_LINKS,
} from "./Helper";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#180B06] relative">
      <div className="container 2xl:max-w-[1200px] px-5 mx-auto max-lg:mr-auto max-lg:flex max-lg:justify-start pt-[38px] pb-[41px]">
        <div className="flex items-start justify-between max-lg:flex-wrap">
          <div className="">
            <Link className="lg:w-full" href="/">
              <Image
                src="/assets/images/footer-logo-image.webp"
                alt="TripNest Logo"
                width={325}
                height={63}
                className="pointer-events-none max-lg:w-[220px]"
              />
            </Link>
            <p className="font-normal leading-[171%] text-xl text-white max-w-[413px] pt-4 pb-[30px] max-md:text-base">
              A modern gym with expert trainers, top equipment, and a community
              that motivates you to reach your goals.
            </p>
            <p className="font-medium leading-[100%] text-[26px] text-[#ff3D00] max-md:text-xl">
              Follow Us On
            </p>
            <div className="flex items-center gap-[31px] max-lg:gap-4 mt-5">
              {SOCIAL_LINKS.map((obj, i) => (
                <Link
                  href={obj.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 hover:translate-y-[-4px] transition-transform duration-300"
                >
                  {obj.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-20 max-lg:pt-10 max-md:gap-10">
            <div className=" pb-3 sm:pb-0">
              <h4 className="text-[#ff3D00] text-[26px] leading-[100%] font-medium pb-6 max-md:text-xl whitespace-nowrap">
                Quick Links
              </h4>
              {QUICK_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block pb-6 text-xl max-md:text-base text-white hover:text-[#ff3d00] transition-all duration-200 ease-in-out"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className=" pb-3 sm:pb-0 flex flex-col gap-6">
              <h4 className="text-[#ff3D00] text-[26px] leading-[100%] font-medium max-md:text-xl">
                Contact Us
              </h4>
              {CONTACT_US_LIST.map((link, index) => (
                <div
                  className="block text-xl text-white max-md:text-base hover:text-[#ff3d00] transition-all duration-200 ease-in-out"
                  key={index}
                >
                  <p className="">{link.time}</p>
                  <p className="xl:whitespace-nowrap">{link.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-white/20">
        <p className="text-center text-base max-sm:text-sm py-4 text-white opacity-70">
          Powered by
          <strong className="font-semibold">
            &nbsp;
            <Link
              className="text-white/90 text-xl leading-[100%]"
              href="https://myservices.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Services
            </Link>
          </strong>
          — Let’s grow together 🌱 <br />© {new Date().getFullYear()}
          <strong>
            &nbsp;
            <Link
              href="https://www.codemaster.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 text-white/90 text-xl leading-[100%]"
            >
              Fitness Point
            </Link>
          </strong>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
