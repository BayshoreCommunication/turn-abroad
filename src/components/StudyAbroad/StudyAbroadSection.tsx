"use client";
import React, { useEffect, useState } from "react";
import StudyUK from "./StudyUK";
import Motion from "../motion/Motion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StudyUSA from "./StudyUSA";
import StudyCanada from "./StudyCanada";
import Process from "../StudentsPage/Process/Process";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const StudyAbroadSection = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [activeIndex, setActiveIndex] = useState(0);

  const tabsData = [
    { label: "USA", component: <StudyUSA /> },
    { label: "UK", component: <StudyUK /> },
    { label: "Canada", component: <StudyCanada /> },
  ];

  useEffect(() => {
    if (query) {
      const tabIndex = tabsData.findIndex(
        (tab) => tab.label.toLowerCase() === query
      );
      if (tabIndex !== -1) setActiveIndex(tabIndex);
    }
  }, [query]);

  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Process />
      <Motion effect="fade-up" duration="2000">
        <div className="container">
          <Tabs className="pt-6 lg:pt-8 xl:pt-10" selectedIndex={activeIndex}>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4 lg:mb-8">
              <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal">
                Study <span className="text-primary">Abroad</span>
              </h1>
              <div className="relative w-full md:w-fit">
                {/* Tabs */}
                <TabList
                  role="tablist"
                  className="tabs md:grid-cols-3 w-full rounded-[80px] p-0 bg-[#f3f3f3] overflow-hidden"
                >
                  {/* Smooth Indicator */}
                  <motion.div
                    layout
                    className="absolute bg-[#2D8FCC] h-full rounded-[80px] z-0"
                    initial={false}
                    animate={{
                      left: `${(activeIndex * 100) / tabsData.length}%`,
                      width: `${100 / tabsData.length}%`,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                  {/* Tab Buttons */}
                  {tabsData.map((tab, index) => (
                    <Tab
                      key={index}
                      role="tab"
                      onClick={() => setActiveIndex(index)}
                      className={`tab text-base font-semibold w-full ${
                        activeIndex === index ? "text-white" : "text-[#434242]"
                      }`}
                    >
                      {tab.label}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>
            {/* Tab Panels */}
            {tabsData.map((tab, index) => (
              <TabPanel key={index}>{tab.component}</TabPanel>
            ))}
          </Tabs>
        </div>
      </Motion>
    </section>
  );
};

export default StudyAbroadSection;
