"use client";
import React, { useState, useEffect } from "react";
import Motion from "../../motion/Motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image from "next/image";
import WorldMap from "../../../../public/images/banner/worldMap.png";
import bdMap from "../../../../public/images/banner/bdMap.png";
import flags from "../../../../public/images/banner/flags.png";

const Hero = () => {
  const [countStart, setCountStart] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => {
        if (prevIndex >= peopleArray.length - 1) {
          clearInterval(interval); // Stop the interval when the last index is reached
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const peopleArray = [
    { id: 1, title: "Immigration Lawyers", count: 100, delay: 100 },
    { id: 2, title: "Business Consultants", count: 50, delay: 200 },
    { id: 3, title: "Partner schools", count: 500, delay: 400 },
    { id: 4, title: "Employers", count: 48, delay: 800 },
    { id: 5, title: "Students Helped", count: 1480, delay: 1600 },
  ];
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
                {peopleArray.map((summary, index) => (
                  <>
                    <Motion
                      effect="fade-up"
                      duration="1500"
                      delay={summary?.delay}
                    >
                      <li
                        className={`my-6 opacity-100 ${
                          highlightIndex >= index
                            ? "opacity-100 duration-1000"
                            : "opacity-20"
                        }`}
                      >
                        <h2 className="text-[#076EB2] text-4xl font-bold">
                          {countStart && (
                            <CountUp
                              start={0}
                              end={summary?.count}
                              duration={5}
                            />
                          )}
                          +
                        </h2>
                        <h4 className="text-black text-2xl font-bold">
                          {summary?.title}
                        </h4>
                      </li>
                    </Motion>
                  </>
                ))}
              </ul>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
