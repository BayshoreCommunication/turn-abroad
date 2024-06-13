import Motion from "@src/components/motion/Motion";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const SliderContent = () => {
  return (
    <div className="hero w-full lg:max-w-4xl xl:max-w-fit bg-base-200 mx-auto">
      <div className="hero-content flex-col lg:flex-row gap-10 w-full xl:min-w-fit p-0">
        <Motion effect="fade-right" duration="1500">
          <iframe
            className=" w-[325px]  h-[190px] md:w-[700px]  md:h-[390px] lg:w-[470px] lg:h-[264px]  rounded-2xl overflow-hidden"
            src="https://www.youtube.com/embed/yGyrJZuOf7o?si=yXhEUH9530NsuOqc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Motion>
        <Motion effect="fade-left" duration="1500">
          <div className="lg:max-w-lg w-full">
            <FaQuoteRight className="text-5xl text-primary opacity-60" />
            <p className="py-6 text-xl font-medium">
              I am a person who is positive about every aspect of life. There
              are many things I like to do, to see, and to experience. I like to
              read, I like to write; I like to think, I like to dream; I like to
              talk, I like to listen.
            </p>
            <div>
              <h2 className="text-4xl font-bold mb-2">Albert Jhonson</h2>
              <h4 className="text-xl font-semibold text-primary">
                Senior Engineer
              </h4>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default SliderContent;
