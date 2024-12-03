"use client";
import Motion from "@src/components/motion/Motion";
import React, { useState } from "react";
import CountUp from "react-countup";
import { FaRegHandshake, FaUsers } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import ScrollTrigger from "react-scroll-trigger";

const Summary = () => {
  const [countStart, setCountStart] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountStart(true)}
      onExit={() => setCountStart(false)}
    >
      <section className="py-10 lg:py-14 xl:py-16 bg-[#2D8FCC] ">
        <div className="container">
          <Motion effect="fade-up" duration="2000">
            <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-5  gap-6">
              <div className="card p-[30px] group hover:bg-white duration-1000 items-center text-center gap-4">
                <GoLaw className="text-white text-9xl group-hover:text-primary duration-700" />
                <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold text-white group-hover:text-primary duration-700 ">
                  {countStart && <CountUp start={0} end={100} duration={10} />}+
                </h2>
                <h5 className="text-xl md:text-2xl text-white group-hover:text-primary duration-700">
                  Immigration Lawyers
                </h5>
              </div>
              <div className="card p-[30px] group hover:bg-white duration-1000 items-center text-center gap-4">
                <IoAnalyticsOutline className="text-white text-9xl group-hover:text-primary duration-700" />
                <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold text-white group-hover:text-primary duration-700 ">
                  {countStart && <CountUp start={0} end={50} duration={10} />}+
                </h2>
                <h5 className="text-xl md:text-2xl text-white group-hover:text-primary duration-700">
                  Business Consultants
                </h5>
              </div>
              <div className="card p-[30px] group hover:bg-white duration-1000 items-center text-center gap-4">
                <FaRegHandshake className="text-white text-9xl group-hover:text-primary duration-700" />
                <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold text-white group-hover:text-primary duration-700 ">
                  {countStart && <CountUp start={0} end={500} duration={10} />}+
                </h2>
                <h5 className="text-xl md:text-2xl text-white group-hover:text-primary duration-700">
                  Partner Schools
                </h5>
              </div>
              <div className="card p-[30px] group hover:bg-white duration-1000 items-center text-center gap-4">
                <FaUsers className="text-white text-9xl group-hover:text-primary duration-700" />
                <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold text-white group-hover:text-primary duration-700 ">
                  {countStart && <CountUp start={0} end={48} duration={10} />}+
                </h2>
                <h5 className="text-xl md:text-2xl text-white group-hover:text-primary duration-700">
                  Employers
                </h5>
              </div>
              <div className="card p-[30px] group hover:bg-white duration-1000 items-center text-center gap-4">
                <PiStudentBold className="text-white text-9xl group-hover:text-primary duration-700" />
                <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold text-white group-hover:text-primary duration-700 ">
                  {countStart && <CountUp start={0} end={1480} duration={10} />}
                  +
                </h2>
                <h5 className="text-xl md:text-2xl text-white group-hover:text-primary duration-700">
                  Students Helped
                </h5>
              </div>
            </div>
          </Motion>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Summary;
