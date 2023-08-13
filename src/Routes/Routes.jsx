import {
    createBrowserRouter,
  } from "react-router-dom";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Register/Login/Login";
import Settings from "../AccountSetting/Settings";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
          },
        {
         path: "/register",
         element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
          path: "/setting",
         element: <PrivateRoute><Settings/></PrivateRoute>
      }
      ]
    },
  ]);