import OurStory from '@src/components/AboutPage/OurStory/OurStory'
import OurVision from '@src/components/AboutPage/OurVision/OurVision'
import WhyTurnAbroad from '@src/components/AboutPage/WhyTurnabroad/WhyTurnAbroad'
import Summary from '@src/components/AboutPage/summary/Summary'
import Breadcrumb from '@src/components/sheared/breadcrumb/Breadcrumb'
import React from 'react'

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb title='About Us' href='/' linkTitle='Home' activePage='About Us'/>
      <OurStory/>
      <OurVision/>
      <WhyTurnAbroad/>
      <Summary/>
    </main>
  )
}

export default AboutPage