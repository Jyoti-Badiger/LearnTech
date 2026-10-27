import React from 'react'
import NavbarContainer from '../Navbar/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
   <section>
    <Toaster/>
    <NavbarContainer/>
    <Outlet/>
   </section>
  )
}

export default Layout