import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/Main";
import Blog from "../../../pages/Blog/Blog";
import Courses from "../../../pages/Courses/Courses";
import FAQ from "../../../pages/FAQ/FAQ";
import Course from "../../Course/Course";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])