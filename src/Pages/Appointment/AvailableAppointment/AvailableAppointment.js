import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
const AvailableAppointment = ({selectedDate, setSelectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [service, setService] = useState(null);
    const date = format(selectedDate,'PP');
    // const {data:appointmentOptions =[],refetch } = useQuery({ 
    const {data:appointmentOptions =[]  } = useQuery({ 
        queryKey: ['appointmentOption',date],
        queryFn: async () =>{ 
        // const res = await fetch(`https://doctor-chamber-server.vercel.app/appointmentOptions?date=${date}`);
        const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
        const data = await res.json();
        return data
        } 
    
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <div className='mt-16'>
            <p className='text-center text-2xl font-bold text-primary'>Available Appointment on {format(selectedDate,'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option=> <AppointmentOption
                    key={option._id} appointmentOption={option}  setService={setService}
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