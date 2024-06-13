import React, { FC } from "react";

interface TitleProps {
  title?: string;
}

const SectionTitle: FC<TitleProps> = ({ title }) => {
  return <h1 className={`section-title`}>{title ? title : "Section Title"}</h1>;
};

export default SectionTitle;
