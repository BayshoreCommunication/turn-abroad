import Breadcrumb from "@src/components/sheared/breadcrumb/Breadcrumb";
import TermsConditions from "@src/components/terms-conditions/TermsConditions";
import React from "react";

const TermsConditionsPage = () => {
  return (
    <main>
      <Breadcrumb title="Terms & Conditions" linkTitle="Home" href="/" activePage="Terms & Conditions"/>
      <TermsConditions />
    </main>
  );
};

export default TermsConditionsPage;
