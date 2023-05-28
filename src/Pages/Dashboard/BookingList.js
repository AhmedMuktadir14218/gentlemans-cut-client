import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [bookingListOptions, setBookingListOptions] = useState([]);
    useEffect(() => {
        fetch('https://gentlemans-cut-server.vercel.app/bookinglist')
            .then(res => res.json())
            .then(data => setBookingListOptions(data))
    }, [])

    const b_table = {

        "background-color": "#2C2C2C !important",
        "text-align": "center",
        "color": "#fff",
        "border": "1px solid",

    };
    const b_tr = {
        "border": "1px solid",
        "padding": "10px 0",
    };
    const SizeNav = {
        "color": "white",
        "font-family": "'Roboto Condensed', sans-serif"
    };
    return (
        <div className='c_padding'>
            <h3 style={SizeNav} className="text-3xl mb-5">Booking List</h3>
            <div className="overflow-x-auto ">
                <table className="b_table w-full   " style={b_table}>
                    <thead style={{ "background-color": "red" }} >
                        <tr style={b_tr} >
                            <th>No.</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingListOptions.map((booking, i) => <tr style={b_tr} key={booking._id}>
                                <td>{i + 1}</td>
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