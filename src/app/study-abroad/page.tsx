import StudyAbroadSection from '@src/components/StudyAbroad/StudyAbroadSection';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const StudyAbroadPage = () => {
    return (
        <main>
            <Breadcrumb title='Study Abroad' href='/' linkTitle='Home' activePage='Study Abroad'/>
            <StudyAbroadSection/>
        </main>
    );
};

export default StudyAbroadPage;