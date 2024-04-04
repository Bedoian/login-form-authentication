import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Others/Home';
import Login from './Components/Others/Login';
import Register from './Components/Others/Register';
import AuthProvider from './Provider/AuthProvider';
import Oders from './Components/Others/Oders';
import PrivetRoute from './Provider/PrivetRoute';
import Hidden from './Components/Others/Hidden';
import PrivetRoute1 from './Provider/PrivetRoute1';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      }
      ,
      {
        path:'/registration',
        element:<Register/>
      }
      ,
      {
        path:'/orders',
        element:<PrivetRoute><Oders></Oders></PrivetRoute>
      }
      ,
      {
        path:'/hidden',
        element:<PrivetRoute1><Hidden></Hidden></PrivetRoute1>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
