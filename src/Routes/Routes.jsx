import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/My Toys/MyToys";
import Update from "../Pages/Update/Update";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDetails from "../Components/ViewDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addatoy',
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/update/${params.id}`)
      },
      {
        path: "/alltoys",
        element:<AllToys></AllToys>
        // loader:()=>fetch('https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/toys')

      },
      {
        path: "/viewdetails/:id",
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/viewdetails/${params.id}`)

      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }


    ]

  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);
export default router;