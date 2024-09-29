import React from 'react';
import Motion from '../motion/Motion';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

function EmploymentStates() {
  return (
    <section className='pt-10 lg:pt-14 xl:pt-16 overflow-hidden'>
      <div>
        <Motion effect='fade-up' easing='ease-in-out' duration='2000'>
          {/*  Top cities in USA */}
          <div className='mb-6 md:mb-10 lg:mb-16'>
            <h2 className='text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8'>
              Top cities to work in the US
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <div className='flex items-center gap-4'>
                <Image
                  src='/images/study-abroad/new-york.png'
                  alt='New York'
                  width={70}
                  height={70}
                  className='rounded overflow-hidden'
                />
                <div>
                  <h4 className='text-xl font-bold mb-2'>Oklahoma City</h4>
                  <div className='flex items-center gap-1'>
                    <FaStar color='#F7C32E' size={16} />
                    <span className='text-[#6E767E]'>10</span>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <Image
                  src='/images/study-abroad/san-francisco.png'
                  alt='New York'
                  width={70}
                  height={70}
                  className='rounded overflow-hidden'
                />
                <div>
                  <h4 className='text-xl font-bold mb-2'>Cape Coral</h4>
                  <div className='flex items-center gap-1'>
                    <FaStar color='#F7C32E' size={16} />
                    <span className='text-[#6E767E]'>9.8</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <Image
                  src='/images/study-abroad/boston.png'
                  alt='New York'
                  width={70}
                  height={70}
                  className='rounded overflow-hidden'
                />
                <div>
                  <h4 className='text-xl font-bold mb-2'>Jacksonville</h4>
                  <div className='flex items-center gap-1'>
                    <FaStar color='#F7C32E' size={16} />
                    <span className='text-[#6E767E]'>9.7</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <Image
                  src='/images/study-abroad/los-angeles.png'
                  alt='New York'
                  width={70}
                  height={70}
                  className='rounded overflow-hidden'
                />
                <div>
                  <h4 className='text-xl font-bold mb-2'>Orlando</h4>
                  <div className='flex items-center gap-1'>
                    <FaStar color='#F7C32E' size={16} />
                    <span className='text-[#6E767E]'>9.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>
        <div></div>
      </div>
    </section>
  );
}

export default EmploymentStates;
