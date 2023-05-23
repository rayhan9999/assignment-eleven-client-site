import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToys from "../Pages/SingleToys/SingleToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/MyToys/UpdateToys";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,

            },
            {
                path: '/singletoys/:id',
                element: <PrivateRoutes><SingleToys></SingleToys></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-eleven-server-site.vercel.app/alltoys/${params.id}`)


            },
            {
                path: '/addtoys',
                element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>,
            },
            {
                path: '/mytoys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,

            },
            {
                path: 'updatetoys/:id',
                element: <PrivateRoutes><UpdateToys></UpdateToys></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-eleven-server-site.vercel.app/alltoys/${params.id}`)


            },

        ]
    },
]);

export default router
