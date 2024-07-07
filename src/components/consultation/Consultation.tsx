import React from "react";

const Consultation = () => {
  return (
    <section className="py-10 lg:py-14 xl:py-16">
      <div className="container">
        <div className="w-full lg:max-w-screen-md h-fit mx-auto">
          <h2 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal mb-6 lg:mb-10">
            Book your <span className="text-primary"> Free</span> consultation
            with <span className="text-primary"> TurnAbroad</span>
          </h2>
          <div className=" flex flex-col w-full gap-6">
            <div className="flex  w-full gap-6">
              <input
                type="text"
                placeholder="Name"
                className="input border-[#B7BBBF] w-full focus:outline-none bg-transparent"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="input border-[#B7BBBF] w-full focus:outline-none bg-transparent"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input border-[#B7BBBF] w-full focus:outline-none bg-transparent"
            />

            <select className="select border-[#B7BBBF] w-full focus:outline-none bg-transparent">
              <option>Preferred Destination</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
            {/* <select className="select border-[#B7BBBF] w-full focus:outline-none bg-transparent">
              <option>Preferred Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select> */}
            <select className="select border-[#B7BBBF] w-full focus:outline-none bg-transparent">
              <option>Purpose</option>
              <option>Study</option>
              <option>Work</option>
              <option>Invest</option>
            </select>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-black"
              >
                I agree with the{" "}
                <a
                  href="/terms-conditions"
                  className="text-primary hover:border-b  border-primary duration-500"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button className="btn btn-primary w-fit">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
