import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Service from "../Pages/Service/Service";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";
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
            {
                path:'/dashboard',
                element : <Dashboard></Dashboard>
            },
        ]
    }
])
export default router;