import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavbarContainer = () => {
  return (
   <section className='bg-black text-white flex justify-between p-3'>
    <Logo/>
    <Menu/>
   </section>
  )
}

export default NavbarContainer