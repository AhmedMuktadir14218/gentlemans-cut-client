import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Service from "../Pages/Service/Service";
// import SignUp from "../Pages/SignUp/Signup";
import SignUp from "../Pages/SignUp/SignUp";
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
        ]
    }
])
export default router;