"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const MaterialTabSection = ({ tabsData }) => {
  const [activeTab, setActiveTab] = React.useState("2");
  return (
    <Tabs value="2">
      <TabsHeader
        className={`p-1 rounded-full bg-[#F4F4F4] md:p-1 flex items-center justify-center `}
        indicatorProps={{
          className: `bg-black shadow-none rounded-full`,
        }}
      >
        {tabsData?.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="w-full h-full md:p-2 p-2 !text-center"
            onClick={() => setActiveTab(value)}
          >
            <div className="flex items-center gap-x-6 gap-y-2 md:flex-col md:justify-center 2xl:flex-row">
              <div
                className={`py-2 sm:text-lg text-xs text-gray-750  ${
                  activeTab === value ? "!text-white duration-1000 z-50" : ""
                }`}
              >
                {label}
              </div>
            </div>
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {tabsData?.map(({ label, content, value }) => (
          <TabPanel key={value} value={value} className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-center ">
              <div className="">
                <p
                  className={`mb-4 text-lg text-stone-950 text-center md:text-left`}
                >
                  {content}
                </p>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
export default MaterialTabSection;
