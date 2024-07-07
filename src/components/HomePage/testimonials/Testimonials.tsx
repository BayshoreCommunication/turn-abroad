import React, { Suspense } from "react";
import Slider from "./Slider";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Motion from "../../motion/Motion";
import Loading from "@src/app/loading";
import InvestorReviews from "./InvestorReviews";
import StudentsReviews from "./StudentsReviews";
import ProfessionalsReviews from "./ProfessionalsReviews";

const Testimonials = () => {
  return (
    <section className="pb-10 lg:pb-14 xl:pb-16 overflow-hidden">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="text-center xl:max-w-6xl mb-7 mx-auto">
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
              What our <span className="text-primary"> Clients</span> Have to
              Say
            </h1>
          </div>
          <div className="slider">
            <Tabs>
              <TabList
                role="tablist"
                className="tabs grid-cols-3 w-full mx-auto bg-[#F2F7FE] rounded-[80px] p-0 mb-10 overflow-hidden"
              >
                <Tab
                  role="tab"
                  className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
                >
                  Investor
                </Tab>
                <Tab
                  role="tab"
                  className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
                >
                  Students
                </Tab>
                <Tab
                  role="tab"
                  className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
                >
                  Professionals
                </Tab>
              </TabList>
              <TabPanel>
                <InvestorReviews />
              </TabPanel>
              <TabPanel>
                <StudentsReviews />
              </TabPanel>
              <TabPanel>
                <ProfessionalsReviews />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default Testimonials;
