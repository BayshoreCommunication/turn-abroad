"use client";
import Image from "next/image";
import React, { useRef } from "react";
import footerLogo from "/public/images/footer-logo.png";
import QRCode from "/public/images/qrcode.png";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const emailRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      email: emailRef?.current?.value,
    };
    if (!emailRef?.current?.value) {
      return toast.error("Please Enter Your Email", {
        toastId: "workerConsultationFromNameEmailError",
        position: "top-right",
      });
    }
    emailjs
      .send(
        "service_f7361to",
        "template_mniif1d",
        templateParams,
        "B3NmXWHKDF1AhfJI6"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          // return toast.success(
          //   <div className=" w-full max-w-md text-center">
          //     <p className="text-lg text-start font-semibold text-green-700 mb-2">
          //       Thanks For Your Submission.
          //     </p>
          //     <p className="text-base text-start font-normal text-gray-700 ">
          //       Our Team Will Reach Out To You Shortly
          //     </p>
          //   </div>,
          //   {
          //     toastId: "workerConsultationForm",
          //     position: "top-center",
          //     style: {
          //       width: "400px", // Adjust the width as needed
          //     },
          //   }
          // );
          return Swal.fire({
            icon: "success",
            title: "Thanks For Your Submission!",
            text: "Our Team Will Reach Out To You Shortly.",
            confirmButtonColor: "#2D8FCC",
          });
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    emailRef.current.value = "";
  };
  return (
    <footer className="py-10 lg:py-14 xl:py-16 bg-[#F4F4F4]">
      <div className="container">
        <div className="footer">
          <aside className="w-full">
            <Image src={footerLogo} alt="Footer Logo" className="mb-7"></Image>
            <form action="" onSubmit={sendMessage}>
              <input
                required
                type="text"
                name="email"
                ref={emailRef}
                placeholder="Enter Your Email"
                className="input w-full max-w-[400px] lg:max-w-[300px] focus:outline-none bg-[#EAEAEA] border-none mb-4"
              />
              <button className="btn btn-primary">Free Consultation</button>
            </form>
          </aside>
          <nav>
            <h6 className="footer-title text-xl font-bold text-[#241836] opacity-100 normal-case">
              Company
            </h6>
            <Link href="/about" className="link link-hover">
              About Us
            </Link>
            <Link href="/invest-abroad" className="link link-hover">
              Invest Abroad
            </Link>
            <Link href="/study-abroad" className="link link-hover">
              Study Abroad
            </Link>
            <Link href="/work-abroad" className="link link-hover">
              Work Abroad
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl font-bold text-[#241836] opacity-100 normal-case">
              Links
            </h6>
            <Link href="/contact" className="link link-hover">
              Contact Us
            </Link>
            <Link href="/terms-conditions" className="link link-hover">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
          </nav>
          <aside className="w-full border-0 lg:border-l-2 border-[#A8A8A8]">
            <Image
              src={QRCode}
              alt="qr code"
              className="w-full max-w-32 rounded md:mx-auto p-4  bg-white"
            />
            <div className="flex gap-5 my-4 md:mx-auto">
              <Link
                href="https://www.facebook.com/profile.php?id=61554475437811"
                target="_blank"
              >
                <FaFacebook className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link
                href="https://www.instagram.com/turnabroadbd/"
                target="_blank"
              >
                <FaInstagram className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link href="https://www.youtube.com/@TurnAbroad" target="_blank">
                <FaYoutube className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link href="https://www.tiktok.com/@turnabroad" target="_blank">
                <FaTiktok className="text-2xl hover:text-primary duration-500" />
              </Link>
            </div>
            <p className="md:mx-auto">
              &copy; {currentYear} Copyright by TurnAbroad
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
