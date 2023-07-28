import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage.jsx';
import BlogPage from './pages/BlogPage/BlogPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      },
      {
        path:"/home",
        element:<HomePage></HomePage>
      },
      {
        path:"/blogs",
        element:<BlogPage></BlogPage>
      },
      {
        path:"/contact",
        element:<ContactPage></ContactPage>
      },
      {
        path:"/our-product",
        element:<ProductPage></ProductPage>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-center" />
   <RouterProvider router={router} />
  </React.StrictMode>,
)
