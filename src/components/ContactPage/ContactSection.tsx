import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLocationPin, FaMobile } from "react-icons/fa6";
import Motion from "../motion/Motion";
import ContactFrom from "./ContactFrom";

const ContactSection = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <div className="container">
        <Motion effect="fade-up" duration="2000">
          <div className="hero bg-[#F3F9FF] rounded p-6 lg:p-16 ">
            <div className="flex flex-wrap items-center justify-center w-full gap-10">
              <div className="flex flex-col gap-6 w-full xl:max-w-lg">
                <div className="flex gap-4 items-center bg-white p-6 rounded-lg ">
                  <i className="p-4  bg-primary">
                    <FaMobile size={40} color="#ffff" />
                  </i>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold mb-2">Phone Number</h2>
                    <h4>+880 1234-5678</h4>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-white p-6 rounded-lg ">
                  <i className="p-4  bg-primary">
                    <FaEnvelope size={40} color="#ffff" />
                  </i>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold mb-2">Email</h2>
                    <h4>example@email.com</h4>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-white p-6 rounded-lg ">
                  <i className="p-4  bg-primary">
                    <FaLocationPin size={40} color="#ffff" />
                  </i>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold mb-2">Address</h2>
                    <h4>1301 34th ST South, St. Petersburg FL 33711</h4>
                  </div>
                </div>
              </div>

              <ContactFrom />
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ContactSection;
