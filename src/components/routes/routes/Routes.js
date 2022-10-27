import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/Main";
import Blog from "../../../pages/Blog/Blog";
import Checkout from "../../../pages/Checkout/Checkout";
import Courses from "../../../pages/Courses/Courses";
import ErrorPage from "../../../pages/ErrorPage/ErrorPage";
import FAQ from "../../../pages/FAQ/FAQ";
import Login from "../../../pages/Login/Login";
import Signup from "../../../pages/Signup/Signup";
import Course from "../../Course/Course";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://gazi-learning-academy-yeasin62.vercel.app/all')
            },
            {
                path: '/course/:id',
                loader: ({params})=> fetch(`https://gazi-learning-academy-yeasin62.vercel.app/course/${params.id}`),
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
            },
            {
                path: '/course/buy/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params})=> fetch(`https://gazi-learning-academy-yeasin62.vercel.app/course/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])