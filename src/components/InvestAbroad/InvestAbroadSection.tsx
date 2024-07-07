'use client';
import React, { useState } from 'react';

const InvestAbroadSection = () => {
  const [selectTab, setSelectTab] = useState('E1 Investor Visa');

  console.log('check select item 7', selectTab);

  const tabData = [
    {
      id: 1,
      title: 'E1 Investor Visa',
      decs: "This setup leverages Next.js's image optimization features and ensures that the iframe and background image are displayed correctly across different screen sizes.",
    },
    {
      id: 2,
      title: 'E2 Investor Visa',
      decs: "To achieve the desired styling where the bullet points are left-aligned and the text is right-aligned, you can use CSS Flexbox. Here's how you can adjust your list styling",
    },
    {
      id: 3,
      title: 'E3 Investor Visa',
      decs: "To ensure that the height of the image and the content in your blog post remain the same, you can use flexbox and some Tailwind CSS utilities. Here's a refined version of your code",
    },
  ];

  return (
    <div className='mt-12'>
      <div className='md:flex '>
        <ul className='flex-2/4 flex-column space-y space-y-4 text-sm font-medium text-gray-50 md:me-4 mb-4 md:mb-0 bg-slate-100 p-10'>
          {tabData?.map((item, index) => (
            <li key={index} onClick={() => setSelectTab(item.title)}>
              <a
                href='#'
                className={`inline-flex items-center px-4 py-3 text-black rounded-lg active w-full ${
                  selectTab === item.title ? 'bg-[#2F99CC] text-white' : ''
                }`}
                aria-current='page'
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex-1/2 p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-full'>
          {tabData
            ?.filter((el, i) => el.title === selectTab)
            .map((item, index) => (
              <div key={index}>
                <p className='text-xl'>{item?.decs}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InvestAbroadSection;
