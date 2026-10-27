import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/AuthContext'

const Menu = () => {
  let {users,logout} = useContext(Context)
  console.log(data);
  
  return (
    <section>
      <ul className='flex gap-10 font-medium'>
        <NavLink to="/home">
                <li className='hover:bg-white  hover:text-black px-2 py-1 rounded'>HOME</li>
        </NavLink>
    {
      users? <>
           <NavLink to="/home">
                <li className='hover:bg-white  hover:text-black px-2 py-1 rounded'>Profile</li>
        </NavLink>
          <NavLink to="/home">
                <li Onclick={logout} className='hover:bg-white  hover:text-black px-2 py-1 rounded'>Logout</li>
        </NavLink>
      
      </>: <>
       <NavLink to="/login">
          <li className='hover:bg-white  hover:text-black px-2 py-1 rounded'>LOGIN</li>
      </NavLink>
       <NavLink to="/register">
         <li className='hover:bg-white  hover:text-black px-2 py-1 rounded'>REGISTER</li>
       </NavLink>
      </>
    }
      </ul>
    </section>
  )
}

export default Menu