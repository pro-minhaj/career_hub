import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componets/Home/Home.jsx';
import Statistics from './Componets/Statistics/Statistics.jsx';
import Applied from './Componets/Applied-Jobs/Applied.jsx';
import Job_Details from './Componets/Job-Details/Job_Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "job/:jobDetails",
        element: <Job_Details></Job_Details>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied",
        element: <Applied></Applied>
      },
      {
        path: "/*",
        element: <div className='text-center font-medium text-4xl my-8'><h1>404 Page Not Found</h1></div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
