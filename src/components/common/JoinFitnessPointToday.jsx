"use client";
import React, { useState } from "react";
import Title from "./Title";
import CustomBtn from "./CustomBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinFitnessPointToday = () => {
  const [email, setEmail] = useState("");
  const toastId = React.useRef(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      if (!toastId.current) {
        toastId.current = toast.error("Email is required!", {
          onClose: () => (toastId.current = null),
        });
      }
      return;
    }

    if (!validateEmail(email)) {
      if (!toastId.current) {
        toastId.current = toast.error("Invalid email format!", {
          onClose: () => (toastId.current = null),
        });
      }
      return;
    }

    toast.success("Successfully joined Fitness Point!");
    setEmail("");
    toastId.current = null;
  };

  return (
    <div className="pt-[150px] pb-[120px] max-xl:pt-20 max-lg:pt-16 container 2xl:max-w-[1200px] mx-auto px-5">
      <div className=" inbox-bg">
        <div className="pt-[77px] pb-[76px] max-md:py-[60px] px-4">
          <Title text={"Join Fitness Point Today"} className={"text-center"} />
          <p className="text-xl text-white leading-[171%] font-normal text-center mt-4 max-md:text-base">
            Get fit with expert support and world-class equipment. Join us
            today!
          </p>
          <ToastContainer position="bottom-right" autoClose={3000} />
          <form
            noValidate
            className="flex items-center justify-center gap-3 pt-8 max-md:pt-5 max-md:flex-col max-md:gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-xl leading-[100%] text-black py-3 px-4 max-md:py-2.5 max-md:px-3 bg-white outline-none"
            />
            <CustomBtn
              text={"Join Now"}
              myClass="bg-black border-black hover:border-white"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinFitnessPointToday;
