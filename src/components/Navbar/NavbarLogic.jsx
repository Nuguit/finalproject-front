import React, { useContext } from 'react'
import Navbar from './MainNavbar/Navbar'
import LoggedNavbar from './LoggedNavBar/LoggedNavBar'
import { AuthContext } from '../contexts/AuthContext'




const NavbarLogic = () => {
   const user = useContext(AuthContext) 
  return (
    user ? <LoggedNavbar /> : <Navbar />

  )
}

export default NavbarLogic