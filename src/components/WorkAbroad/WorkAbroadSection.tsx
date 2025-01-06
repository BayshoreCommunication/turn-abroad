"use client";
import React, { useEffect, useState } from "react";
import UnskilledWork from "./UnskilledWork";
import Motion from "../motion/Motion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import IndependentWork from "./IndependentWork";
import SkilledWork from "./SkilledWork";
import Process from "../StudentsPage/Process/Process";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const WorkAbroadSection = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
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

  // Tab data for easy manipulation and future-proofing
  const tabs = [
    { label: "Skilled", component: <SkilledWork /> },
    { label: "Unskilled", component: <UnskilledWork /> },
    { label: "Independent", component: <IndependentWork /> },
  ];

  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Process />
      <Motion effect="fade-up" duration="2000">
        <div className="container">
          <Tabs className="pt-10 lg:pt-14 xl:pt-16" selectedIndex={activeIndex}>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4 lg:mb-8">
              <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal">
                Employment <span className="text-primary">Abroad</span>
              </h1>
              <TabList
                role="tablist"
                className="tabs md:grid-cols-3 w-full md:w-fit rounded-[80px] p-0 bg-[#f3f3f3] overflow-hidden relative"
              >
                {/* Smooth motion indicator */}
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bg-[#2D8FCC] h-full rounded-[80px]"
                  style={{
                    width: `${100 / tabs.length}%`,
                    left: `${(activeIndex * 100) / tabs.length}%`,
                  }}
                  initial={false}
                  animate={{
                    left: `${(activeIndex * 100) / tabs.length}%`,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
                {/* Tab buttons */}
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    role="tab"
                    className="tab text-sm md:text-base lg:text-lg font-semibold w-full"
                  >
                    {tab.label}
                  </Tab>
                ))}
              </TabList>
            </div>

            {/* Tab Panels */}
            {tabs.map((tab, index) => (
              <TabPanel key={index}>{tab.component}</TabPanel>
            ))}
          </Tabs>
        </div>
      </Motion>
    </section>
  );
};

export default WorkAbroadSection;
