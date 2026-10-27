import React from 'react'
import './Style.css';
import NavbarContainer from './Navbar/NavbarContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Login from "./Pages/Login";
import Register from "./Pages/Registration";
import Layout from './Pages/Layout'
import AuthContext from './Context/AuthContext'
import AllCourse from './Pages/AllCourse'
import CreateCourse from './Pages/CreateCourse'

const App = () => {
  let routes = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
    {
      path:"/",
      element:<Home/>,
      children:[{
        path:"/allcourse",
        element:<AllCourse/>
      },
    {
      path:"/createcourse",
      element:<CreateCourse/>
    }]
    },{
      path:"/login",
      element:<Login/>
    },{
      path:"/register",
      element: <Register/>
    }
      ]
    }
  ])

  return (
 <AuthContext>
    <RouterProvider router={routes}/>
 </AuthContext>

  
  )
}

export default App