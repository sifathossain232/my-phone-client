import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './Components/Phones.jsx';
import Main from './Components/Main.jsx';
import Phone from './Components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch('https://my-phone-server-np6h.vercel.app/phones')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`https://my-phone-server-np6h.vercel.app/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
