import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion"; // Import Framer Motion
import "react-tabs/style/react-tabs.css";
import VisaContent from "./VisaContent";
import Motion from "../../motion/Motion";
import Skilled from "/public/images/employeeVisa/skilled.png";
import Unskilled from "/public/images/employeeVisa/unskilled.png";
import Independent from "/public/images/employeeVisa/independent.png";

const EmploymentVisa = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsData = [
    {
      label: "Skilled",
      description:
        "Aiming to transform borders from being barriers in growth to gateways to success, we specialize in guiding individuals towards fulfilling international careers. With expertise in various career fields, internal resources, and unwavering commitment, we empower you to navigate the complexities of international employment and landing your dream job. Explore, experience, and excel in your global career ambitions with TurnAbroad.",
      linkTitle: "Learn More",
      href: "/work-abroad?query=skilled",
      imageSRC: Skilled,
      imageALT: "Worker Image",
    },
    {
      label: "Unskilled",
      description:
        "Aiming to transform borders from being barriers in growth to gateways to success, we specialize in guiding individuals towards fulfilling international careers. With expertise in various career fields, internal resources, and unwavering commitment, we empower you to navigate the complexities of international employment and landing your dream job. Explore, experience, and excel in your global career ambitions with TurnAbroad.",
      linkTitle: "Learn More",
      href: "/work-abroad?query=unskilled",
      imageSRC: Unskilled,
      imageALT: "Worker Image",
    },
    {
      label: "Independent Work",
      description:
        "Aiming to transform borders from being barriers in growth to gateways to success, we specialize in guiding individuals towards fulfilling international careers. With expertise in various career fields, internal resources, and unwavering commitment, we empower you to navigate the complexities of international employment and landing your dream job. Explore, experience, and excel in your global career ambitions with TurnAbroad.",
      linkTitle: "Learn More",
      href: "/work-abroad?query=independentwork",
      imageSRC: Independent,
      imageALT: "Worker Image",
    },
  ];

  return (
    <section className="py-10 lg:py-14 xl:py-16 bg-[#F3F3F3] relative">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="mb-8 text-center">
            <FaUserTie className="text-6xl mb-4" />
            <h2 className="text-2xl font-extrabold mb-4 text-[#434242]">
              Employment Visa
            </h2>
          </div>

          <div className="relative">
            <Tabs selectedIndex={activeIndex}>
              {/* Tab List */}
              <TabList
                role="tablist"
                className="tabs grid grid-cols-2 md:grid-cols-3 w-full mx-auto bg-[#F2F7FE] rounded-[80px] p-0 mb-10 overflow-hidden relative"
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
                {/* Tabs */}
                {tabsData.map((tab, index) => (
                  <Tab
                    key={index}
                    role="tab"
                    onClick={() => setActiveIndex(index)}
                    className={`tab text-sm text-center lg:text-xl font-semibold lg:font-extrabold p-2 px-2 lg:px-11 h- lg:h-14  w-full  z-10 ${
                      activeIndex === index ? "text-white" : "text-[#434242]"
                    }`}
                  >
                    {tab.label}
                  </Tab>
                ))}
              </TabList>

              {/* Tab Panels */}
              {tabsData.map((tab, index) => (
                <TabPanel key={index}>
                  <VisaContent
                    description={tab.description}
                    linkTitle={tab.linkTitle}
                    href={tab.href}
                    imageSRC={tab.imageSRC}
                    imageALT={tab.imageALT}
                  />
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default EmploymentVisa;
