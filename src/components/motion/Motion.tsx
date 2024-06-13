"use client";
import React, { useEffect, FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface MotionProps {
  children?: JSX.Element;
  effect?: string;
  duration?: string;
  delay?: string;
  easing?: string;
  offset?: string;
}

const Motion: FC<MotionProps> = ({
  children,
  effect,
  duration,
  delay,
  easing,
  offset
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-easing={easing}
      data-aos-offset={offset}
    >
      {children}
    </div>
  );
};

export default Motion;
