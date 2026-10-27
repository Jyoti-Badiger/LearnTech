import React from 'react'
import { NavLink } from 'react-router-dom'

const SiddeNav = () => {
  return (
     <section className='bg-black/80 text-white w-[20vw] h-[90vh]'>
    <ul className='flex flex-col p-2 gap-3'>
       <NavLink to="/allcourse">
         <li className='hover:text-blue-200 hover:bg-black/70 p-3'>ALL COURSES</li>
       </NavLink>
     <NavLink to="/createcourse">
           <li className='hover:text-blue-200 hover:bg-black/70 p-3'>CREATE COURSE</li>
     </NavLink>
    </ul>

     </section>
  )
}

export default SiddeNav