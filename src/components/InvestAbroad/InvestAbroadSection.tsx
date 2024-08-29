'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Motion from '../motion/Motion';

interface TabData {
  id: number;
  title: string;
  decs: string;
}

const InvestAbroadSection: React.FC = () => {
  const [selectTab, setSelectTab] = useState<string>('E1 Investor Visa');

  const variants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const handleBeforeUnload = () => {
    // Custom logic here if needed before page unload
  };

  const onRefresh = () => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const tabData: TabData[] = [
    {
      id: 1,
      title: 'E1 Investor Visa',
      decs: `This setup leverages Next.js's image optimization features and ensures that the iframe and background image are displayed correctly across different screen sizes. Sed quis nibh vel enim aliquet accumsan. Morbi sed dictum augue, sed bibendum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam risus dui, iaculis id quam in, luctus finibus diam.

      z Donec vitae sapien sit amet massa varius feugiat quis a enim. Maecenas lacinia, quam in interdum dapibus, ligula dolor dignissim neque, nec pellentesque urna turpis sit amet lorem. Vivamus dapibus turpis ac neque venenatis tristique. Donec elementum ex ac neque pharetra, a convallis metus sollicitudin. Sed eu finibus nisi. Aliquam massa lectus, vehicula sed iaculis at, vulputate malesuada nunc. Quisque ex libero, dignissim accumsan neque eget, tempus ultrices dui. Aenean a molestie nisl, vel egestas ligula. Ut et vehicula mauris. Integer vestibulum arcu diam, ultricies egestas lectus bibendum sed. Quisque eu quam congue tortor lacinia iaculis non eget lectus. Suspendisse vestibulum faucibus luctus.

      Cras fringilla eros quam, sed consectetur nisi tincidunt ut. Nunc pharetra tortor quis sapien vehicula consectetur. Vivamus blandit eros eu odio vestibulum bibendum. Nulla in urna mauris. Ut vitae pretium lectus. Sed in tristique velit, eget lobortis mauris. Aliquam aliquet neque et libero efficitur vulputate. Sed pellentesque convallis felis mollis laoreet. Mauris vulputate est sed orci laoreet, quis efficitur turpis accumsan. Aenean turpis nisl, fermentum et luctus nec, imperdiet in mi. Donec vulputate neque sit amet orci cursus commodo non eu ligula. Vivamus feugiat metus nec ex sodales, elementum faucibus erat placerat. Ut consequat elit dolor, nec consequat nunc posuere eget. Donec consectetur magna at sapien gravida, at dignissim odio commodo. Vivamus hendrerit dolor elit. Nullam quis molestie massa.
  
      Sed consectetur consequat velit, eget finibus nunc accumsan id. Vestibulum eu orci in elit pharetra tristique. Mauris in dolor purus. Aliquam id quam tristique, porta quam ac, eleifend urna. Donec maximus justo mauris. Fusce tempus at dui vitae accumsan. Maecenas eget tellus massa. Quisque malesuada in eros at scelerisque. Maecenas tristique non quam eu eleifend. Nunc faucibus tellus et nisl pellentesque varius. Nam aliquam nulla ante, non tristique odio suscipit congue. Suspendisse sed lacus venenatis, ultrices lorem vitae, ornare diam. Proin nec augue elit. Curabitur lacus tellus, dictum quis dolor at, rhoncus consectetur tortor. Curabitur suscipit turpis ac mattis bibendum. Sed posuere vitae ante id condimentum`,
    },
    {
      id: 2,
      title: 'E2 Investor Visa',
      decs: `To achieve the desired styling where the bullet points are left-aligned and the text is right-aligned, you can use CSS Flexbox. Here's how you can adjust your list styling 
      
      Sed quis nibh vel enim aliquet accumsan. Morbi sed dictum augue, sed bibendum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam risus dui, iaculis id quam in, luctus finibus diam.
      z Donec vitae sapien sit amet massa varius feugiat quis a enim. Maecenas lacinia, quam in interdum dapibus, ligula dolor dignissim neque, nec pellentesque urna turpis sit amet lorem. Vivamus dapibus turpis ac neque venenatis tristique. Donec elementum ex ac neque pharetra, a convallis metus sollicitudin. Sed eu finibus nisi. Aliquam massa lectus, vehicula sed iaculis at, vulputate malesuada nunc. Quisque ex libero, dignissim accumsan neque eget, tempus ultrices dui. Aenean a molestie nisl, vel egestas ligula. Ut et vehicula mauris. Integer vestibulum arcu diam, ultricies egestas lectus bibendum sed. Quisque eu quam congue tortor lacinia iaculis non eget lectus. Suspendisse vestibulum faucibus luctus.

      Cras fringilla eros quam, sed consectetur nisi tincidunt ut. Nunc pharetra tortor quis sapien vehicula consectetur. Vivamus blandit eros eu odio vestibulum bibendum. Nulla in urna mauris. Ut vitae pretium lectus. Sed in tristique velit, eget lobortis mauris. Aliquam aliquet neque et libero efficitur vulputate. Sed pellentesque convallis felis mollis laoreet. Mauris vulputate est sed orci laoreet, quis efficitur turpis accumsan. Aenean turpis nisl, fermentum et luctus nec, imperdiet in mi. Donec vulputate neque sit amet orci cursus commodo non eu ligula. Vivamus feugiat metus nec ex sodales, elementum faucibus erat placerat. Ut consequat elit dolor, nec consequat nunc posuere eget. Donec consectetur magna at sapien gravida, at dignissim odio commodo. Vivamus hendrerit dolor elit. Nullam quis molestie massa.
  
      Sed consectetur consequat velit, eget finibus nunc accumsan id. Vestibulum eu orci in elit pharetra tristique. Mauris in dolor purus. Aliquam id quam tristique, porta quam ac, eleifend urna. Donec maximus justo mauris. Fusce tempus at dui vitae accumsan. Maecenas eget tellus massa. Quisque malesuada in eros at scelerisque. Maecenas tristique non quam eu eleifend. Nunc faucibus tellus et nisl pellentesque varius. Nam aliquam nulla ante, non tristique odio suscipit congue. Suspendisse sed lacus venenatis, ultrices lorem vitae, ornare diam. Proin nec augue elit. Curabitur lacus tellus, dictum quis dolor at, rhoncus consectetur tortor. Curabitur suscipit turpis ac mattis bibendum. Sed posuere vitae ante id condimentum`,
    },
  ];

  return (
    <div className='mt-12 mb-12'>
      <Motion effect='fade-up' duration='2000'>
        {' '}
        <div className='grid items-start h-full grid-cols-1 md:grid-cols-4'>
          <ul className='col-span-1 flex-column space-y space-y-4 text-sm font-medium text-gray-50 bg-[#F2F7FE] p-4 md:h-[550px] mb-8'>
            {tabData?.map((item, index) => (
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                onClick={() => setSelectTab(item.title)}
              >
                <Link
                  href='#'
                  className={`inline-flex items-center px-4 py-3 text-black rounded-lg active w-full text-md md:text-lg hover:bg-[#2F99CC] hover:text-white ${
                    selectTab === item.title ? 'bg-[#2F99CC] text-white' : ''
                  }`}
                  aria-current='page'
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className='w-full col-span-3 px-6 text-gray-500 rounded-lg text-medium'>
            {tabData
              ?.filter((el) => el.title === selectTab)
              .map((item, index) => (
                <div key={index}>
                  <p className='text-xl'>{item?.decs}</p>
                </div>
              ))}
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default InvestAbroadSection;
