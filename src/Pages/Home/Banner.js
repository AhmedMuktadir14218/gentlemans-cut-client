import React from 'react';
import homebgimg from "../../images/mostafa-meraji-5npGPG0sSVk-unsplash.jpg";
// import homebgimg2 from "../../images/mostafa-meraji-v7DgWdQL_eE-unsplash.jpg";
// import homebgimg3 from "../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import './Banner.css';

const Banner = () => {


  const SizeNav={
    "margin-left":"90px",
        "margin-right":"110px",
    "color":"white",
    // "font-family": "'Roboto Slab', sans-serif",
    "font-family": "'Roboto Condensed', sans-serif"
    // font-family: 'Roboto Condensed Light', sans-serif;

};
  return (
    // <div className="hero min-h-screen hero-overlay bg-opacity-40">
    //   <div className="hero min-h-screen hero-overlay bg-opacity-40" style={{ backgroundImage: `url(${homebgimg3})` }}>

    //     <div style={leftTextArea}> 
    //       <div className="bannertext text-center text-neutral-content">
    //         <div className="max-w-md text-left">
    //           <h1 className="mb-5 text-5xl font-bold">We Will Keep You An Impacable Look</h1>
    //           <p className="mb-3">Provident cupiditate voluptatem Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excet in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
    //           <button className="btn btn-primary">Book Now</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div>
      <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${homebgimg})` }}>
  <div className="hero-content  lg:flex-row-reverse">
    <img src="/src/images/allef-vinicius-IvQeAVeJULw-unsplash.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div  style={SizeNav}>
      <h1 className="text-5xl font-bold">We Will Keep You An <br /> Impacable Look!</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">BOOK NOW</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
