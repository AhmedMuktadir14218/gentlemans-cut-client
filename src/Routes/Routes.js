import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Service from "../Pages/Service/Service";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "../Routes/AdminRoute/AdminRoute";
import BookingList from "../Pages/Dashboard/BookingList";
import AddBerbar from "../Pages/Dashboard/AddBerbar";
import ManageBerbars from "../Pages/Dashboard/ManageBerbars";
import AddNewService from "../Pages/Dashboard/AddNewService";

 const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children:[
            {
                path:'/',
                element : <Home></Home>
            },
            {
                path:'/about',
                element : <About></About>
            },
            {
                path:'/blog',
                element : <Blog></Blog>
            },
            {
                path:'/gallery',
                element : <Gallery></Gallery>
            },
            {
                path:'/login',
                element : <Login></Login>
            },
            {
                path:'/signup',
                element : <SignUp></SignUp>
            },
            {
                path:'/appointment',
                element : <Appointment></Appointment>
            },
            {
                path:'/service',
                element : <Service></Service>
            },
            // {
            //     path:'/dashboard',
            //     element : <Dashboard></Dashboard>
            // },



        ]

        
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
                // element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                // element:  <AllUsers></AllUsers> 
            },
            {
                path: '/dashboard/bookinglist',
                element: <AdminRoute><BookingList></BookingList></AdminRoute>
                // element:  <AllUsers></AllUsers> 
            },
            {
                path: '/dashboard/addberbar',
                element: <AdminRoute><AddBerbar></AddBerbar></AdminRoute>
            },
            {
                path: '/dashboard/manageberbars',
                element: <AdminRoute><ManageBerbars></ManageBerbars></AdminRoute>
            },
            {
                path: '/dashboard/addnewservice',
                element: <AdminRoute><AddNewService></AddNewService></AdminRoute>
            },
        ]
    }



])
export default router;