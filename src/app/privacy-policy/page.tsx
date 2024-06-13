import PrivacyPolicy from "@src/components/privacy-policy/PrivacyPolicy";
import Breadcrumb from "@src/components/sheared/breadcrumb/Breadcrumb";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <Breadcrumb title="Privacy Policy" linkTitle="Home" href="/" activePage="Privacy Policy"/>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;
