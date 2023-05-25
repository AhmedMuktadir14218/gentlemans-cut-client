import React from 'react';

import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const SizeNav={
       
        "color":"white",
        "font-family": "'Roboto Condensed', sans-serif"
    
    };
    
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    return (
        <div style={SizeNav}>
         
<AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
<AvailableAppointment selectedDate={selectedDate} setSelectedDate={setSelectedDate} ></AvailableAppointment>
        </div>
    );
};

export default Appointment;