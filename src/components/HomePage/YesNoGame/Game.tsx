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
                {`Think you’re ready for moving Abroad?`} <br />{" "}
                {`Play now and pass
                this ultimate visa game.`}
              </h1>
              <p className="mb-3 font-semibold text-xl text-center">
                {`Ready to test your knowledge about moving Abroad? Take on the
                ultimate Visa game challenge! Play now to see if you have what
                it takes to pass and prove you're prepared for the journey
                ahead.`}
              </p>
              <div className="flex gap-4 justify-center ">
                <Link
                  href={"/make-your-decision"}
                  className="btn btn-primary mt-10 lg:mt-12"
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
