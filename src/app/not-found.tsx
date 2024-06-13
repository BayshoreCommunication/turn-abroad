import Motion from "@src/components/motion/Motion";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-white min-h-fit">
      <div className="container">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <Motion effect="zoom-in" duration="2000">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
                404
              </h1>

              <p className="mb-4 text-3xl tracking-tight font-bold text-secondary md:text-4xl">
                Something&apos;s missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can&apos;t find that page. You&apos;ll find lots to
                explore on the home page.{" "}
              </p>
              <Link href="/" className="btn btn-primary">
                Back to Homepage
              </Link>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
