import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import Home from './Home/Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ReadMore from './ReadMore';
import About from './About';
import ContactUs from './ContactUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/public/services.json')
        
      },
      {
        path:'/cards/:id',
        element:<ReadMore></ReadMore>,
        loader:()=>fetch('/public/services.json')
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
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
