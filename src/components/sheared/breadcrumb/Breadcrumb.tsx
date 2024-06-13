import Motion from "@src/components/motion/Motion";
import Link from "next/link";
import React, { FC } from "react";

interface BreadcrumbProps {
  title?: string;
  href?: string;
  linkTitle?: string;
  activePage?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  // title,
  href,
  linkTitle,
  activePage,
}) => {
  return (
    <section className="breadcrumb bg-gradient-to-r from-[#2D8FCC] to-[#143354] py-6  lg:py-8 ">
      <div className="container">
        <Motion  effect="fade-up" duration="1000">
          <Motion effect="zoom-in" duration="2000" delay="50" easing="ease-in-out">
            <div className="text-center">
              {/* <h1 className="text-white text-4xl md:text-5xl xl:text-[48px] font-extrabold mb-3 lg:mb-4">
                {title ? title : "Breadcrumb Title"}
              </h1> */}
              <div className="text-sm breadcrumbs">
                <ul className="text-white text-xl  justify-center">
                  <li className="">
                    <Link href={href ? href : "/"}>
                      {linkTitle ? linkTitle : "Home"}
                    </Link>
                  </li>
                  <li className="">
                    {activePage ? activePage : "Active Page"}
                  </li>
                </ul>
              </div>
            </div>
          </Motion>
        </Motion>
      </div>
    </section>
  );
};

export default Breadcrumb;
