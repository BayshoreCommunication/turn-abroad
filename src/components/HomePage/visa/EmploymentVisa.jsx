import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import VisaContent from "./VisaContent";
import Motion from "../../motion/Motion";
import Skilled from "/public/images/employeeVisa/skilled.png";
import Unskilled from "/public/images/employeeVisa/unskilled.png";
import Independent from "/public/images/employeeVisa/independent.png";

const EmploymentVisa = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-10 lg:py-14 xl:py-16 bg-[#F3F3F3]">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="mb-8">
            <FaUserTie className="text-6xl  mb-4 " />
            <h2 className="text-2xl font-extrabold mb-4 text-[#434242]">
              Employment Visa
            </h2>
          </div>
          <Tabs selectedIndex={activeIndex}>
            <TabList
              role="tablist"
              className="tabs grid-cols-2 md:grid-cols-3 w-full mx-auto bg-[#F2F7FE] rounded-[80px] p-0 mb-10 overflow-hidden"
            >
              <Tab
                onClick={() => {
                  setActiveIndex(0);
                }}
                role="tab"
                className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
              >
                Skilled
              </Tab>
              <Tab
                onClick={() => {
                  setActiveIndex(1);
                }}
                role="tab"
                className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
              >
                Unskilled
              </Tab>
              <Tab
                onClick={() => {
                  setActiveIndex(2);
                }}
                role="tab"
                className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
              >
                Independent Work
              </Tab>
            </TabList>

            <TabPanel>
              <VisaContent
                setActiveIndex={() => {
                  setActiveIndex(1);
                }}
                description={
                  "Our goal is to make the process of studying abroad smooth and rewarding. Every individual has their own unique path and we provide support and mentorship based on their specific interests or concerns. Are you thinking of studying abroad? Get ready to embark on a transformative academic adventure with the best study abroad mentors from TurnAbroad by your side."
                }
                linkTitle={"Learn More"}
                href={"/work-abroad?query=skilled"}
                imageSRC={Skilled}
                imageALT={"Worker Image"}
              />
            </TabPanel>
            <TabPanel>
              <VisaContent
                setActiveIndex={() => {
                  setActiveIndex(2);
                }}
                description={
                  "Our goal is to make the process of studying abroad smooth and rewarding. Every individual has their own unique path and we provide support and mentorship based on their specific interests or concerns. Are you thinking of studying abroad? Get ready to embark on a transformative academic adventure with the best study abroad mentors from TurnAbroad by your side."
                }
                linkTitle={"Learn More"}
                href={"/work-abroad?query=unskilled"}
                imageSRC={Unskilled}
                imageALT={"Worker Image"}
              />
            </TabPanel>
            <TabPanel>
              <VisaContent
                setActiveIndex={() => {
                  setActiveIndex(0);
                }}
                description={
                  "Our goal is to make the process of studying abroad smooth and rewarding. Every individual has their own unique path and we provide support and mentorship based on their specific interests or concerns. Are you thinking of studying abroad? Get ready to embark on a transformative academic adventure with the best study abroad mentors from TurnAbroad by your side."
                }
                linkTitle={"Learn More"}
                href={"/work-abroad?query=independentwork"}
                imageSRC={Independent}
                imageALT={"Worker Image"}
              />
            </TabPanel>
          </Tabs>
        </div>
      </Motion>
    </section>
  );
};

export default EmploymentVisa;
