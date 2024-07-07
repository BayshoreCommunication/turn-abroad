import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import VisaContent from "./VisaContent";
import Motion from "../../motion/Motion";
import usaStudent from "/public/images/studentVisa/usaStudent.png";
import ukStudents from "/public/images/studentVisa/ukStudents.png";
import canadaStudents from "/public/images/studentVisa/canadaStudents.png";

const StudentsVisa = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-10 lg:py-14 xl:py-16 bg-white">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="mb-8">
            <FaGraduationCap className="text-6xl  mb-4 " />
            <h2 className="text-2xl font-extrabold mb-4 text-[#434242]">
              Students Visa
            </h2>
          </div>
          <Tabs selectedIndex={activeIndex}>
            <TabList
              role="tablist"
              className="tabs grid-cols-3 w-full mx-auto bg-[#F2F7FE] rounded-[80px] p-0 mb-10 overflow-hidden "
            >
              <Tab
                onClick={() => {
                  setActiveIndex(0);
                }}
                role="tab"
                className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
              >
                USA
              </Tab>
              <Tab
                onClick={() => {
                  setActiveIndex(1);
                }}
                role="tab"
                className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
              >
                UK
              </Tab>
              <Tab
                onClick={() => {
                  setActiveIndex(2);
                }}
                role="tab"
                className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
              >
                Canada
              </Tab>
            </TabList>

            <TabPanel>
              <VisaContent
                setActiveIndex={() => {
                  setActiveIndex(1);
                }}
                description={
                  "Are you thinking of studying abroad? Does the entire process seem extremely overwhelming and you don't know where to start? At TurnAbroad, we believe every individual has their own unique path and thus we provide support and mentorship catered to your specific interests.  Get ready to embark on a transformative academic adventure with the best study abroad mentors from TurnAbroad by your side."
                }
                linkTitle={"Learn More"}
                href={"/study-abroad?query=usa"}
                imageSRC={usaStudent}
                imageALT={"Student Image"}
         
              />
            </TabPanel>
            <TabPanel>
              <VisaContent
                setActiveIndex={() => {
                  setActiveIndex(2);
                }}
                setActiveIndexFirstImage={() => {
                  setActiveIndex(0);
                }}
                setActiveIndexSecondImage={() => {
                  setActiveIndex(1);
                }}
                setActiveIndexThirdImage={() => {
                  setActiveIndex(2);
                }}
                description={
                  "Are you thinking of studying abroad? Does the entire process seem extremely overwhelming and you don't know where to start? At TurnAbroad, we believe every individual has their own unique path and thus we provide support and mentorship catered to your specific interests.  Get ready to embark on a transformative academic adventure with the best study abroad mentors from TurnAbroad by your side."
                }
                linkTitle={"Learn More"}
                href={"/study-abroad?query=uk"}
                imageSRC={ukStudents}
                imageALT={"Student Image"}
             
              />
            </TabPanel>
            <TabPanel>
              <VisaContent
                setActiveIndex={() => {
                  setActiveIndex(0);
                }}
                description={
                  "Are you thinking of studying abroad? Does the entire process seem extremely overwhelming and you don't know where to start? At TurnAbroad, we believe every individual has their own unique path and thus we provide support and mentorship catered to your specific interests.  Get ready to embark on a transformative academic adventure with the best study abroad mentors from TurnAbroad by your side."
                }
                linkTitle={"Learn More"}
                href={"/study-abroad?query=ca"}
                imageSRC={canadaStudents}
                imageALT={"Student Image"}
          
              />
            </TabPanel>
          </Tabs>
        </div>
      </Motion>
    </section>
  );
};

export default StudentsVisa;
