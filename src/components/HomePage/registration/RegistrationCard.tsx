import Link from "next/link";
import React, { FC } from "react";

interface RegistrationProps {
  bgImage?: string;
  title?: string;
  description?: string;
  href?: string;
  linkTitle?: string;
}

const RegistrationCard: FC<RegistrationProps> = ({
  bgImage,
  title,
  description,
  href,
  linkTitle,
}) => {
  return (
    <div
      className={`registration-card ${
        bgImage ? bgImage : "breadcrumbAbout"
      } overflow-hidden max-w-[376px] w-full max-h-[595px] md:h-full rounded-lg `}
    >
      <div className="group p-8 bg-[#00000074]  hover:bg-[#2D8FCC] duration-500 cursor-pointer h-auto lg:h-[595px] flex flex-col gap-6 justify-between">
        <div className="">
          <h1 className="text-4xl font-black mb-4 pb-4 border-b-2 text-white">
            {title ? title : "Section Title"}
          </h1>
          <p className=" text-white text-xl mb">
            {description
              ? description
              : "Using our interactive simulator, you can find out your options of moving abroad. We offer a diverse database of mentorship programs that will prepare you to be able to succeed in your journey abroad."}
          </p>
        </div>
        <Link
          href={href ? href : "#"}
          className="btn btn-primary group-hover:bg-white group-hover:text-primary  w-full rounded-[30px] font-bold"
        >
          {linkTitle ? linkTitle : "link Title"}
        </Link>
      </div>
    </div>
  );
};

export default RegistrationCard;
