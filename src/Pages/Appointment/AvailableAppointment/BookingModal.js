// import { format } from 'date-fns';
// import React from 'react';

// const BookingModal = ({ service, setService, selectedDate }) => {
//     // treatment is just another name of appointmentOptions with name, slots, _id
//     const { name, slots } = service;
//     const date = format(selectedDate, 'PP');

//     const handleBooking = event => {
//         event.preventDefault();
//         const form = event.target;
//         const slot = form.slot.value;
//         const name = form.name.value;
//         const email = form.email.value;
//         const phone = form.phone.value;
//         // [3, 4, 5].map((value, i) => console.log(value))
//         const booking = {
//             appointmentDate: date,
//             service: name,
//             patient: name,
//             slot,
//             email,
//             phone,
//         }

//         // TODO: send data to the server
//         // and once data is saved then close the modal 
//         // and display success toast
//         console.log(booking);
//         setService(null);
//     }

//     return (
//         <>
//             <input type="checkbox" id="booking-modal" className="modal-toggle" />
//             <div className="modal  bg-neutral shadow-xl">
//                 <div className="modal-box relative">
//                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                     <h3 className="text-lg font-bold">{name}</h3>
//                     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
//                         <input type="text" disabled value={date} className="input w-full input-bordered " />
//                         <select name="slot" className="select select-bordered w-full">
//                             {
//                                 slots.map((slot, i) => <option
//                                     value={slot}
//                                     key={i}
//                                 >{slot}</option>)
//                             }
//                         </select>
//                         <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
//                         <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
//                         <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
//                         <br />
//                         <input className='btn btn-accent w-full' type="submit" value="Submit" />
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BookingModal;





import { format } from 'date-fns';
import React from 'react';
const BookingModal = ({ service, setService, selectedDate }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots } = service;
    const date = format(selectedDate, 'PP');

    
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const CLientName = form.CLientName.value;
        const preferredlocation = form.preferredlocation.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            service: name,
            preferredlocation:preferredlocation,
            clientName: CLientName,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);
        setService(null);
    }


    return (
//         <div>
//             {/* modal start*/}
// <div className='bg-neutral'>
// <input type="checkbox" id="booking-modal" className="modal-toggle " />
// <div className="modal  modal-bottom sm:modal-middle">
//   <div className="modal-box bg-neutral shadow-xl">
//     <h3 className="font-bold text-lg">{name}</h3>
//     <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//     <div className="modal-action">
//       <label htmlFor="my-modal-6" className="btn btn-primary">Confirm</label>
//     </div>
//   </div>
// </div>
// </div>

// {/* Put this part before </body> tag */}
//         </div>


 <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal  ">
                <div className="modal-box bg-neutral shadow-xl relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text"  value={date} className="bg-accent input w-full  " />
                        <select name="slot" className="bg-accent select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <select name="preferredlocation" /*value={preferredlocation}*/ className="bg-accent select select-bordered w-full">
                            <option >Offline Store</option>
                            {/* <option disabled selected>preferredlocation</option> */}
                            <option>Home Service</option>
                        </select>
                        <input name="CLientName" type="text" placeholder="Your Name" className=" bg-accent input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="bg-accent input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="bg-accent input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;