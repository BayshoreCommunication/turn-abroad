import DreamCountry from '@src/components/StudentsPage/DreamCountry/DreamCountry';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const StudentsPage = () => {
    return (
        <main>
              <Breadcrumb title='Student Packages' href='/' linkTitle='Home' activePage='Student Packages'/>
              <DreamCountry/>
        </main>
    );
};

export default StudentsPage;