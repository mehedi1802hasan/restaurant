import React from 'react';
import Main from '../Home/Home/Main';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../Home/Home/Home';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);
  
export default router;