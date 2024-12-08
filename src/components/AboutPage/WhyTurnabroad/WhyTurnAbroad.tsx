import Motion from "@src/components/motion/Motion";
import React from "react";
import Image from "next/image";
import helpingPeople from "/public/images/aboutPage/helpingPeople.png";
import caringCustomers from "/public/images/aboutPage/caringCustomers.png";
import service from "/public/images/aboutPage/service.png";
import leadership from "/public/images/aboutPage/leadership.png";
import comfort from "/public/images/aboutPage/comfort.png";
import fun from "/public/images/aboutPage/fun.png";

const WhyTurnAbroad = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 bg-white">
      <Motion effect="fade-up" duration="3000">
        <div className="container">
          <div className="text-center xl:max-w-6xl mb-7 mx-auto">
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
              Why <span className="text-primary">TurnAbroad</span>?
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
            <div className="card p-4 md:p-6 lg:p-8">
              <Image
                src={helpingPeople}
                alt="helpingPeople"
                className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6 hover:scale-105 hover:shadow-lg duration-500"
              ></Image>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
                Helping people do more with less
              </h2>
            </div>
            <div className="card p-4 md:p-6 lg:p-8">
              <Image
                src={caringCustomers}
                alt="helpingPeople"
                className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6 hover:scale-105 hover:shadow-lg duration-500"
              ></Image>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
                Caring about customers
              </h2>
            </div>
            <div className="card p-4 md:p-6 lg:p-8">
              <Image
                src={service}
                alt="helpingPeople"
                className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6 hover:scale-105 hover:shadow-lg duration-500"
              ></Image>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
                Delivering the best customer service
              </h2>
            </div>
            <div className="card p-4 md:p-6 lg:p-8">
              <Image
                src={leadership}
                alt="helpingPeople"
                className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6 hover:scale-105 hover:shadow-lg duration-500"
              ></Image>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
                Leadership
              </h2>
            </div>
            <div className="card p-4 md:p-6 lg:p-8">
              <Image
                src={comfort}
                alt="helpingPeople"
                className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6 hover:scale-105 hover:shadow-lg duration-500"
              ></Image>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
                Comfortable and Safe
              </h2>
            </div>
            <div className="card p-4 md:p-6 lg:p-8">
              <Image
                src={fun}
                alt="helpingPeople"
                className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6 hover:scale-105 hover:shadow-lg duration-500"
              ></Image>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
                Making life Abroad fun
              </h2>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default WhyTurnAbroad;
