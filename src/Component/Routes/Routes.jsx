import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Main/Layout';
import Home from '../Pages/Home/Home';
import SingleService from '../Pages/Services/singleService';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import Checkout from '../Pages/Checkout/Checkout';
import CoustomerOrder from '../Pages/Orders/CoustomerOrder';
import AllOrders from '../Pages/ManageAllOrders/AllOrders';
import AddService from '../Pages/AddService/AddService';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    children: [
        {
           path: '/',
           element: <Home></Home> 
        },
        {
           path: '/services/:id',
           element: <PrivateRoute><SingleService></SingleService></PrivateRoute> ,
           loader: ({params}) => fetch(`https://dream-explorer-server.vercel.app/services/${params.id}`)
        },
        {
           path: '/checkout/:id',
           element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
           loader: ({params}) => fetch(`https://dream-explorer-server.vercel.app/services/${params.id}`)
        },
        {
           path: '/orders',
           element: <PrivateRoute><CoustomerOrder></CoustomerOrder></PrivateRoute>
        },
        {
           path: '/allOrders',
           element: <PrivateRoute><AllOrders></AllOrders></PrivateRoute>
        },
        {
           path: '/addservice',
           element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
           path: '/login',
           element: <Login></Login>
        },
        {
           path: '//signup',
           element: <SignUp></SignUp>
        }
    ]
}])

export default router;