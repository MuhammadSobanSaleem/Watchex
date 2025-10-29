import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from './pages/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/login", element: <Login />},
      {path: "/signup", element: <Signup />}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
