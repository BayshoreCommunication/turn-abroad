import ApplicationLink from '@src/components/ServicePage/ApplicationLink/ApplicationLink';
import ServiceSection from '@src/components/ServicePage/ServiceSection/ServiceSection';
import FAQ from '@src/components/ServicePage/faq/FAQ';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const ServicePage = () => {
    return (
        <main>
            <Breadcrumb title='Service Page' href='/' linkTitle='Home' activePage='Service'/>
            <ServiceSection/>
            <ApplicationLink/>
            <FAQ/>
        </main>
    );
};

export default ServicePage;