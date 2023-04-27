import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate, setSelectedDate}) => {
    return (
        <div>
            <p>You have selected date: {format(selectedDate,'PP')}</p>
                    
        </div>
    );
};

export default AvailableAppointment;