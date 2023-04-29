import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
const AvailableAppointment = ({selectedDate, setSelectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-16'>
            <p className='text-center text-2xl font-bold text-primary'>Available Appointment on {format(selectedDate,'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option=> <AppointmentOption
                    key={"_id"} appointmentOption={option}  setService={setService}
                    >

                    </AppointmentOption>)
                }
            </div>
            {
                service &&
                
            <BookingModal  service={service}  setService={setService} selectedDate={selectedDate}></BookingModal>
            }
                    
        </div>
    );
};

export default AvailableAppointment;