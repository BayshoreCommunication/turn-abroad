import Image from "next/image";
import React from "react";
import ukFlag from "/public/images/studentPage/ukFlagIcon.png";
import { FaHome, FaUniversity } from "react-icons/fa";
import { FaBook, FaStar } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import newYork from "/public/images/studentPage/newYork.png";
import Motion from "@src/components/motion/Motion";

const UK = () => {
  return (
    <section className="pt-10 lg:pt-14 xl:pt-16overflow-hidden">
      <div className="">
        <Motion effect="fade-up" easing="ease-in-out" duration="2000">
          <div className="flex items-center gap-4 mb-4 md:mb-8">
            <Image
              src={ukFlag}
              alt="usa flag"
              width={80}
              className="drop-shadow-xl"
            />
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
              Education in UK
            </h1>
          </div>
        </Motion>
        <div className="">
          <Motion effect="fade-up" easing="ease-in-out" duration="2000">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-10 lg:mb-16">
              <div className="flex items-center gap-4">
                <FaUniversity className="text-6xl p-3 bg-[#427CEE] rounded text-white" />
                <div className="">
                  <h4 className="text-xl font-bold text-[#434242] mb-2">
                    Number of Universities
                  </h4>
                  <p className="text-base font-bold text-[#636363]">4000+ </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaBook className="text-6xl p-3 bg-[#4B9FB5] rounded text-white" />
                <div className="">
                  <h4 className="text-xl font-bold text-[#434242] mb-2">
                    Cost of Studying per Year
                  </h4>
                  <p className="text-base font-bold text-[#636363]">
                    £10,000 to £55,000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaHome className="text-6xl p-3 bg-[#C53B43] rounded text-white" />
                <div className="">
                  <h4 className="text-xl font-bold text-[#434242] mb-2">
                    Cost of Living per Year
                  </h4>
                  <p className="text-base font-bold text-[#636363]">
                    £8,000 to £16,000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineWorkHistory className="text-6xl p-3 bg-[#6944BA] rounded text-white" />
                <div className="">
                  <h4 className="text-xl font-bold text-[#434242] mb-2">
                    Part Time Work Opportunities
                  </h4>
                  <p className="text-base font-bold text-[#636363]">
                    20 Hours / Week
                  </p>
                </div>
              </div>
            </div>
          </Motion>
          {/*  Top cities in USA */}
          <Motion effect="fade-up" easing="ease-in-out" duration="2000">
            <div className="mb-6 md:mb-10 lg:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8">
                Top cities to study in the UK
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/study-abroad/oxford.png"
                    alt="New York"
                    width={70}
                    height={70}
                    className="rounded overflow-hidden"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Oxford</h4>
                    <div className="flex items-center gap-2">
                      <FaStar color="#F7C32E" size={16} />
                      <span className="text-[#6E767E]">10</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/images/study-abroad/cambridge.png"
                    alt="New York"
                    width={70}
                    height={70}
                    className="rounded overflow-hidden"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cambridge</h4>
                    <div className="flex items-center gap-2">
                      <FaStar color="#F7C32E" size={16} />
                      <span className="text-[#6E767E]">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/study-abroad/london.png"
                    alt="New York"
                    width={70}
                    height={70}
                    className="rounded overflow-hidden"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-2">London</h4>
                    <div className="flex items-center gap-2">
                      <FaStar color="#F7C32E" size={16} />
                      <span className="text-[#6E767E]">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/study-abroad/manchester.png"
                    alt="New York"
                    width={70}
                    height={70}
                    className="rounded overflow-hidden"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Manchester</h4>
                    <div className="flex items-center gap-2">
                      <FaStar color="#F7C32E" size={16} />
                      <span className="text-[#6E767E]">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
          {/* Popular Universities */}
          <Motion effect="fade-up" easing="ease-in-out" duration="2000">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8">
                Popular Universities
              </h2>
              <div className=" flex flex-wrap items-start justify-between gap-6">
                <ul className="list-disc list-inside text-xl">
                  <li>University of Oxford</li>
                  <li>University of Cambridge</li>
                  <li>King&apos;s College London</li>
                  <li>Queen Mary University of London</li>
                  <li>
                    London School of Economics and Political Science (LSE)
                  </li>
                  <li>University College London (UCL)</li>
                  <li>University of Edinburgh</li>
                  <li>University of Manchester</li>
                  <li>University of Liverpool</li>
                  <li>University of Glasgow</li>
                </ul>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default UK;
