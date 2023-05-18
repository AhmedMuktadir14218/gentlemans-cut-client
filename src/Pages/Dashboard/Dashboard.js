import React, { useEffect, useState } from 'react';
import BookingList from './BookingList';
// import MyAppointment from './MyAppointment';

const Dashboard = () => {
    const [bookingListOptions, setBookingListOptions] = useState([]);
     useEffect(() => {
        fetch('http://localhost:5000/bookinglist')
            .then(res => res.json())
            .then(data => setBookingListOptions(data))
    }, [])
    return (
        <div>
            {/* <MyAppointment></MyAppointment> */}

        <BookingList></BookingList>
        </div>
    );
};

export default Dashboard;