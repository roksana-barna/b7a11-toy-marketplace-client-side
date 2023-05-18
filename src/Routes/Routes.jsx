import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAToy from "../Pages/AddAToy/AddAToy";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
      
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addatoy',
          element:<AddAToy></AddAToy>
        }
      ]
     
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ]);
  export default router;