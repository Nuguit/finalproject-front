import React from "react"

import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import NavbarLogic from "../components/Navbar/NavbarLogic"
import { AuthProvider, AuthContext } from "../contexts/AuthContext" // Asegúrate de importar AuthProvider y AuthContext desde el archivo correcto


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
