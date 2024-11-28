import Link from "next/link";
import React from "react";
import Motion from "../../motion/Motion";

const Game = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16 overflow-hidden bg-[#F3F3F3]">
      <div className="container">
        <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-16 items-center p-0">
          <Motion effect="fade-right" duration="1500">
            <div className="lg:max-w-5xl w-full text-center">
              <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 text-[#434242]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="mb-3 font-semibold text-xl text-center">
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                laudantium molestias eos sapiente officiis modi at sunt
                excepturi expedita sint? Sed quibusdam recusandae alias error
                harum maxime adipisci amet laborum.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href={"/make-your-decision"}
                  className="btn btn-primary mt-6"
                >
                  Start Game
                </Link>
                {/* <Link href={"#"} className="btn btn-outline hover:border-primary hover:text-primary duration-500 mt-6">
                Free Consultation
              </Link> */}
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default Game;
