import React, { useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Motion from "../../motion/Motion";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Passport = () => {
  const emailRef = useRef();
  const purposeRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      purpose: purposeRef?.current?.value,
      email: emailRef?.current?.value,
    };
    if (!emailRef?.current?.value) {
      return toast.error("Please Enter Your Email", {
        toastId: "workerConsultationFromNameEmailError",
        position: "top-right",
      });
    }
    emailjs
      .send(
        "service_f7361to",
        "template_mniif1d",
        templateParams,
        "B3NmXWHKDF1AhfJI6"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          // return toast.success(
          //   <div className=" w-full max-w-md text-center">
          //     <p className="text-lg text-start font-semibold text-green-700 mb-2">
          //       Thanks For Your Submission.
          //     </p>
          //     <p className="text-base text-start font-normal text-gray-700 ">
          //       Our Team Will Reach Out To You Shortly
          //     </p>
          //   </div>,
          //   {
          //     toastId: "workerConsultationForm",
          //     position: "top-center",
          //     transition: Slide,
          //     style: {
          //       width: "400px", // Adjust the width as needed
          //     },
          //   }
          // );
          return Swal.fire({
            icon: "success",
            title: "Thanks For Your Submission!",
            text: "Our Team Will Reach Out To You Shortly.",
            confirmButtonColor: "#2D8FCC",
          });
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    // purposeRef.current.value = "";
    emailRef.current.value = "";
  };
  return (
    <section className="py-10 lg:py-14 xl:py-16 bg-[#F3F3F3] overflow-hidden">
      <Motion effect="fade-up" duration="1500">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl xl:text-[40px] font-extrabold text-center mb-4 md:mb-8 ">
              Get a US <span className="text-[#2D8FCC]">Passport</span>
            </h1>
            <Tabs>
              <TabList
                role="tablist"
                className="tabs grid-cols-2  w-full lg:max-w-5xl mx-auto bg-[#F2F7FE] rounded-[80px] p-0 overflow-hidden"
              >
                <Tab
                  role="tab"
                  className="tab text-sm bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
                >
                  E2 Investment Visa
                </Tab>
                <Tab
                  role="tab"
                  className="tab text-sm bg-transparent lg:text-xl font-semibold lg:font-extrabold p-2 px-4 lg:px-11 h-12 lg:h-14 focus:outline-none outline-none w-full"
                >
                  EB5 Investment Visa
                </Tab>
              </TabList>

              <TabPanel>
                <form action="" onSubmit={sendMessage}>
                  <select hidden ref={purposeRef} name="purpose">
                    <option defaultValue>E2 Investment Visa</option>
                  </select>
                  <input
                    required
                    type="text"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter Your Email"
                    className="input w-full max-w-5xl text-center my-4 md:my-10 focus:outline-none  bg-white h-12 lg:h-16 placeholder:text-xl"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary !text-xl !leading-[120%]  block mx-auto mt-3"
                  >
                    Submit
                  </button>
                </form>
              </TabPanel>
              <TabPanel>
                <form action="" onSubmit={sendMessage}>
                  <select hidden ref={purposeRef} name="purpose">
                    <option defaultValue> EB5 Investment Visa</option>
                  </select>
                  <input
                    required
                    type="text"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter Your Email"
                    className="input w-full max-w-5xl text-center my-4 md:my-10 focus:outline-none  bg-white h-12 lg:h-16 placeholder:text-xl"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary !text-xl !leading-[120%]  mt-3 block mx-auto "
                  >
                    Submit
                  </button>
                </form>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default Passport;
