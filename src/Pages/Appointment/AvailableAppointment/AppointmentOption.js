import React from 'react';

const AppointmentOption = ({ appointmentOption, setService }) => {
  const { name, slots, img, SPrice } = appointmentOption
  return (
    <div>
      <div className="card w-86 bg-neutral shadow-xl">
        <figure className="ap_figure px-8 pt-8">
          <img src={img} alt=" " className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <p>{SPrice}</p>
          <div className="card-actions">


            <label htmlFor="booking-modal" onClick={() => setService(appointmentOption)} className="btn btn-primary">Buy Now</label>
          </div>



        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;