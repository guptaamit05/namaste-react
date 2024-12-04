import React from "react";

const HeroSection = () => {
  return (
    < div>
      <div className=" flex flex-col md:flex-row justify-center items-start w-screen p-8 md:px-36 md:pt-10">
        <div className="flex flex-col md:justify-start md:items-start sm:justify-center sm:items-center md:w-[50%] ">
          <h1 className="text-4xl md:text-8xl font-bold">YOUR FEET DESERVE THE BEST</h1>
          <p className="text-wrap md:w-[70%] mt-6 mb-6">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex justify-start gap-8 items-center mt-3">
            <button className="bg-pink-500 font-bold text-white px-5 py-1">
              Shop Now
            </button>
            <button className="border border-black px-5 py-1">Category</button>
          </div>
        </div>
        <div className="md:w-[50%] mt-10 md:mt-2">
          <img className="" src="./images/shoe_image.png" alt="Shoes img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
