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
              <span className="text-primary">Turnabroad</span>?
            </h1>
          </div>

          <div className="hero-content flex-col-reverse  lg:flex-row gap-x-6 gap-y-8 p-0 lg:gap-12 xl:gap-16 items-center justify-items-center ">
            <Motion effect="fade-right" duration="1500">
              <div className="w-full lg:max-w-md xl:max-w-4xl">
                <FaMoneyBill className="text-6xl text-[#2D8FCC] mb-4 md:mb-6" />
                <h1 className="text-2xl font-extrabold mb-4 text-[#434242]">
                  Investment Visas
                </h1>
                <p className="mb-3 font-semibold text-xl text-justify">
                  Bringing international business opportunities & strategic
                  investment solutions, we specialize in empowering businesses
                  and individuals to explore the vast potential of foreign
                  markets. With deep expertise, tailored strategies, and
                  unwavering commitment, we facilitate your journey to expand
                  investment horizons across borders. TurnAbroad will diversify
                  your business portfolio and help you navigate the intricate
                  world of foreign investment.
                </p>
                <Link href={"/invest-abroad"} className="btn btn-primary mt-6">
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
