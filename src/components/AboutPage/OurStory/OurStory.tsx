import Motion from "@src/components/motion/Motion";
import React from "react";

const OurStory = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <Motion effect="fade-up" duration="2000">
        <div className="container">
          <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl font-normal leading-[190%] text-justify mb-4">
            {`TurnAbroad was founded by three friends who experienced the challenges of being international students in the U.S. We faced late-night study sessions, struggled to find jobs willing to sponsor us, and dealt with the uncertainties of visas. These experiences became the foundation of TurnAbroad, inspiring us to help others on similar journeys.`}
          </p>
          <p className="text-xl font-normal leading-[190%] text-justify mb-4">
            {/* {' '} */}
            {`We understand the fears and frustrations students face when trying to break free from their circumstances. We've been there. For parents, we know the anxiety of seeing your children pursue their dreams far from home. For investors, we get the thrill and risk of new opportunities. And for job seekers, we've felt the highs and lows of searching for a career abroad.`}
          </p>
          <p className="text-xl font-normal leading-[190%] text-justify">
            {/* {' '} */}
            {`TurnAbroad was created so you don't have to face these challenges alone. We're here to guide and support you every step of the way. Whether you're a student, parent, investor, or job seeker, our mission is to make your international journey smooth, successful, and uniquely yours. Welcome to the TurnAbroad family, your home away from home.`}
          </p>
        </div>
      </Motion>
    </section>
  );
};

export default OurStory;
