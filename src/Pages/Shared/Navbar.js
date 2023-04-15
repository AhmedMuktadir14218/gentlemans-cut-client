import React from 'react';

import { Link } from 'react-router-dom';
import scissors from "../../images/barber-scissors-24.png";

const Navbar = () => {
    // const {user,logOut}=useContext(AuthContext);
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(err => console.log(err));
    // }




    const menuItems = <React.Fragment>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/service">SERVICE</Link></li>
        <li><Link to="/appointment">APPOINTMENT</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/galary">GALARY</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        {/* <li><Link to="/contactus">Contact Us</Link></li> */}
        <li><button className='btn btn-primary'><Link to="/login">LogIn</Link></button></li>
        {/* {user?.uid ?1
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>} */}
            <label  className="swap swap-rotate">
  
  {/* <!-- this hidden checkbox controls the state --> */}
  <input type="checkbox" />
  
  {/* <!-- sun icon --> */}
  {/* <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg> */}
  
  {/* <!-- moon icon --> */}
  {/* <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg> */}
  
</label>    
    </React.Fragment>
    const SizeNav={
        "margin-left":"135px",
        "margin-right":"135px",
        "color":"white",
        // "font-family": "'Roboto Slab', sans-serif",
        "font-family": "'Roboto Condensed', sans-serif"
        // font-family: 'Roboto Condensed Light', sans-serif;

    };

    const forText={
        "font-family": "'Bebas Neue', sans-serif"
    }

    return (
        <div  className=" navbar    bg-neutral text-neutral-content  flex justify-between  ">
           {/* <div className=" max-w-[1440px] mx-auto  flex justify-between  "> */}
           {/* <div className=" "> */}
           <div style={SizeNav} className="navbar-start">
                <div  className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        {menuItems}
                    </ul>
                </div  >
                <Link style={forText} to="/" className="btn btn-ghost normal-case text-3xl"><span><img src={scissors} alt="" /></span> Gentleman's Cut</Link>
            </div>
            <div style={SizeNav} className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label> */}
           {/* </div> */}
        </div>
    );
};

export default Navbar;