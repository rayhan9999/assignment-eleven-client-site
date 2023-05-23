import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      multiple: true, // Start animations on scroll

    });
  }, []);


  return (
    <div className="my-32">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center gap-8">
        <div className="px-3 mt-10 md:mt-0" data-aos="fade-right">
          <h2 className="text-[#7b1f5d] md:text-4xl text-2xl font-bold">
            Ultimate Kid Toys Available <span className="text-cyan-500">Online Shop</span>
          </h2>
          <h1 className="mt-5 text-black text-lg font-extrabold">Buy The Best Toy From Malik-Zone</h1>
          <h1 className="px-2 my-6 text-lg font-normal text-[#757577;">
          </h1>

          <button className="btn btn-primary">SEE</button>
        </div>
        <div className="h-96" data-aos="fade-left">
          <img className="rounded object-cover" src="https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=533&q=80" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
