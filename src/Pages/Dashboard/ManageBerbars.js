import { useQuery } from 'react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Pages/Shared/ConfirmationModal';
import Loading from '../../Pages/Shared/Loading';

const ManageBerbars = () => {
    const [deletingBerbar, setDeletingBerbar] = useState(null);

    const closeModal = () => {
        setDeletingBerbar(null);
    }


    const { data: berbars, isLoading, refetch } = useQuery({
        queryKey: ['berbars'],
        queryFn: async () => {
            try {
                const res = await fetch('https://gentlemans-cut-server.vercel.app/berbars', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    
    const handleDeleteDoctor = berbar => {
        fetch(`https://gentlemans-cut-server.vercel.app/berbars/${berbar._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Berbar ${berbar.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    
    const b_table = {

        "background-color": "#2C2C2C !important",
        "text-align": "center",
        "color": "#ffff",
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
        <div style={SizeNav} className='c_padding '>
            <h2 className="text-3xl">Total Barber: {berbars?.length}</h2>
            <div  className="overflow-x-auto">
                <table style={b_table} className="b_table  w-full">
                    <thead style={{ "background-color": "red" }} >
                        <tr style={b_tr} >
                            <th>No.</th>                            
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Specialty</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            berbars.map((berbar, i) => <tr key={berbar._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={berbar.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{berbar.name}</td>
                                <td>{berbar.email}</td>
                                {/* <td>{berbar.specialty}</td> */}
                                <td>
                                    <label onClick={() => setDeletingBerbar(berbar)} htmlFor="confirmation-modal" className="btn btn-primary">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBerbar && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBerbar.name}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deletingBerbar}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageBerbars;