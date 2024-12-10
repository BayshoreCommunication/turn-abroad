"use client";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
const WorkerConsultationFrom = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileNoRef = useRef();
  const preferenceRef = useRef();
  const checkboxRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      mobileNo: mobileNoRef?.current?.value,
      preference: preferenceRef?.current?.value,
    };

    if (!nameRef?.current?.value) {
      return toast.error("Please Enter Your Name", {
        toastId: "workerConsultationFromNameError",
        position: "top-right",
      });
    }
    if (!emailRef?.current?.value) {
      return toast.error("Please Enter Your Email", {
        toastId: "workerConsultationFromNameEmailError",
        position: "top-right",
      });
    }
    emailjs
      .send(
        "service_f7361to",
        "template_65cwawu",
        templateParams,
        "B3NmXWHKDF1AhfJI6"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          return toast.success(
            <div className=" w-full max-w-md text-center">
              <p className="text-lg text-start font-semibold text-green-700 mb-2">
                Thanks For Your Submission.
              </p>
              <p className="text-base text-start font-normal text-gray-700 ">
                Our Team Will Reach Out To You Shortly
              </p>
            </div>,
            {
              toastId: "workerConsultationForm",
              position: "top-center",
              transition: Slide,
              style: {
                width: "400px", // Adjust the width as needed
              },
            }
          );
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    mobileNoRef.current.value = "";
    preferenceRef.current.value = "";
    checkboxRef.current.checked = false;
  };
  return (
    <div className="w-full xl:max-w-lg p-8 h-fit bg-[#F3F9FF] ">
      <h2 className="text-2xl  text-center mb-4 md:mb-8 font-bold text-secondary leading-normal">
        Book Your Free Consultation with Certified Counselors
      </h2>
      <form
        action=""
        onSubmit={sendMessage}
        className=" flex flex-col w-full gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          ref={nameRef}
          required
          className="input border-[#B7BBBF] w-full focus:outline-none bg-transparent"
        />
        <input
          type="email"
          name="email"
          ref={emailRef}
          autoComplete="off"
          placeholder="Email"
          required
          className="input border-[#B7BBBF] w-full focus:outline-none bg-transparent"
        />
        <input
          ref={mobileNoRef}
          name="mobileNo"
          type="text"
          autoComplete="off"
          placeholder="Mobile Number"
          className="input border-[#B7BBBF] w-full focus:outline-none bg-transparent"
        />
        <select
          ref={preferenceRef}
          name="preference"
          className="select border-[#B7BBBF] w-full focus:outline-none bg-transparent"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Preferred Work
          </option>
          <option>Skilled</option>
          <option>Unskilled</option>
          <option>Independent Work</option>
        </select>

        {/* <select
          className="select border-[#B7BBBF] w-full focus:outline-none bg-transparent"
          defaultValue=""
        >
          <option>Preferred Work Year</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select> */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded"
              required
              ref={checkboxRef}
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-black"
          >
            I agree with the{" "}
            <a
              href="/terms-conditions"
              className="text-primary hover:border-b  border-primary duration-500"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
        <button type="submit" className="btn btn-primary ">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default WorkerConsultationFrom;
