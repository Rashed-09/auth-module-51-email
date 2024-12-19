import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Root from './components/Root'
import ErrorPage from './components/ErrorPage'
import AuthProvider from './provider/AuthProvider'
import Order from './components/Order'
import PrivetRout from './privet/PrivetRout'
import Profile from './components/Profile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/order",
        element: <PrivetRout><Order></Order></PrivetRout>
      },
      {
        path: "/profile",
        element: <PrivetRout><Profile></Profile></PrivetRout>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
