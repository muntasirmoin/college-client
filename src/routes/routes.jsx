import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import CollegeDetails from "../Components/Pages/Colleges/CollegeDetails";
import Home from "../Components/Pages/Home/Home";
import Login from "./Login&Signup/Login/Login";
import Signup from "./Login&Signup/Signup/Signup";
import AllCollege from "../Components/CollegeAdmission/AllCollege/AllCollege";
import Admission from "../Components/CollegeAdmission/Admission/Admission";
import AdmissionInput from "../Components/CollegeAdmission/Admission/AdmissionInput";
import MyCollege from "../Components/Pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./Login&Signup/ForgetPassword/ForgetPassword";
import ErrorPage from "../ErrorPage/ErrorPage";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
         {
            path: 'details/:id',
            element: <CollegeDetails></CollegeDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/college/${params.id}`)
         },
        {
            path:'colleges',
            element: <AllCollege></AllCollege>
        },
        {
            path: 'mycollege',
            element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
        },
        {
            path: 'admission',
            element: <Admission></Admission>
        },
        {
            path:'admissionInput/:id',
            element:<AdmissionInput></AdmissionInput>,
            loader: ({params}) => fetch(`http://localhost:5000/college/${params.id}`)
        },
        //  path: 'viewDetail/:id',
        // element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://toy-chamber-server.vercel.app/singleToy/${params.id}`)
         {
            path: 'login',
            element: <Login></Login>
         },
         {
            path:'signup',
            element:<Signup></Signup>
         },
         {
            path:'forgetpassword',
            element: <ForgetPassword></ForgetPassword>
         },
         
      ],
    
    },
   
  ]);