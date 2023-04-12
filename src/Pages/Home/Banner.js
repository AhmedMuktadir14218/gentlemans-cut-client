import React from 'react';
import homebgimg from "../../images/mostafa-meraji-5npGPG0sSVk-unsplash.jpg";
// import homebgimg2 from "../../images/mostafa-meraji-v7DgWdQL_eE-unsplash.jpg";
// import homebgimg3 from "../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg";

const Banner = () => {
  const leftTextArea = {
    "justify-content": "start",
    "display": "flex"
  }
  return (
    <div className="hero min-h-screen hero-overlay bg-opacity-40">
      <div className="hero min-h-screen hero-overlay bg-opacity-40" style={{ backgroundImage: `url(${homebgimg})` }}>

        <div style={leftTextArea}> 
          <div className="text-center text-neutral-content">
            <div className="max-w-md text-left">
              <h1 className="mb-5 text-5xl font-bold">We Will Keep You An Impacable Look</h1>
              <p className="mb-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
