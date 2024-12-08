import Image from "next/image";
import React from "react";
import aboutImage from "/public/images/about.png";
import Link from "next/link";
import { FaMoneyBill } from "react-icons/fa6";
import Motion from "../../motion/Motion";

const About = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="text-center xl:max-w-6xl mb-7 mx-auto">
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
              Want to Know your Options of Moving <br /> Abroad with
              <span className="text-primary"> TurnAbroad</span>?
            </h1>
          </div>

          <div className="hero-content flex-col-reverse  lg:flex-row gap-x-6 gap-y-8 p-0 lg:gap-12 xl:gap-16 items-center justify-items-center ">
            <Motion effect="fade-right" duration="1500">
              <div className="w-full lg:max-w-md xl:max-w-4xl">
                <FaMoneyBill className="text-6xl text-[#2D8FCC] mb-4 md:mb-6" />
                <h1 className="text-2xl font-extrabold mb-4 text-[#434242]">
                  Investment Visas
                </h1>
                <p className="mb-3 font-medium text-lg text-start ">
                  Bringing international business opportunities & strategic
                  investment solutions, we specialize in empowering you to
                  explore uncharted foreign markets. Our unwavering dedication,
                  expertise, and personalized strategies will ensure that you
                  are able to seize global opportunities effectively and make
                  smart investments. At TurnAbroad, we will be there every step
                  of the way to help you navigate the complex world of foreign
                  investment.
                </p>
                <Link
                  href={"/invest-abroad"}
                  className="btn btn-primary  lg:!text-xl  mt-2 md:mt-6 !leading-[120%] py-5"
                >
                  Learn More
                </Link>
              </div>
            </Motion>
            <div className="overflow-hidden w-full">
              <Motion effect="fade-left" duration="1500">
                <Image
                  src={aboutImage}
                  width={628}
                  height={719}
                  alt="About Section Image"
                  className="w-full max-w-xl  mx-auto flex-2"
                />
              </Motion>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default About;
