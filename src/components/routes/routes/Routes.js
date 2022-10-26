import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/Main";
import Blog from "../../../pages/Blog/Blog";
import Courses from "../../../pages/Courses/Courses";
import FAQ from "../../../pages/FAQ/FAQ";
import Login from "../../../pages/Login/Login";
import Signup from "../../../pages/Signup/Signup";
import Course from "../../Course/Course";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/all')
            },
            {
                path: '/course/:id',
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`),
                element: <Course></Course>,
                
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])