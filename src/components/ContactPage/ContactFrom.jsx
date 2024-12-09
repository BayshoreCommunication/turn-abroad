"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Motion from "../motion/Motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@material-tailwind/react";

const ContactFrom = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      subject: subjectRef?.current?.value,
      message: messageRef?.current?.value,
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
    if (!subjectRef?.current?.value) {
      return toast.error("Please Enter Your Subject", {
        toastId: "workerConsultationFromNameEmailError",
        position: "top-right",
      });
    }
    if (!messageRef?.current?.value) {
      return toast.error("Please Enter Your Message", {
        toastId: "workerConsultationFromNameEmailError",
        position: "top-right",
      });
    }
    emailjs
      .send(
        "service_5yimeas",
        "template_b1at7a5",
        templateParams,
        "Y-2_mv-FHC710OGp_"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          return toast.success(
            "Thanks For Your Submission. Our Team Will Reach Out To You Shortly",
            {
              toastId: "workerConsultationFrom",
              position: "top-right",
            }
          );
        },
        function (error) {
          // toast.error("OOPs something went wrong... Try again later");
          toast.error("OOPs something went wrong... ");
          console.log("FAILED...", error);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className="w-full xl:max-w-lg">
      <Motion effect="fade-up" duration="1500">
        <form action="" onSubmit={sendMessage} className="w-full">
          <div className="form-control text-black ">
            <input
              type="text"
              name="name"
              autoComplete="off"
              ref={nameRef}
              placeholder="Your Name"
              className="input mb-3  text-black focus:outline-none  border-[#a9a9a9] "
              required
            />
            <input
              type="email"
              name="email"
              autoComplete="off"
              ref={emailRef}
              placeholder="Your Email"
              className="input mb-3  text-black focus:outline-none  border-[#a9a9a9] "
              required
            />

            <input
              type="text"
              name="subject"
              autoComplete="off"
              ref={subjectRef}
              placeholder="Subject"
              className="input mb-3  text-black focus:outline-none  border-[#a9a9a9] "
              required
            />

            <textarea
              name="message"
              ref={messageRef}
              autoComplete="off"
              placeholder="Message"
              className="textarea placeholder:text-lg h-40 rounded-lg text-black focus:outline-none  border-[#a9a9a9] "
              required
            />
          </div>
          <div className="form-control mt-6">
            <Button className="btn btn-primary z-50" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </Motion>
    </div>
  );
};

export default ContactFrom;
