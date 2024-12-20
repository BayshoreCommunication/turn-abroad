import Link from "next/link";
import React from "react";
import Motion from "../../motion/Motion";

const VideoSection = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 overflow-hidden">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="text-center xl:max-w-6xl  mx-auto mb-8 lg:mb-10">
            <h1 className="text-3xl md:text-[40px] font-extrabold leading-normal mb-4">
              What is <span className="text-primary"> TurnAbroad</span>?
            </h1>
            <p className=" font-semibold text-xl text-center">
              {` TurnAbroad is a platform created by three friends who experienced
              the challenges of being international students in the U.S. They
              faced visa uncertainties, job searches, and investment
              opportunities while pursuing their dreams. TurnAbroad aims to
              support students, parents, investors, and job seekers by providing
              guidance and resources to navigate the complexities of studying,
              working, and investing abroad. The founders' personal experiences
              drive their mission to create a community where personal stories
              meet professional dreams, ensuring that others do not feel as
              helpless as they once did. TurnAbroad is committed to making
              overseas journeys rich, rewarding, and uniquely personal.`}
            </p>
          </div>
          <div>
            <div className="video-container">
              {/* <iframe
                src={`https://www.youtube.com/embed/pQD5jqtRjFI?si=1LG9R0l3BH4gmKMR`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="What is TurnAbroad"
                loading="lazy"
                className="w-full lg:w-[900px]  h-64 md:h-96 lg:h-[508px] mx-auto  rounded-3xl overflow-hidden"
              ></iframe> */}
              <video
                controls
                autoPlay
                // loop
                muted
                preload="auto"
                className="w-full lg:w-[900px] h-64 md:h-96 lg:h-[508px] mx-auto rounded-2xl overflow-hidden border-2 border-primary"
              >
                <source src="/images/turnabroad.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="text-center mt-10 lg:mt-16">
            <Link href={"/contact"} className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default VideoSection;
