import Motion from '@src/components/motion/Motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import visionImage from '/public/images/vision.png';

const OurVision = () => {
  return (
    <section className='py-10 lg:py-14 xl:py-16 bg-[#f3f3f3]'>
      <div className='container'>
        <Motion effect='fade-up' duration='2000'>
          <div className=''>
            <div className='text-center xl:max-w-6xl mb-7 mx-auto'>
              <h1 className='text-3xl md:text-[40px] font-extrabold leading-normal'>
                Our <span className='text-primary'>Vision</span>
              </h1>
            </div>

            <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 xl:gap-16 items-start'>
              <Motion effect='fade-right' duration='2000'>
                <div className='w-full lg:max-w-4xl'>
                  <p className='mb-3 font-normal text-lg text-justify'>
                    {`At TurnAbroad, we're more than just a platform - we're a close-knit family dedicated to 
                    turning your dreams into reality. As former students who have experienced the complexities 
                    of immigration firsthand, we understand the challenges you face. We've lived through the excitement, 
                    the setbacks, and the victories that come with navigating this path.`}
                  </p>
                  <p className='mb-3 font-normal text-lg text-justify'>
                    {`Our mission is to be more than just mentors. We're your companions, guiding you at every 
                    step of the way. You won't face the same struggles we did, and you'll never feel lost or 
                    alone in your journey. Together, we'll build a global community of talented individuals 
                    like you, offering the support and wisdom you need to succeed.`}
                  </p>
                  <p className='mb-3 font-normal text-lg text-justify'>
                    {`Your vision is our priority. We're here to break down barriers for students, investors, 
                    and job seekers, making your overseas journey seamless and unforgettable. By bridging 
                    cultures and connecting people from all walks of life, we aim to create a unified global 
                    network. So, set your fears aside and embark on this transformative journey with us, as 
                    we help guide you to success!`}
                  </p>
                </div>
              </Motion>
              <div className='w-full overflow-hidden'>
                <Motion effect='fade-left' duration='2000'>
                  <Image
                    src={visionImage}
                    alt='About Section Image'
                    className='w-full flex-2'
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
