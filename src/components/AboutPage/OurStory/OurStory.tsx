import Motion from '@src/components/motion/Motion';
import React from 'react';

const OurStory = () => {
  return (
    <section className='py-10 lg:py-14 xl:py-16'>
      <Motion effect='fade-up' duration='2000'>
        <div className='container'>
          <h1 className='text-center text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8'>
            Our <span className='text-primary'>Story</span>
          </h1>
          <p className='text-xl font-normal leading-[190%] text-justify mb-4'>
            {`The story of TurnAbroad is an inspirational one rooted from the real life 
          experiences of three close friends who shared the exhilarating journey of 
          being young undergraduates in the U.S., hoping to achieve their dreams in 
          this foreign land and to live the age-old famous ‘American Dream’ with their 
          families. The struggles we experienced–the late-night study sessions after 
          work, the hopeless search for jobs that would even remotely consider sponsoring 
          students like us, the scrambling effort to seize any investment opportunities 
          and tackle the visa uncertainties –all of these challenges unique to small-town 
          students with big dreams like us encouraged us to help those sharing a similar 
          fate. These experiences, now permanently etched into our very beings and existence, 
          have become the core of TurnAbroad. For students wanting to get yourselves 
          out of the limitations of your circumstances but not knowing how to do 
          so or where to even start, don’t worry, we were scared and confused 
          just like you. For parents wanting your children to succeed but still 
          being anxious about them pursuing their dreams on their own, that too, 
          thousands of miles away from you, know that we understand every inch 
          of fear that you may be feeling since we experienced that with our 
          parents as well. For investors navigating new opportunities, know 
          that we understand the thrill and risk because we, too, felt those 
          emotions when we ventured out into the fascinating world of investment. 
          And finally, for job seekers exploring foreign horizons, we've felt the 
          mix of excitement and trepidation because we too are now working 
          individuals after countless hard-hitting rejections.`}
          </p>
          <p className='text-xl font-normal leading-[190%] text-justify'>
            {' '}
            {`But with the establishment of TurnAbroad, you won't have to go
            through the uncertainties, sweat, and tears we had to go through.
            That is why we collaborated to create this platform - to make sure
            nobody has to feel as helpless as we did during our undergrad in a
            completely foreign land with very little to no family. We are here,
            not just as founders but as friends, mentors, and guides, using our
            stories to illuminate your path. Whether you're a parent, investor,
            or job seeker, our commitment is deeply personal - to make your
            overseas journey as rich, rewarding, and uniquely yours as it can
            be. We aim to create a community where personal stories meet
            professional dreams and where everyone, every customer, is capable
            of supporting one another. Welcome to the TurnAbroad family - your
            home away from home.`}
          </p>
        </div>
      </Motion>
    </section>
  );
};

export default OurStory;
