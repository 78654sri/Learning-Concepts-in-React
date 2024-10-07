// import Hello from './components/Ternary';
// import {TableData} from './components/tables,list/Table'; 

// import { Heading1, Heading2, Heading3 } from './components/headings/Heading';
import React from 'react';
import ErrorPage from './components/error page/ErrorPage';
import About from "./components/About/About";
import Contact from './components/contact us/Contact';
import Head from "./components/Header/Head";
import Menu from './components/RestraMenu/Menu';
import { Body } from "./components/BODY/Body";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Head />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/about",
        element: <About />, 
      },
      {
        path: "/contact",
        element: <Contact />, 
      },
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/restaurants/:id",
        element:<Menu />
      }

    ],
    errorElement:<ErrorPage /> 
  },

]);


export default function AppWithRouter() {
  return <RouterProvider router={appRouter} />;
}


