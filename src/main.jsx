import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Error from './components/Error';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import AllTourSpot from './components/AllTourSpot';
import AddTourSpot from './components/AddTourSpot';
import MyList from './components/MyList';
import ViewDetails from './components/ViewDetails';
import PrivateRoute from './components/PrivateRoute';
import Update from './components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tourism-management-server-pi.vercel.app/add')
      },
      {
        path: '/login',
        element: <LoginForm></LoginForm>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allSpot',
        element: <AllTourSpot></AllTourSpot>,
        loader: () => fetch('https://tourism-management-server-pi.vercel.app/add')
      },
      {
        path: '/addSpot',
        element: <PrivateRoute><AddTourSpot></AddTourSpot></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://tourism-management-server-pi.vercel.app/add')
      },
      {
        path: '/tourist/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('https://tourism-management-server-pi.vercel.app/add')
      },
      {
        path: '/allTourist/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('https://tourism-management-server-pi.vercel.app/add')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://tourism-management-server-pi.vercel.app/add/${params.id}`)
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
