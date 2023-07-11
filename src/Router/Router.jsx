import React from 'react';
import Main from '../Home/Home/Main';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../Home/Home/Home';
import Menu from '../Home/Home/Menu';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:'menu',
          element:<Menu></Menu>
        }
      ]
    },
  ]);
  
export default router;