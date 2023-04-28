import React from 'react';
import dummyImg from './../../../images/mostafa-meraji-v7DgWdQL_eE-unsplash.jpg';

const AppointmentOption = ({appointmentOption,setService}) => {
    const {name,slots} =appointmentOption
    return (
        <div>
            <div className="card w-86 bg-neutral shadow-xl">
  <figure className="px-8 pt-8">
    <img src={dummyImg} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'try Another'}</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button>
       */}
       
<label htmlFor="booking-modal"  onClick={()=> setService(appointmentOption)} className="btn btn-primary">Buy Now</label>
    </div>

    

  </div>
</div>
        </div>
    );
};

export default AppointmentOption;