import Image from "next/image";
import React from "react";
import usaFlag from "/public/images/studentPage/usaFlagIcon.png";
import { FaHome, FaUniversity } from "react-icons/fa";
import { FaBook, FaStar } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import Motion from "@src/components/motion/Motion";

const USA = () => {
  return (
    <section className="pt-10 lg:pt-14 xl:pt-16 overflow-hidden">
      <Motion effect="fade-up" easing="ease-in-out" duration="2000">
        <div className="flex items-center gap-4 mb-4 md:mb-8">
          <Image
            src={usaFlag}
            alt="usa flag"
            width={80}
            className="drop-shadow-xl"
          />
          <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
            Education in USA
          </h1>
        </div>
      </Motion>
      <div className=" ms-1">
        <Motion effect="fade-up" easing="ease-in-out" duration="2000">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4   mb-6 md:mb-10 lg:mb-16">
            <div className="flex items-center gap-4">
              <FaUniversity className="text-6xl p-3 bg-[#427CEE] rounded text-white" />
              <div className="">
                <h4 className="text-[19px] font-bold text-[#434242] mb-2 leading-5">
                  Number of Universities
                </h4>
                <p className="text-base font-bold text-[#636363]">4000+ </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaBook className="text-6xl p-3 bg-[#4B9FB5] rounded text-white" />
              <div className="">
                <h4 className="text-[19px] font-bold text-[#434242] mb-2 leading-5">
                  Cost of Studying per Year
                </h4>
                <p className="text-base font-bold text-[#636363]">
                  $10,000 to $55,000
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaHome className="text-6xl p-3 bg-[#C53B43] rounded text-white" />
              <div className="">
                <h4 className="text-[19px] font-bold text-[#434242] mb-2 leading-5">
                  Cost of Living per Year
                </h4>
                <p className="text-base font-bold text-[#636363]">
                  $8,000 to $16,000
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineWorkHistory className="text-6xl p-3 bg-[#6944BA] rounded text-white" />
              <div className="">
                <h4 className="text-[19px] font-bold text-[#434242] mb-2 leading-5">
                  Part Time Work Opportunities
                </h4>
                <p className="text-base font-bold text-[#636363]">
                  20 Hours / Week
                </p>
              </div>
            </div>
          </div>
        </Motion>
        <Motion effect="fade-up" easing="ease-in-out" duration="2000">
          {/*  Top cities in USA */}
          <div className="mb-6 md:mb-10 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8">
              Top cities to study in the USA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/study-abroad/new-york.png"
                  alt="New York"
                  width={70}
                  height={70}
                  className="rounded overflow-hidden"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2">New York</h4>
                  <div className="flex items-center gap-1">
                    <FaStar color="#F7C32E" size={16} />
                    <span className="text-[#6E767E]">10</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/study-abroad/san-francisco.png"
                  alt="New York"
                  width={70}
                  height={70}
                  className="rounded overflow-hidden"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2">San Francisco</h4>
                  <div className="flex items-center gap-1">
                    <FaStar color="#F7C32E" size={16} />
                    <span className="text-[#6E767E]">10</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/study-abroad/boston.png"
                  alt="New York"
                  width={70}
                  height={70}
                  className="rounded overflow-hidden"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2">Boston</h4>
                  <div className="flex items-center gap-1">
                    <FaStar color="#F7C32E" size={16} />
                    <span className="text-[#6E767E]">10</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/study-abroad/los-angeles.png"
                  alt="New York"
                  width={70}
                  height={70}
                  className="rounded overflow-hidden"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2">Los Angeles</h4>
                  <div className="flex items-center gap-1">
                    <FaStar color="#F7C32E" size={16} />
                    <span className="text-[#6E767E]">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>
        <Motion effect="fade-up" easing="ease-in-out" duration="2000">
          {/* Popular Universities */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8">
              Popular Universities
            </h2>
            <div className="">
              <ul className="list-disc list-inside text-xl">
                <li>Harvard University</li>
                <li>Massachusetts Institute of Technology (MIT)</li>
                <li>Stanford University</li>
                <li>Princeton University</li>
                <li>Yale University</li>
                <li>Johns Hopkins University</li>
                <li>University of California, Los Angeles (UCLA)</li>
                <li>Cornell University</li>
                <li>New York University (NYU)</li>
                <li>University of California, Berkeley (UC Berkeley)</li>
              </ul>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default USA;
