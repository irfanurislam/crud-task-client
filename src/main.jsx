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
    loader: () =>fetch('https://new-coffe-server.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader:({params}) => fetch(`https://new-coffe-server.vercel.app/coffee/${params.id}`)
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
