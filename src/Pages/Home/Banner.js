import React from 'react';
import homebgimg from "../../images/mostafa-meraji-5npGPG0sSVk-unsplash.jpg";
// import homebgimg2 from "../../images/mostafa-meraji-v7DgWdQL_eE-unsplash.jpg";
// import homebgimg3 from "../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg";

const Banner = () => {
  // const leftTextArea = {
  //   "justify-content": "start",
  //   "display": "flex"
  // }
  return (
    <div className="hero min-h-screen hero-overlay bg-opacity-40">
      <div className="hero min-h-screen hero-overlay bg-opacity-40" style={{ backgroundImage: `url(${homebgimg})` }}>


      <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3">Your message from Santa is waiting!</p>
            <p className="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Looking to create a greater impact with your commercial Christmas display? Take a look at the services we have on offer...</p>
            <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button>
          </div>
        </div>
      </div>
        {/* <div style={leftTextArea}> 
          <div className="text-center text-neutral-content">
            <div className="max-w-md text-left">
              <h1 className="mb-5 text-5xl font-bold">We Will Keep You An Impacable Look</h1>
              <p className="mb-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div> */}
      </div>
    // </div>
  );
};

export default Banner;
