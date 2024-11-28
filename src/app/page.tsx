"use client";
// import FreeConsultation from "@src/components/HomePage/FreeConsultation/FreeConsultation";
import VideoSection from "@src/components/HomePage/VideoSection/VideoSection";
import Game from "@src/components/HomePage/YesNoGame/Game";
import About from "@src/components/HomePage/about/About";
import Hero from "@src/components/HomePage/hero/Hero";
import Passport from "@src/components/HomePage/passport/Passport";
import Registration from "@src/components/HomePage/registration/Registration";
import Testimonials from "@src/components/HomePage/testimonials/Testimonials";
import EmploymentVisa from "@src/components/HomePage/visa/EmploymentVisa.jsx";
import StudentsVisa from "@src/components/HomePage/visa/StudentsVisa";
import React from "react";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Passport />
      <StudentsVisa />
      <EmploymentVisa />
      <VideoSection />
      {/* <FreeConsultation /> */}
      <Game />
      <Registration />
      <Testimonials />
    </main>
  );
};

export default HomePage;
