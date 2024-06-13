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
            The story of TurnAbroad is a tale spun by three close friends turned
            founders who once shared the exhilarating journey of being young
            undergraduate students in the US. The roots of our platform traces
            back to the challenges we faced – the late-night study sessions, the
            visa uncertainties, the job hunt struggles, and the investment leaps
            into the unknown. These experiences, etched into our very beings,
            have become the foundation of TurnAbroad. For parents supporting
            your children&apos;s dreams, know that we understand your worries
            because we faced it with our parents. As investors navigating new
            opportunities, we understand the thrill and risk because we faced
            the same risks when we made our investments.
          </p>
          <p className="text-xl font-normal leading-[190%] text-justify">
            {" "}
            And as job seekers exploring foreign horizons, we&apos;ve felt the
            mix of excitement and trepidation because we too are working
            individuals. Now, we&apos;re here, not just as founders but as
            friends, mentors, and guides, using our stories to illuminate your
            path. Whether you&apos;re a parent, investor, or job seeker, our
            commitment is deeply personal – to make your immigration abroad
            journey as rich, rewarding, and uniquely yours as it can be. We aim
            to create a community where personal stories meet professional
            dreams and where everyone, every customer, is capable of supporting
            one another. Welcome to the TurnAbroad family.
          </p>
        </div>
      </Motion>
    </section>
  );
};

export default OurStory;
