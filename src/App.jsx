import React, { useEffect, useState, createContext } from "react";

import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";


export const DataContext = createContext();

const App = () => {

  const Layout = () => {





    return (
      <div>
        <DataContext.Provider value = {{}}>

          <Navbar />
          <Outlet/>

        </DataContext.Provider>

      </div>
    )


  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]

    }
  ])
  return (
    <div className="">
      <RouterProvider router ={router} />

    </div>

  )
}

export default App