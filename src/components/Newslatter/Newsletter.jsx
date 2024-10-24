import React from "react";

const Newsletter = () => {
  return (
    <div className=" relative -mt-36 border-2 w-11/12 mx-auto p-4 rounded-3xl">
      <div className="bg-white text-center border-2 rounded-3xl py-20">
        {/* <img className="-mt-[20%] ml-[66%] absolute w-[40%]" src="./footer_t.png" alt="" /> */}
        <h1>Subscribe to our Newsletter</h1>
        <p>Get the latest updates and news right in your inbox!</p>

        <form className=" mt-4 flex justify-center items-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="lg:w-64 p-2 rounded-l-md text-black"
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
