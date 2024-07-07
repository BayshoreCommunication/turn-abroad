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
                  Our vision is more than just hollow mission statements; what we 
                  promise is what we will deliver –nothing less. We uptake your 
                  dreams as our own because at TurnAbroad we are a small family 
                  in this big, scary world. As former students who have navigated 
                  the complexities of immigration ourselves, we deeply believe 
                  in the power of shared experiences. We have lived through it 
                  - the excitement, the setbacks, and the triumphs. That's why 
                  at TurnAbroad, we're not just going to be a faceless platform. 
                  We are going to be your mentors, your companions, and your 
                  friends who will guide you towards the path of success. As 
                  your family, we will ensure that you will never have to face 
                  the difficulties we had to; that you will never feel helpless 
                  and be alone in your struggles as together, we work to build 
                  a global community filled with the collective wisdom of 
                  talented individuals like you.
                  </p>
                  <p className="mb-3 font-normal text-lg text-justify">
                  In short, your visions and goals are our own. They are our 
                  top priorities! We are going to dissolve the barriers for 
                  students, investors and job seekers to make your journeys 
                  overseas hurdle-free and memorable. We are going to bridge 
                  the gap between people from all walks of life and encourage 
                  a united front of diverse cultures. So, don't wait any longer! 
                  Set aside all your fears and embark on this journey with 
                  us, as you take a comfortable and safe seat during this 
                  transformative journey to success!
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
