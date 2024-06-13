import Image from "next/image";
import React, { FC } from "react";
import helpingPeople from "/public/images/aboutPage/helpingPeople.png";

interface CardProps {
  cardImage?: string | undefined;
  title?: string | undefined;
  alt?: string | undefined;
}

const Card: FC<CardProps> = ({ cardImage, title, alt }) => {
  return (
    <div className="card p-4 md:p-6 lg:p-8">
      <Image
        src={cardImage ? cardImage : "Card Image"}
        alt={alt ? alt : "Image Alt"}
        className="rounded-2xl overflow-hidden max-w-xl w-full h-auto mb-4 md:mb-6"
      ></Image>
      <h2 className="text-2xl text-black">{title ? title : "Card Title"}</h2>
    </div>
  );
};

export default Card;
