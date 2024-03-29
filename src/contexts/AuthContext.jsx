import React, { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"
import { useNavigate } from "react-router-dom"
import SafeMapService from "../services/profile.service"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const setToken = (token) => {
    localStorage.setItem("token", token);
    }
  
  const getToken = () => {
    return localStorage.getItem("token")
  }

  const getUser = async () => {
    try {
      const token = getToken();
      console.log("Token recuperado:", token); 
      if (token) {
        const loggedUser = await authService.getUser(token);
        setUser(loggedUser);
      }
    } catch (error) {
      console.log("Error al recuperar el usuario:", error);
    } finally {
      setIsLoading(false);
    } 

  
  }
  
  const deleteUser = async () => {
    try {
      await authService.deleteUser(); 
      localStorage.removeItem("token");
      setUser(null);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };
   

  const logout = (e) => {
    if (e) e.preventDefault()
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }

  const login = async (userData) => {
    try {
      const { token } = await authService.login(userData)
      setToken(token);
      console.log("Token establecido en localStorage:", token);
      await getUser()
      navigate("/tuperfil")
    } catch (error) {
      console.log("ERROR", error)
    }
  };
  

  useEffect(() => {
    getUser()
  }, [])

  

  return (
    <AuthContext.Provider value={{ user,setUser, logout, login, isLoading, deleteUser }}>
      {children}
    </AuthContext.Provider>
  )
}
