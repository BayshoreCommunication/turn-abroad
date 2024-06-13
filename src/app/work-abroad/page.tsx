import WorkAbroadSection from '@src/components/WorkAbroad/WorkAbroadSection';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const StudyAbroadPage = () => {
    return (
        <main>
            <Breadcrumb title='Work Abroad' href='/' linkTitle='Home' activePage='Work Abroad'/>
            <WorkAbroadSection/>
        </main>
    );
};

export default StudyAbroadPage;