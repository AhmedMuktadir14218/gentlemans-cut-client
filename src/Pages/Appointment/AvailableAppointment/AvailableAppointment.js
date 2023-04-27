import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate, setSelectedDate}) => {
    return (
        <div className='mt-16'>
            <p className='text-center font-bold text-primary'>Available Appointment on {format(selectedDate,'PP')}</p>
                    
        </div>
    );
};

export default AvailableAppointment;