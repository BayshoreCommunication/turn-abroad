import Motion from "@src/components/motion/Motion";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import careerCounseling from "/public/images/servicePage/careerCounseling.png";
import visaGuidance from "/public/images/servicePage/visaGuidance.png";
import financialPlanning from "/public/images/servicePage/financialPlanning.png";
import applicationAssistance from "/public/images/servicePage/applicationAssistance.png";
import documentPreparation from "/public/images/servicePage/documentPreparation.png";
import healthInsurance from "/public/images/servicePage/healthInsurance.png";

const ServiceSection = () => {
  const services = [
    {
      _id: 1,
      icon: {
        src: careerCounseling,
        width: 60,
        height: 60,
      },
      title: "Career Counseling",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting",
      read_more_link: "#",
    },
    {
      _id: 2,
      icon: {
        src: visaGuidance,
        width: 60,
        height: 60,
      },
      title: "Visa Guidance",
      paragraph:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      read_more_link: "#",
    },
    {
      _id: 3,
      icon: {
        src: financialPlanning,
        width: 60,
        height: 60,
      },
      title: "Financial Planning",
      paragraph:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      read_more_link: "#",
    },
    {
      _id: 4,
      icon: {
        src: applicationAssistance,
        width: 60,
        height: 60,
      },
      title: "Application Assistance",
      paragraph:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      read_more_link: "#",
    },
    {
      _id: 5,
      icon: {
        src: documentPreparation,
        width: 60,
        height: 60,
      },
      title: "Document Preparation",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      read_more_link: "#",
    },
    {
      _id: 6,
      icon: {
        src: healthInsurance,
        width: 60,
        height: 60,
      },
      title: "Health Insurance",
      paragraph:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      read_more_link: "#",
    },
  ];

  // console.log(services);

  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Motion effect="fade-up" duration="2000">
        <div className="container">
          <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
            Easy to go abroad
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {services.map((serviceCard) => (
              <ServiceCard
                key={serviceCard._id}
                serviceCard={serviceCard}
              ></ServiceCard>
            ))}
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default ServiceSection;
