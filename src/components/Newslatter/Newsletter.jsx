import React from "react";

const Newsletter = () => {
  return (
    <div className="relative -mt-36 border-2 w-11/12 mx-auto p-4 rounded-3xl">
      {/* Wrapper with pseudo-elements for gradients */}
      <div className="relative bg-white text-center border-2 rounded-3xl py-20 overflow-hidden">
        {/* Top-right and Bottom-left gradient with a single color */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-50"></div>
        
        {/* Content */}
        <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
        <p className="text-gray-600">Get the latest updates and news right in your inbox!</p>

        <form className=" mt-4 flex justify-center items-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="lg:w-64 p-2 rounded-l-md text-white"
          />
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-r-md">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

