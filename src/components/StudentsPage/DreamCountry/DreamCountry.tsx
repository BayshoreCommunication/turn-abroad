import Motion from "@src/components/motion/Motion";
import React from "react";
import Process from "../Process/Process";

const DreamCountry = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 overflow-hidden">
      <div className="container">
        <Motion effect="fade-up" duration="2000">
          <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
            Study in Your Dream Country with
            <span className="text-primary">Turnabroad</span>
          </h1>
        </Motion>
      </div>
      <Motion
        effect="fade-up"
        offset="200"
        easing="linear"
        duration="2000"
      >
        <Process />
      </Motion>
    </section>
  );
};

export default DreamCountry;
