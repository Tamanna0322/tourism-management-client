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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/add')
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
        element: <AllTourSpot></AllTourSpot>
      },
      {
        path: '/addSpot',
        element: <AddTourSpot></AddTourSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
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
