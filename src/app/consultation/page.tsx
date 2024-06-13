import Consultation from '@src/components/consultation/Consultation';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const  ConsultationPage = () => {
    return (
        <main>
            <Breadcrumb title='Free Consultation' linkTitle='Home' href='/' activePage='Free Consultation'/>
            <Consultation/>
        </main>
    );
};

export default  ConsultationPage;