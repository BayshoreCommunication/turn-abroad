"use client";
import React, { useEffect, useState } from "react";
import UnskilledWork from "./UnskilledWork";
import Motion from "../motion/Motion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import IndependentWork from "./IndependentWork";
import SkilledWork from "./SkilledWork";
import Process from "../StudentsPage/Process/Process";
import { useSearchParams } from "next/navigation";

const WorkAbroadSection = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
  // console.log(query)
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (query) {
      if (query === "skilled") {
        setActiveIndex(0);
      }
      if (query === "unskilled") {
        setActiveIndex(1);
      }
      if (query === "independentwork") {
        setActiveIndex(2);
      }
    }
  }, [query]);

  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Process />
      <Motion effect="fade-up" duration="2000">
        <div className="container ">
          <Tabs className="pt-10 lg:pt-14 xl:pt-16" selectedIndex={activeIndex}>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4 lg:mb-8">
              <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal">
                Easy employment abroad
              </h1>
              <TabList
                role="tablist"
                className="tabs  md:grid-cols-3 w-full md:w-fit rounded-[80px] p-0 bg-[#f3f3f3] overflow-hidden"
              >
                <Tab
                  onClick={() => {
                    setActiveIndex(0);
                  }}
                  role="tab"
                  className="tab text-sm md:text-base lg:text-lg font-semibold focus:outline-none outline-none outline-0
                   w-full"
                >
                  Skilled
                </Tab>
                <Tab
                  onClick={() => {
                    setActiveIndex(1);
                  }}
                  role="tab"
                  className="tab text-sm md:text-base lg:text-lg font-semibold focus:outline-none outline-none outline-0
                   w-full"
                >
                  Unskilled
                </Tab>
                <Tab
                  onClick={() => {
                    setActiveIndex(2);
                  }}
                  role="tab"
                  className="tab text-sm md:text-base lg:text-lg font-semibold focus:outline-none outline-none outline-0
                   w-full"
                >
                  Independent Work
                </Tab>
              </TabList>
            </div>

            <TabPanel>
              <SkilledWork />
            </TabPanel>
            <TabPanel>
              <UnskilledWork />
            </TabPanel>
            <TabPanel>
              <IndependentWork />
            </TabPanel>
          </Tabs>
        </div>
      </Motion>
    </section>
  );
};

export default WorkAbroadSection;
