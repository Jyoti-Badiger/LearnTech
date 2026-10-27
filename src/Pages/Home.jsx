import React from 'react'
import SideNav from '../SideNavigation/SideNav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <section className='flex gap-50 '>
      <SideNav/>
      <Outlet/>
    </section>
  )
}

export default Home