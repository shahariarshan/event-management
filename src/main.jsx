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

import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute';
import Advices from './Advices/Advices';
import Achivements from './Achivements/Achivements';
import OurTeam from './Team/OurTeam';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/services.json')

      },
      {
        path: '/cards/:id',
        element: <PrivateRoute><ReadMore></ReadMore></PrivateRoute>,
        loader: () => fetch('/services.json')
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
        path: '/about',
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: '/team',
        element: <PrivateRoute><OurTeam></OurTeam></PrivateRoute>
      },
      {
        path: '/advices',
        element: <PrivateRoute><Advices></Advices></PrivateRoute>
      },
      {
        path: '/achievements',
        element: <PrivateRoute><Achivements></Achivements></PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>,
)
