
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddNewService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    
  

    const handleAddNewService = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // console.log(imgData.data.url);
                const service = {
                    name: data.name, 
                    img: imgData.data.url,
                    SPrice: data.sPrice,
                    slots: [
                        "08.00 AM - 08.30 AM",
                        "08.30 AM - 09.00 AM",
                        "09.00 AM - 9.30 AM",
                        "09.30 AM - 10.00 AM",
                        "10.00 AM - 10.30 AM",
                        "10.30 AM - 11.00 AM",
                        "11.00 AM - 11.30 AM",
                        "11.30 AM - 12.00 AM",
                        "1.00 PM - 1.30 PM",
                        "1.30 PM - 2.00 PM",
                        "2.00 PM - 2.30 PM",
                        "2.30 PM - 3.00 PM",
                        "3.00 PM - 3.30 PM",
                        "3.30 PM - 4.00 PM",
                        "4.00 PM - 4.30 PM",
                        "4.30 PM - 5.00 PM"
                      ]                  
                }

                // save service information to the database
                fetch('https://gentlemans-cut-server.vercel.app/appointmentOptions', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(service)
                })
                .then(res => res.json())
                .then(result =>{
                    // console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/service')
                })
            }
        })
    }

   

    return (
        <div className='doctormid w-96 p-7'>
            <h2 className="text-4xl">Add A service</h2>
            <form onSubmit={handleSubmit(handleAddNewService)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input text-black input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">sPrice</span></label>
                    <input type="text" {...register("sPrice", {
                        required: true
                    })} className="input  text-black input-bordered w-full max-w-xs" />
                    {/* {errors.email && <p className='text-red-500'>{errors.email.message}</p>} */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">slots</span></label>
                    <input
  type="text"
  {...register("slots", {
    required: true
  })}
  defaultValue={[
    "08.00 AM - 08.30 AM",
    "08.30 AM - 09.00 AM",
    "09.00 AM - 9.30 AM",
    "09.30 AM - 10.00 AM",
    "10.00 AM - 10.30 AM",
    "10.30 AM - 11.00 AM",
    "11.00 AM - 11.30 AM",
    "11.30 AM - 12.00 AM",
    "1.00 PM - 1.30 PM",
    "1.30 PM - 2.00 PM",
    "2.00 PM - 2.30 PM",
    "2.30 PM - 3.00 PM",
    "3.00 PM - 3.30 PM",
    "3.30 PM - 4.00 PM",
    "4.00 PM - 4.30 PM",
    "4.30 PM - 5.00 PM"
  ]}
  className="input text-black input-bordered w-full max-w-xs"
/>
                </div>
               
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className=" text-white label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Add service" type="submit" />
            </form>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddNewService;