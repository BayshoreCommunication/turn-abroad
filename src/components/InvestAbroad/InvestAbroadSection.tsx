"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Motion from "../motion/Motion";
import parse from "html-react-parser";

interface TabData {
  id: number;
  title: string;
  decs: string;
}

const InvestAbroadSection: React.FC = () => {
  const [selectTab, setSelectTab] = useState<number>(0);

  const variants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const handleBeforeUnload = () => {
    // Custom logic here if needed before page unload
  };

  const onRefresh = () => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const tabData: TabData[] = [
    {
      id: 1,
      title: "E2 Investor Visa",
      decs: `<div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  E2 Visa
                </h2>
                <p className="font-normal text-lg ">
                  At TurnAbroad, we aim to transform borders from barriers into
                  gateways to success. Our expertise lies in guiding individuals
                  toward fulfilling international careers across various fields.
                  With our comprehensive resources and unwavering commitment, we
                  empower you to navigate the complexities of international
                  employment and secure your dream job. Explore, experience, and
                  excel in your global career ambitions with TurnAbroad.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  E2 Visa Services
                </h2>
                <p className="font-normal text-lg ">
                  The E2 visa is designed for investors from treaty countries
                  who want to start or manage a business in the United States.
                  At TurnAbroad, we offer specialized guidance to help you
                  understand and navigate the E2 visa application process.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Eligibility Criteria
                </h2>
                <p className="font-normal text-lg  mb-1">
                  To qualify for an E2 visa, you must:
                </p>
                <ol className="list-decimal list-outside ms-5 gap-x-1 flex flex-col gap-1 ">
                  <li className="font-normal text-lg ">
                    Be a national of a country with which the United States
                    maintains a treaty of commerce and navigation.
                  </li>
                  <li className="font-normal text-lg ">
                    Invest a substantial amount of capital in a U.S. business.
                  </li>
                  <li className="font-normal text-lg ">
                    Be coming to the U.S. to develop and direct the investment
                    enterprise, demonstrating at least 50% ownership or
                    possession of operational control through a managerial
                    position or other corporate device.
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Benefits of an E2 Visa
                </h2>

                <ul className="list-disc list-inside gap-x-1 flex flex-col gap-1">
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Residency:</span>{" "}
                    Live and work in the U.S. while managing your business.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Family:</span> Your
                    spouse and unmarried children under 21 can accompany you and
                    even work or study in the U.S.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Renewability:</span>{" "}
                    The E2 visa can be renewed indefinitely, as long as you
                    maintain your investment and meet the visa requirements.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Application Process
                </h2>

                <ol className="list-decimal list-outside ms-5 gap-x-1 flex flex-col gap-1">
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Consultation:</span>{" "}
                    Our experts at TurnAbroad will evaluate your eligibility and
                    outline the necessary steps.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Documentation:</span>{" "}
                    Your We assist in gathering and preparing all required
                    documentation, including proof of investment and business
                    plans.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Submission:</span> We
                    guide you through the submission process to ensure accuracy
                    and completeness.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Interview:</span>{" "}
                    Preparation for your consular interview, including potential
                    questions and required documents.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Approval:</span> Once
                    approved, you can move to the U.S. to start or manage your
                    business.
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Why Choose TurnAbroad?
                </h2>

                <ol className="list-disc list-inside gap-x-1 flex flex-col gap-1">
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Expertise:</span> Our
                    experienced professionals specialize in E2 visa
                    applications.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">
                      Personalized Service:
                    </span>{" "}
                    Tailored guidance to meet your unique needs and
                    circumstances. plans.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Success Rate:</span>{" "}
                    High approval rates due to our meticulous approach and
                    thorough preparation.
                  </li>
                </ol>
              </div>
              <div>
                <p className="font-normal text-lg">
                  TurnAbroad is your trusted partner in achieving your
                  international career aspirations. Let us help you turn borders
                  into gateways and make your global business dreams a reality.
                </p>
              </div>
            </div>`,
    },
    {
      id: 2,
      title: "EB5 Investor Visa",
      decs: `<div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  EB5 Visa
                </h2>
                <p className="font-normal text-lg ">
                  At TurnAbroad, we aim to transform borders into gateways to
                  success by guiding individuals toward thriving international
                  careers. With our expertise, dedicated resources, and
                  commitment to your goals, we help you navigate the
                  complexities of international employment and reach your global
                  aspirations. Whether you’re exploring new career opportunities
                  or planning to invest in your future, TurnAbroad is here to
                  empower you every step of the way.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  EB-5 Investor Visa: Unlocking U.S. Residency Through
                  Investment
                </h2>
                <p className="font-normal text-lg ">
                  For individuals seeking a pathway to U.S. residency through
                  investment, the EB-5 Investor Visa offers a unique
                  opportunity. Designed to promote economic growth in the United
                  States, the EB-5 visa allows you to obtain a green card by
                  investing in a qualifying U.S. business venture.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Requirements for EB-5 Visa
                </h2>
                <p className="font-normal text-lg  mb-1">
                  To qualify for the EB-5 visa, you must:
                </p>
                <ol className="list-decimal list-outside ms-5 gap-x-1 flex flex-col gap-1 ">
                  <li className="font-normal text-lg ">
                    Invest a minimum of $1.05 million, or $800,000 in a targeted
                    employment area (TEA), in a U.S. business.
                  </li>
                  <li className="font-normal text-lg ">
                    Create or preserve at least 10 full-time jobs for U.S.
                    workers within two years of your investment.
                  </li>
                  <li className="font-normal text-lg ">
                    Demonstrate that the investment capital comes from legal
                    sources.
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Benefits of the EB-5 Visa
                </h2>

                <ul className="list-disc list-outside ms-5  gap-x-1 flex flex-col gap-1">
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">
                      Permanent Residency:
                    </span>{" "}
                    Obtain a green card for yourself, your spouse, and your
                    unmarried children under 21.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">
                      Path to Citizenship:
                    </span>{" "}
                    After maintaining permanent residency for five years, you
                    can apply for U.S. citizenship.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Flexibility:</span>{" "}
                    You can live and work anywhere in the U.S. while your
                    investment contributes to economic growth.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Application Process
                </h2>

                <ol className="list-decimal list-outside ms-5 gap-x-1 flex flex-col gap-1">
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Consultation:</span>{" "}
                    Our team at TurnAbroad will assess your eligibility and
                    guide you through the investment options.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">
                      Investment Planning:
                    </span>{" "}
                    We provide assistance in selecting the right business
                    venture to meet the visa’s requirements.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">
                      Documentation Preparation:
                    </span>{" "}
                    We help prepare all necessary documentation, including
                    investment proof and job creation plans. and completeness.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">
                      Application Submission:
                    </span>{" "}
                    TurnAbroad ensures a smooth application submission process
                    with attention to detail.
                  </li>
                  <li className="font-normal text-lg ">
                    <span className="font-bold text-black">Approval:</span> Once
                    approved, you can move to the U.S. to start or manage your
                    business.
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-normal text-black mb-1 ">
                  Why TurnAbroad?
                </h2>

                <p className="font-normal text-lg">
                  With TurnAbroad’s expertise in navigating the EB-5 visa
                  process, you can confidently invest in your future. Our
                  personalized approach, commitment to your success, and deep
                  understanding of U.S. immigration laws ensure that you have
                  the support you need at every stage of your journey. Let us
                  help you turn your global business dreams into reality
                </p>
              </div>
            </div>`,
    },
  ];

  return (
    <div className="mt-12 mb-12">
      <Motion effect="fade-up" duration="2000">
        {" "}
        <div className="grid items-start h-full grid-cols-1 md:grid-cols-4">
          <ul className="col-span-1 flex-column space-y space-y-4 text-sm font-medium text-gray-50 bg-[#F2F7FE] p-4 md:h-[550px] mb-8">
            {tabData?.map((item, index) => (
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                onClick={() => setSelectTab(index)}
              >
                <Link
                  href="#"
                  className={`inline-flex items-center px-4 py-3 text-black rounded-lg active w-full text-md md:text-lg hover:bg-[#2F99CC] hover:text-white ${
                    selectTab === index ? "bg-[#2F99CC] text-white" : ""
                  }`}
                  aria-current="page"
                >
                  {item?.title}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="w-full col-span-3 px-6 text-gray-500 rounded-lg text-medium">
            {tabData
              ?.filter((el, index) => index === selectTab)
              .map((item, index) => (
                <div key={index}>
                  <div className="text-xl">{parse(item?.decs)}</div>
                </div>
              ))}
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default InvestAbroadSection;
