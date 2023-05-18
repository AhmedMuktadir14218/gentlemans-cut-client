import { useQuery } from 'react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider';

const BookingList = () => {
    // const { user } = useContext(AuthContext);
    const [bookingListOptions, setBookingListOptions] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5000/bookinglist')
           .then(res => res.json())
           .then(data => setBookingListOptions(data))
   }, [])
    // const url = `http://localhost:5000/bookinglist?email=${user?.email}`;

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, /**{
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         }*/);
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (
        <div >
            {/* <h3 className="text-3xl mb-5">My Appointments</h3> */}
            <div className="overflow-x-auto ">
                <table className="table w-full   ">
                    <thead >
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // bookingListOptions &&
                            bookingListOptions.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.clientName}</td>
                                <td>{booking.service}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                              
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;