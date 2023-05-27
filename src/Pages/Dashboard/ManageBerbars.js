import { useQuery } from 'react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
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
                const res = await fetch('http://localhost:5000/berbars', {
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
        fetch(`http://localhost:5000/berbars/${berbar._id}`, {
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

    return (
        <div>
            <h2 className="text-3xl">Manage berbars: {berbars?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            berbars.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingBerbar(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
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