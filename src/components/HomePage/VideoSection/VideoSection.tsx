import Link from 'next/link';
import React from 'react';
import Motion from '../../motion/Motion';

const VideoSection = () => {
  return (
    <section className='py-10 lg:py-14 xl:py-16 overflow-hidden'>
      <Motion effect='fade-up' duration='1500'>
        <div className='container'>
          <div className='text-center xl:max-w-6xl mb-7 mx-auto'>
            <h1 className='text-3xl md:text-[40px] font-extrabold leading-normal'>
              What is <span className='text-primary'> TurnAbroad</span> ?
            </h1>
          </div>
          <div>
            {/* <iframe
              className="w-[325px]  h-[190px] md:w-[700px]  md:h-[390px] lg:w-[900px] lg:h-[508px]  rounded-2xl overflow-hidden  mx-auto shadow-xl"
              src="https://www.youtube.com/embed/yGyrJZuOf7o?si=yXhEUH9530NsuOqc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}
            <p className='mb-3 font-semibold text-xl text-center'>
              TurnAbroad is a platform created by three friends who experienced
              the challenges of being international students in the U.S. They
              faced visa uncertainties, job searches, and investment
              opportunities while pursuing their dreams. TurnAbroad aims to
              support students, parents, investors, and job seekers by providing
              guidance and resources to navigate the complexities of studying,
              working, and investing abroad. The founders' personal experiences
              drive their mission to create a community where personal stories
              meet professional dreams, ensuring that others do not feel as
              helpless as they once did. TurnAbroad is committed to making
              overseas journeys rich, rewarding, and uniquely personal.
            </p>
          </div>
          <div className='text-center mt-10'>
            <Link href={'/contact'} className='btn btn-primary'>
              Contact us
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default VideoSection;
