import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>fetch('http://localhost:5000/coffee')
  },
  {
    path: "/viewcoffee/:id",
    element: <ViewCoffee />,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
