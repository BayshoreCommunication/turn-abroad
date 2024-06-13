import ContactSection from '@src/components/ContactPage/ContactSection';
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb';
import React from 'react';

const ContactPage = () => {
    return (
        <main>
            <Breadcrumb title='Contact Us' href='/' linkTitle='Home' activePage='Contact Us'/>
            <ContactSection/>
        </main>
    );
};

export default ContactPage;