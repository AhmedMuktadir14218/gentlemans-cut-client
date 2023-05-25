import React from 'react';
import homebgimg from "../../images/mostafa-meraji-5npGPG0sSVk-unsplash.jpg";
import './Banner.css';
import phone from '../../images/phone-28-24.png';
import { Link } from 'react-router-dom';
const Banner = () => {


  const SizeNav={
    // "margin-left":"135px",
        // "margin-right":"135px",
    "color":"white",
    // "font-family": "'Roboto Slab', sans-serif",
    "font-family": "'Roboto Condensed', sans-serif"
    // font-family: 'Roboto Condensed Light', sans-serif;

};


  return (

<div>
      <div className="c_padding hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${homebgimg})` }}>
  <div className="hero-content lg:flex-row-reverse">
    <img src="/src/images/allef-vinicius-IvQeAVeJULw-unsplash.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div  style={SizeNav}>
      <h1 className="text-5xl font-bold">We Will Keep You An <br /> Impacable Look!</h1>
     <p className='my-2.5 text-slate-300'>
      3891 Ranchview Dr. Richardson, <br />
      California 62639
      </p>
      <div style={{"display":"flex"}}>
        <div><span> <img src={phone} alt="" /> </span></div>
        
      <h1>  +1 234 567 890</h1>
      </div>
      <div className='my-3.5'>
        
      <button className="btn btn-primary"><Link to="/service">BOOK NOW</Link> </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
