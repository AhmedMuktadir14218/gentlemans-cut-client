import React from 'react';
import homebgimg from "../../images/mostafa-meraji-5npGPG0sSVk-unsplash.jpg";
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${homebgimg})` }}> 
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">We Will Keep You An Impacable Look</h1>
      <p className="mb-5"></p>
      <button className="btn btn-accent">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;