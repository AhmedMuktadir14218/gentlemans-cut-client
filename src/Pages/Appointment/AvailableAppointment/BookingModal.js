import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
const BookingModal = ({ service, setService, selectedDate, refetch }) => {
    const { name, slots } = service;
    const date = format(selectedDate, 'PP');
    
    const { user } = useContext(AuthContext);



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const CLientName = form.CLientName.value;
        const preferredlocation = form.preferredlocation.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const booking = {
            appointmentDate: date,
            service: name,
            preferredlocation: preferredlocation,
            clientName: CLientName,
            slot,
            email,
            phone,
            address
        }
        //         console.log(booking);
        // setService(null);


        fetch('https://gentlemans-cut-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    // console.log(booking);
                    setService(null);
                    toast.success('Booking confirmed');
                    refetch()
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (

        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal  ">
                <div className="modal-box bg-neutral shadow-xl relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="bg-accent input w-full  " required />
                        <select name="slot" className="bg-accent select select-bordered w-full" required>
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <select name="preferredlocation" /*value={preferredlocation}*/ className="bg-accent select select-bordered w-full" required>
                            <option
                            >Offline Store</option>
                            {/* <option disabled selected>preferredlocation</option> */}
                            <option
                            >Home Service</option>
                        </select>
                        <input name="CLientName" type="text" placeholder="Your Name" className=" bg-accent input w-full input-bordered" required />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="  font-bold bd bg-accent input w-full  inputBG" />
                        <input name="address" type="text" placeholder="Address(If you want to take home service then fill up must be done)" className="bg-accent input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="bg-accent input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;