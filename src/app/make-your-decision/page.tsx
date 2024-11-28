// import Investment from "@src/components/HomePage/YesNoGame/investment/investment";
import CompleteSchoolNo from "@src/components/HomePage/YesNoGame/student/CompleteSchoolNo";
import CompleteSchoolYes from "@src/components/HomePage/YesNoGame/student/CompleteSchoolYes";
import CompleteUniversityNo from "@src/components/HomePage/YesNoGame/student/CompleteUniversityNo";
import CompleteUniversityYes from "@src/components/HomePage/YesNoGame/student/CompleteUniversityYes";
import CompleteSchoolWork from "@src/components/HomePage/YesNoGame/work/CompleteSchoolWork";
import CompleteSchoolWorkNo from "@src/components/HomePage/YesNoGame/work/CompleteSchoolWorkNo";
import CompleteSchoolWorkYes from "@src/components/HomePage/YesNoGame/work/CompleteSchoolWorkYes";
import CompleteUniversityWorkYes from "@src/components/HomePage/YesNoGame/work/CompleteUniversityWorkYes";
import PostGradNoWorkUSNo from "@src/components/HomePage/YesNoGame/work/PostGradNoWorkUSNo";
import PostGradNoWorkUSYes from "@src/components/HomePage/YesNoGame/work/PostGradNoWorkUSYes";
import PostGradWorkNo from "@src/components/HomePage/YesNoGame/work/PostGradWorkNo";
import PostGradWorkYes from "@src/components/HomePage/YesNoGame/work/PostGradWorkYes";
import PostGradYesWorkUSNo from "@src/components/HomePage/YesNoGame/work/PostGradYesWorkUSNo";
import PostGradYesWorkUSYes from "@src/components/HomePage/YesNoGame/work/PostGradYesWorkUSYes";
import YesNoGame from "@src/components/HomePage/YesNoGame/YesNoGame";
import Breadcrumb from "@src/components/sheared/breadcrumb/Breadcrumb";
import React from "react";

const StudyAbroadPage = () => {
  return (
    <main>
      <Breadcrumb
        title="Make Your Decision"
        href="/"
        linkTitle="Home"
        activePage="Make Your Decision"
      />
      <YesNoGame />
      {/* Student  */}
      {/* <CompleteSchool />
      <CompleteSchoolNo />
      <CompleteSchoolYes />
      <CompleteUniversityYes />
      <CompleteUniversityNo /> */}
      {/* Work */}
      {/* <CompleteSchoolWork />
      <CompleteSchoolWorkNo />
      <CompleteSchoolWorkYes />
      <CompleteSchoolWorkNo />
      <CompleteUniversityWorkYes />
      <PostGradWorkNo />
      <PostGradWorkYes />
      <PostGradNoWorkUSNo />
      <PostGradNoWorkUSYes />
      <PostGradYesWorkUSYes />
      <PostGradYesWorkUSNo /> */}
      {/* <Investment /> */}
    </main>
  );
};

export default StudyAbroadPage;
