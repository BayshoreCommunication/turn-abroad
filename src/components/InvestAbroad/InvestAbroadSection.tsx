import React from 'react';

const InvestAbroadSection = () => {
  return (
    <div className='mt-12'>
      <div className='md:flex'>
        <ul className='flex-column space-y space-y-4 text-sm font-medium text-gray-50 md:me-4 mb-4 md:mb-0'>
          <li>
            <a
              href='#'
              className='inline-flex items-center px-4 py-3 text-white bg-[#2F99CC] rounded-lg active w-full '
              aria-current='page'
            >
              E1 Investor Visa
            </a>
          </li>
          <li>
            <a
              href='#'
              className='inline-flex items-center px-4 py-3 rounded-lg text-black hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full'
            >
              E2 Investor Visa
            </a>
          </li>
        </ul>
        <div className='p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full'>
          <h3 className='text-lg font-bold text-gray-900 mb-2'>Profile Tab</h3>
          <p className='mb-2'>
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p>
            The tab JavaScript swaps classes to control the content visibility
            and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestAbroadSection;
