import React from 'react'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portofolio from './Component/Portofolio/Portofolio'
import Contact from './Component/Contact/Contact'
import Layout from './Component/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



export default function App() {

  let routers = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'portofolio', element:<Portofolio/>},
    {path:'contact', element:<Contact/>}
  ]}]);
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
