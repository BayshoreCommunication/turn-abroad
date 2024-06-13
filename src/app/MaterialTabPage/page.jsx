import React from "react";
import MaterialTabSection from "@src/components/tabs/MaterialTabSection";
import { FaGraduationCap } from "react-icons/fa6";

const MaterialTabPage = () => {
  let tabsData = [
    {
      value: "1",
      label: `E2 Investment Visa`,
      content: "Connect - E2 Investment Visa",
    },
    {
      value: "2",
      label: `EB5 Investment Visa`,
      content: "Connect - EB5 Investment Visa",
    },
  ];
  return (
    <section className="py-20">
      <div className="container py-20">
        <div className="mb-8">
          <FaGraduationCap className="text-6xl  mb-4 " />
          <h2 className="text-2xl font-extrabold mb-4 text-[#434242]">
            Students Visa
          </h2>
        </div>
        <MaterialTabSection tabsData={tabsData} />
        {/* <MaterialTabSection/> */}
        
      </div>
    </section>
  );
};

export default MaterialTabPage;
