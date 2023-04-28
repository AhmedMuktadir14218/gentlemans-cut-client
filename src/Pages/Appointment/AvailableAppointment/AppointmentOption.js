import React from 'react';
import dummyImg from './../../../images/mostafa-meraji-v7DgWdQL_eE-unsplash.jpg';

const AppointmentOption = ({appointmentOption}) => {
    const {name,slots} =appointmentOption
    return (
        <div>
            <div className="card w-96 bg-neutral shadow-xl">
  <figure className="px-10 pt-10">
    <img src={dummyImg} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{slots}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentOption;