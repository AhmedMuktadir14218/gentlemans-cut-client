import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    const SizeNav = {
        "color": "white",
        "font-family": "'Roboto Condensed', sans-serif"
    };
    return (
        <div>
            <Navbar></Navbar>
            <div style={SizeNav} className=" drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div style={SizeNav} className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu pl-32  w-80  ">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {/* <li><Link to="/dashboard/allusers">All users</Link></li> */}
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/bookinglist">BookingList</Link></li>
                                <li><Link to="/dashboard/addberbar">Add A Barber</Link></li>
                                <li><Link to="/dashboard/manageberbars">Manage Barbers</Link></li>
                                <li><Link to="/dashboard/addnewservice">Add Service</Link></li>
                           
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;