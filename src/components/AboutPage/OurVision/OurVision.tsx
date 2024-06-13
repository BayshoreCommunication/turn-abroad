import Motion from "@src/components/motion/Motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import visionImage from "/public/images/vision.png";

const OurVision = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 bg-[#f3f3f3]">
      <div className="container">
        <Motion effect="fade-up" duration="2000">
          <div className="">
            <div className="text-center xl:max-w-6xl mb-7 mx-auto">
              <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal">
                Our <span className="text-primary">Vision</span>
              </h1>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 xl:gap-16 items-start">
              <Motion effect="fade-right" duration="2000">
                <div className="w-full lg:max-w-4xl">
                  <p className="mb-3 font-normal text-lg text-justify">
                    Our vision is more than just a mission statement; it&apos;s
                    a personal commitment born from our own journeys. As
                    founders who have navigated through the complexities of
                    immigration ourselves, we deeply believe in the power of
                    shared experiences. We&apos;ve lived it – the excitement,
                    the setbacks, and the triumphs. That&apos;s why, at
                    TurnAbroad, we&apos;re not just a faceless platform;
                    we&apos;re your companions who&apos;ve walked the same path.
                    Our vision extends beyond efficiency – it&apos;s about
                    building a global community where the collective wisdom of
                    individuals like you makes the entire process smoother and
                    more peaceful for everyone involved. We&apos;re here to
                    dissolve the barriers for students, investors, and job
                    seekers, striving to make moving abroad as hurdle-free as
                    possible. Your comfort and safety during this transformative
                    journey are our top priorities, especially for parents
                    fostering dreams, investors envisioning new beginnings, and
                    job seekers chasing opportunities worldwide. Moreover, we
                    see our platform as a bridge connecting diverse cultures,
                    contributing to a greener and better tomorrow for our
                    planet. Let&apos;s embark on this personal adventure
                    together, creating a world where every story matters, and
                    every journey is an integral part of a shared human
                    experience.
                  </p>
                </div>
              </Motion>
              <div className="w-full overflow-hidden">
                <Motion effect="fade-left" duration="2000">
                  <Image
                    src={visionImage}
                    alt="About Section Image"
                    className="w-full flex-2"
                  />
                </Motion>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default OurVision;
