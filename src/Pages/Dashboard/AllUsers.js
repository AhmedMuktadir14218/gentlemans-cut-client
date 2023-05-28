import { useQuery, useMutation } from 'react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery('users', async () => {
    const res = await fetch('https://gentlemans-cut-server.vercel.app/users');
    const data = await res.json();
    return data;
  });

  const makeUserAdmin = useMutation(id =>
    fetch(`https://gentlemans-cut-server.vercel.app/users/admin/${id}`, {
    // fetch('https://gentlemans-cut-server.vercel.app/users', {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Failed to make user admin');
    })
  );

  const handleMakeAdmin = id => {
    makeUserAdmin.mutateAsync(id)
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.');
          refetch();
        } else {
          throw new Error('No users modified');
        }
      })
      .catch(error => {
        toast.error(error.message);
      });
  };




    // const {data: users = [], refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async() =>{
    //         const res = await fetch('https://gentlemans-cut-server.vercel.app/users');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    // const handleMakeAdmin = id => {
    //     fetch(`https://gentlemans-cut-server.vercel.app/users/admin/${id}`, {
    //         method: 'PUT', 
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.modifiedCount > 0){
    //             toast.success('Make admin successful.')
    //             refetch();
    //         }
    //     })
    // }

     
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


<h3 style={SizeNav} className="text-3xl mb-5">
             All Users</h3>
            <div className="overflow-x-auto ">
                <table className="b_table w-full   " style={b_table}>
                    <thead style={{ "background-color": "red" }} >
                        <tr style={b_tr} >
                        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
        users.map((user, i) =><tr key={user._id}>
          {/* {        console.log(user._id)} */}
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id) 
              } className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;