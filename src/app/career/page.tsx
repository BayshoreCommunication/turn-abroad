import HiringPost from "@src/components/Career/HiringPost";
import Breadcrumb from "@src/components/sheared/breadcrumb/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        title="Career"
        href="/"
        linkTitle="Home"
        activePage="Career"
      />
      <HiringPost />
    </div>
  );
};

export default page;
