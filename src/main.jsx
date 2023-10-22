import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import AuthProvider from './component/AuthProvider';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AddProduct from './component/AddProduct';
import MyCart from './component/MyCart';
import Error from './Error';
import PrivateRoute from './component/PrivateRoute';
import Details from './component/Details';
import ProductDetails from './component/ProductDetails';
import UpdateProduct from './component/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch("/data.json")
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
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=>fetch('https://assignment-ten-project-server.vercel.app/myCart')
      },
      {
        path: '/details/:name',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-ten-project-server.vercel.app/brand/${params.name}`)
      },
      {
        path:'/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-ten-project-server.vercel.app/products/${params.id}`)
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-ten-project-server.vercel.app/products/${params.id}`)
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
