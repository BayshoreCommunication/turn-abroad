import InvestAbroadSection from '@src/components/InvestAbroad/InvestAbroadSection';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const InvestAbroad = () => {
  return (
    <main className='min-h-screen'>
      <section className=''>
        <Breadcrumb
          title='Invest Abroad'
          href='/'
          linkTitle='Home'
          activePage='Invest Abroad'
        />
        <div className='container py-20'>
          <InvestAbroadSection />
        </div>
      </section>
    </main>
  );
};

export default InvestAbroad;
