import React from "react";

const Offer = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-10">Discount For Kids</h2>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img
            src="https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            className="min-w-md md:max-w-md rounded-md shadow-2xl" data-aos="fade-left"
            alt="Product Image"
          />
          <div className="lg:ml-8">
            <div data-aos="fade-down" className="border-dotted border-2 px-6 py-4 border-red-400 hover:bg-white">
              <h2 className="text-2xl font-bold text-red-500">
                Marvel Toys Available
              </h2>
              <p className="py-6">
                2023 Best Robotics Toy-Zone
                <span className="indicator-item badge badge-primary ml-2">
                  New
                </span>
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7 border-dotted border-2 p-4 border-green-300 hover:bg-white">
              <h2 className="text-2xl font-bold text-orange-500">Robotics Toy</h2>
              <p className="py-6 text-blue-300">
                You find here best toy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
