import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { createBrowserRouter,RouterProvider,BrowserRouter as Router } from "react-router-dom";

import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
const routerPaths1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },{
    path: "/Register",
    element: <Signup />,
  },
  {
    path:"/about",
    element:<About></About>
  }
  
]);

function App() {
  return <RouterProvider router={routerPaths1} />;
}
export default App;