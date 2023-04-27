import React from 'react';

import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const SizeNav={
        "margin-left":"135px",
            "margin-right":"135px",
              "margin-top":"90px",
        "margin-bottom":"90px",
        "color":"white",
        // "font-family": "'Roboto Slab', sans-serif",
        "font-family": "'Roboto Condensed', sans-serif"
        // font-family: 'Roboto Condensed Light', sans-serif;
    
    };
    
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    return (
        <div style={SizeNav}>
            {/* <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={AppointmentImg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}

<AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
<AvailableAppointment selectedDate={selectedDate} setSelectedDate={setSelectedDate} ></AvailableAppointment>
        </div>
    );
};

export default Appointment;