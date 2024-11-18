import React from "react";
import RegistrationCard from "./RegistrationCard";
import Link from "next/link";
import Motion from "../../motion/Motion";

const Registration = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 overflow-hidden">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="text-center xl:max-w-6xl mb-7 mx-auto">
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
              We Prepare our Clients for their{" "}
              <span className="text-primary">
                Abroad <br /> Ventures by Providing
              </span>{" "}
              Various <span className="text-primary">Resources</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-10">
            <RegistrationCard
              bgImage="investorRegistration"
              title="Investor Registration"
              description=""
              href="/invest-abroad"
              linkTitle="Investor Registration"
            />
            <RegistrationCard
              bgImage="studentRegistration"
              title="Student Registration"
              description=""
              href="/study-abroad"
              linkTitle="Student Registration"
            />
            <RegistrationCard
              bgImage="employeeRegistration"
              title="Employee Registration"
              description=""
              href="/work-abroad"
              linkTitle="Employee Registration"
            />
          </div>
          <div className="text-center mt-10">
            <Link href={"/about"} className="btn btn-primary">
              Our Vision
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default Registration;
