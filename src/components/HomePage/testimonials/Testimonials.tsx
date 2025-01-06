// import React, { Suspense } from "react";
// import Slider from "./Slider";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import Motion from "../../motion/Motion";
// import Loading from "@src/app/loading";
// import InvestorReviews from "./InvestorReviews";
// import StudentsReviews from "./StudentsReviews";
// import ProfessionalsReviews from "./ProfessionalsReviews";
// import { motion } from "framer-motion";

// const Testimonials = () => {
//   return (
//     <section className="pb-10 lg:pb-14 xl:pb-16 overflow-hidden">
//       <Motion effect="fade-up" duration="1500">
//         <div className="container">
//           <div className="text-center xl:max-w-6xl mb-7 mx-auto">
//             <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
//               What our <span className="text-primary"> Clients</span> Have to
//               Say
//             </h1>
//           </div>
//           <div className="slider">
//             <Tabs>
//               <TabList
//                 role="tablist"
//                 className="tabs grid-cols-3 w-full mx-auto bg-[#F2F7FE] rounded-[80px] p-0 mb-10 overflow-hidden"
//               >
//                 <Tab
//                   role="tab"
//                   className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
//                 >
//                   Investor
//                 </Tab>
//                 <Tab
//                   role="tab"
//                   className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
//                 >
//                   Students
//                 </Tab>
//                 <Tab
//                   role="tab"
//                   className="tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
//                 >
//                   Professionals
//                 </Tab>
//               </TabList>
//               <TabPanel>
//                 <motion.div
//                   className="box"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     duration: 1,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <InvestorReviews />
//                 </motion.div>
//               </TabPanel>
//               <TabPanel>
//                 <motion.div
//                   className="box"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     duration: 1,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <StudentsReviews />
//                 </motion.div>
//               </TabPanel>
//               <TabPanel>
//                 <motion.div
//                   className="box"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     duration: 1,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <ProfessionalsReviews />
//                 </motion.div>
//               </TabPanel>
//             </Tabs>
//           </div>
//         </div>
//       </Motion>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { motion } from "framer-motion";
import Motion from "../../motion/Motion";
import InvestorReviews from "./InvestorReviews";
import StudentsReviews from "./StudentsReviews";
import ProfessionalsReviews from "./ProfessionalsReviews";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsData = [
    { label: "Investor", component: <InvestorReviews /> },
    { label: "Students", component: <StudentsReviews /> },
    { label: "Professionals", component: <ProfessionalsReviews /> },
  ];

  return (
    <section className="pb-10 lg:pb-14 xl:pb-16 overflow-hidden">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          {/* Title Section */}
          <div className="text-center xl:max-w-6xl mb-7 mx-auto">
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
              What our <span className="text-primary">Clients</span> Have to Say
            </h1>
          </div>

          {/* Tabs with Smooth Indicator */}
          <div className="relative">
            <Tabs
              selectedIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
            >
              {/* Tab List */}
              <TabList
                role="tablist"
                className="tabs grid grid-cols-3 w-full mx-auto bg-[#F2F7FE] rounded-[80px] p-0 mb-10 overflow-hidden relative"
              >
                {/* Smooth Indicator */}
                <motion.div
                  className="absolute bg-[#2D8FCC] h-full rounded-[80px] z-0"
                  initial={false}
                  animate={{
                    left: `${(activeIndex * 100) / tabsData.length}%`,
                    width: `${100 / tabsData.length}%`,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
                {/* Tab Items */}
                {tabsData.map((tab, index) => (
                  <Tab
                    key={index}
                    role="tab"
                    className={`tab text-base bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full relative z-10 ${
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
                  <motion.div
                    className="box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    {tab.component}
                  </motion.div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default Testimonials;
