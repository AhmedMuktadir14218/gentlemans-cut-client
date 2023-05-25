import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import scissors from "../../images/barber-scissors-24.png";
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }


    const menuItems = <React.Fragment>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/service">SERVICE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/gallery">GALARY</Link></li>
        <li><Link to="/blog">BLOG</Link></li>

        {user?.uid ?
            <>
                <li><Link className='uppercase' to="/dashboard">Dashboard</Link></li>
                <li><button className='btn btn-primary' onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><button className='btn btn-primary'><Link to="/login">LogIn</Link></button></li>}
    </React.Fragment>
    const SizeNav = {
        "color": "white",
        "font-family": "'Roboto Condensed', sans-serif"
    };

    const forText = {
        "font-family": "'Bebas Neue', sans-serif"
    }

    return (
        <div className=" navbar p_header bg-neutral text-neutral-content  flex justify-between  ">

            <div style={SizeNav} className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        {menuItems}
                    </ul>
                </div  >
                <Link style={forText} to="/" className="logo btn btn-ghost normal-case text-3xl"><span><img src={scissors} alt="" /></span> Gentleman's Cut</Link>
            </div>
            <div style={SizeNav} className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;