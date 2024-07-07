"use client";
import React, { useEffect, useState } from "react";
import StudyUK from "./StudyUK";
import Motion from "../motion/Motion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StudyUSA from "./StudyUSA";
import StudyCanada from "./StudyCanada";
import Process from "../StudentsPage/Process/Process";
import { useSearchParams } from 'next/navigation'
const StudyAbroadSection = () => {

  const searchParams = useSearchParams()
  
  const query = searchParams.get('query')
  // console.log(query)
  const [activeIndex, setActiveIndex] =useState(0)
  useEffect(()=>{
    if(query){
      if(query==='usa'){
        setActiveIndex(0)
      }
      if(query==='uk'){
        setActiveIndex(1)
      }
      if(query==='canada'){
        setActiveIndex(2)
      }
    }
  },[query])
  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Process />
      <Motion effect="fade-up" duration="2000">
        <div className="container ">
          <Tabs className="pt-6 lg:pt-8 xl:pt-10" selectedIndex={activeIndex}>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4 lg:mb-8">
              <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal">
                Study  <span className="text-primary">Abroad</span>
              </h1>
              <TabList
                role="tablist"
                className="tabs md:grid-cols-3 w-full md:w-fit rounded-[80px] p-0 bg-[#f3f3f3] overflow-hidden"
              >
                <Tab
                   onClick={() => {
                    setActiveIndex(0);
                  }}
                  role="tab"
                  className="tab text-base font-semibold focus:outline-none outline-none w-full"
                >
                  USA
                </Tab>
                <Tab
                   onClick={() => {
                    setActiveIndex(1);
                  }}
                  role="tab"
                  className="tab text-base font-semibold focus:outline-none outline-none w-full"
                >
                  UK
                </Tab>
                <Tab
                   onClick={() => {
                    setActiveIndex(2);
                  }}
                  role="tab"
                  className="tab text-base font-semibold focus:outline-none outline-none w-full"
                >
                  Canada
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              <StudyUSA />
            </TabPanel>
            <TabPanel>
              <StudyUK />
            </TabPanel>
            <TabPanel>
              <StudyCanada />
            </TabPanel>
          </Tabs>
        </div>
      </Motion>
    </section>
  );
};

export default StudyAbroadSection;
