import React from "react"

import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import NavbarLogic from "../components/Navbar/NavbarLogic"
import { AuthProvider,  } from "../contexts/AuthContext" 


const Layout = () => {
  
  return (
    <AuthProvider>

      <NavbarLogic/>
      <Outlet />
      <Footer />
    </AuthProvider>
  )
}

export default Layout
