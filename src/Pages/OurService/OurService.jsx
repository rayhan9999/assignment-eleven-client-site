import React from "react";
import { FaTruck, FaUndo, FaHeadset } from "react-icons/fa";

const OurService = () => {
  return (
    <div className="mb-28">
      <h2 className="text-2xl text-center font-bold mb-10">Service That We Provide</h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card w-full bg-base-100 text-[#494949] border border-transparent hover:border-gray-700 transition duration-300">
          <div className="card-body items-center text-center">
            <div className="hover:scale-105">
              <FaTruck className="text-3xl mx-auto mt-2" />
            </div>
            <h2 className="card-title">Custom Toys!</h2>
            <p>We Provide The Best</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 text-[#494949] border border-transparent hover:border-gray-700 transition duration-300">
          <div className="card-body items-center text-center">
            <div className="hover:scale-105">
              <FaUndo className="text-3xl mx-auto mt-2" />
            </div>
            <h2 className="card-title">Kurier Service</h2>
            <p>We Deliver Our Toys Within 24 hours. </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 text-[#494949] border border-transparent hover:border-gray-700 transition duration-300">
          <div className="card-body items-center text-center">
            <div className="hover:scale-105">
              <FaHeadset className="text-3xl mx-auto mt-2" />
            </div>
            <h2 className="card-title">Our Service Providing Number Is :+02456789</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
