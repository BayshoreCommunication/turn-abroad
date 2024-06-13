import React from "react";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiVisaFill } from "react-icons/ri";

const Process = () => {
  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 clip bg-[#2d6b98] items-center justify-center rounded-xl overflow-hidden clip">
        <div
          className="bg-[#3578a8] h-full clipping-path-red"
         
        >
          <div className="p-7 flex items-center gap-4 h-full">
            <HiOutlineClipboardDocumentList className="text-4xl md:text-6xl text-white flex-shrink-0" />
            <h2 className="text-base md:text-xl font-bold text-white">
              Information Collected from you
            </h2>
          </div>
        </div>
        <div
          className=" h-full"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
          }}
          
        >
          <div className="p-7 flex items-center gap-4 h-full ">
            <FaComputer className="text-4xl md:text-6xl text-white flex-shrink-0" />
            <h2 className="text-base md:text-xl font-bold text-white">
              Filing online Application and uploading required documents
            </h2>
          </div>
        </div>
        <div
          className="bg-[#28638e] h-full clipping-path-green"
        >
          <div className="lg:ps-16 p-7 flex items-center gap-4 h-full "
          
          >
            <RiVisaFill className="text-4xl md:text-6xl text-white flex-shrink-0" />
            <h2 className="text-xl font-bold text-white">Visa Approved</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
