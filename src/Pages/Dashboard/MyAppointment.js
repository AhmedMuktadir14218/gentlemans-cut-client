import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
// import BookingList from '../Dashboard/BookingList';
const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://gentlemans-cut-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url  ,
                {
                // headers: {
                //    authorization: `bearer ${localStorage.getItem('accessToken')}` 
                // }
            }
            );
            const data = await res.json();
            return data;
        }
    })

    
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
        
       <div>
        {/* <BookingList></BookingList> */}
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
                            bookings.map((booking, i) => <tr style={b_tr} key={booking._id}>
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
       </div>
    );
};

export default MyAppointment;