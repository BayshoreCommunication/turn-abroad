import Link from "next/link";
import React from "react";
import Motion from "../../motion/Motion";

const FreeConsultation = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 overflow-hidden bg-[#F3F3F3]">
      <div className="container">
        <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-16 items-center p-0">
          <Motion effect="fade-right" duration="1500">
            <div className="lg:max-w-5xl w-full text-center">
              <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 text-[#434242]">
                You Can Get A Free Consultation
              </h1>
              <p className="mb-3 font-semibold text-xl text-center">
                Using our interactive simulator, you can find out your options
                of moving abroad. We offer a diverse database of mentorship
                programs that will prepare you to be able to succeed in your
                journey abroad.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href={"/consultation"} className="btn btn-primary mt-6">
                  Book Now
                </Link>
                {/* <Link href={"#"} className="btn btn-outline hover:border-primary hover:text-primary duration-500 mt-6">
                Free Consultation
              </Link> */}
              </div>
            </div>
          </Motion>
          {/* <Motion effect="fade-left" duration="1500">
            <div>
              <iframe
                className="w-[325px]  h-[190px] md:w-[700px]  md:h-[390px] lg:w-[470px] lg:h-[264px]  rounded-2xl overflow-hidden"
                src="https://www.youtube.com/embed/yGyrJZuOf7o?si=yXhEUH9530NsuOqc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Motion> */}
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
