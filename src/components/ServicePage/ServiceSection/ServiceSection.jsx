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
        "We offer comprehensive services including resume building, interview preparation, and career coaching.",
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
        "We provide expert visa guidance services, including personalized consultations and up-to-date information to help you navigate complex visa requirements with ease.",
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
        "We offer tailored financial planning services, such as comprehensive strategies, including investment management, retirement planning, and debt reduction, to ensure your financial security and peace of mind.",
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
        "We provide comprehensive assistance with immigration applications. Our experienced consultants offer personalized support and up-to-date guidance to help you successfully navigate the complexities of immigration requirements.",
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
        "We provide meticulous document preparation to streamline your immigration/application process. Our dedicated team ensures all paperwork is accurately completed and submitted, giving you peace of mind and enhancing your chances of visa approval.",
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
        "We assist you in selecting the best health insurance plan to meet your unique needs and budget. Our experts provide personalized consultations and up-to-date information to ensure you make informed decisions for your health coverage while you are moving abroad.",
      read_more_link: "#",
    },
  ];

  // console.log(services);

  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Motion effect="fade-up" duration="2000">
        <div className="container">
          <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
            Services We Provide 
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
