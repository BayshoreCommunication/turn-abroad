"use client";
import React, { useState } from "react";
import Motion from "../../motion/Motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image from "next/image";
import WorldMap from "../../../../public/images/banner/worldMap.png";
import bdMap from "../../../../public/images/banner/bdMap.png";
import flags from "../../../../public/images/banner/flags.png";

const Hero = () => {
  const [countStart, setCountStart] = useState(false);
  return (
    <div className="bg-[#F6F6F6] py-10 lg:py-14 xl:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full relative">
            <div>
              <Motion effect="fade-in" duration="1500" delay="">
                <Image src={WorldMap} alt="world map" className="" />
              </Motion>
            </div>
            {/* <Image src={WorldMap} alt="world map" className="absolute top-0"/> */}
            <div className="absolute top-0">
              <Motion effect="fade-in" duration="1500" delay="800">
                <Image src={bdMap} alt="world map" />
              </Motion>
            </div>
            <div className="absolute top-0">
              <Motion effect="fade-in" duration="1500" delay="1500">
                <Image src={flags} alt="world map" />
              </Motion>
            </div>
          </div>
          <div className="shrink-0">
            <ScrollTrigger
              onEnter={() => setCountStart(true)}
              onExit={() => setCountStart(false)}
            >
              <ul className="inline-block text-start ml-auto">
                <Motion effect="fade-up" duration="1500" delay="100">
                  <li className="my-6 opacity-70">
                    <h2 className="text-[#076EB2] text-4xl font-bold">
                      {countStart && (
                        <CountUp start={0} end={100} duration={5} />
                      )}
                      +
                    </h2>
                    <h4 className="text-black text-2xl font-bold">
                      Immigration Lawyers
                    </h4>
                  </li>
                </Motion>
                <Motion effect="fade-up" duration="1500" delay="200">
                  <li className="my-6 opacity-60">
                    <h2 className="text-[#076EB2] text-4xl font-bold">
                      {countStart && (
                        <CountUp start={0} end={100} duration={5} />
                      )}
                      +
                    </h2>
                    <h4 className="text-black text-2xl font-bold">
                      Business Consultants
                    </h4>
                  </li>
                </Motion>
                <Motion effect="fade-up" duration="1500" delay="400">
                  <li className="my-6 opacity-50">
                    <h2 className="text-[#076EB2] text-4xl font-bold">
                      {countStart && (
                        <CountUp start={0} end={500} duration={5} />
                      )}
                      +
                    </h2>
                    <h4 className="text-black text-2xl font-bold">
                      Partner schools
                    </h4>
                  </li>
                </Motion>
                <Motion effect="fade-up" duration="1500" delay="800">
                  <li className="my-6 opacity-40">
                    <h2 className="text-[#076EB2] text-4xl font-bold">
                      {countStart && (
                        <CountUp start={0} end={100} duration={5} />
                      )}
                      +
                    </h2>
                    <h4 className="text-black text-2xl font-bold">Employers</h4>
                  </li>
                </Motion>
                <Motion effect="fade-up" duration="1500" delay="1600">
                  <li className="my-6 opacity-30">
                    <h2 className="text-[#076EB2] text-4xl font-bold">
                      {countStart && (
                        <CountUp start={0} end={1500} duration={5} />
                      )}
                      +
                    </h2>
                    <h4 className="text-black text-2xl font-bold">
                      Students Helped
                    </h4>
                  </li>
                </Motion>
              </ul>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
