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
      if (token) {
        const loggedUser = await authService.getUser(token);
        setUser(loggedUser);
      }
    } catch (error) {
      } finally {
      setIsLoading(false);
    } }
    
   
    const createWarning = async (warningdata) => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await SafeMapService.createWarning(token, warningdata); 
        return response;
      } catch (error) {
        console.error('Error al crear advertencia:', error);
        throw error;
      }}


      const contributions = async()=> {
        try{
          const token = getToken();
          const response = await SafeMapService.contributions(user._id, token);
          return response;
        }catch (error) {
          console.error("Error al recuperar contribuciones:", error);
          throw error;
        }
      };
      


  const deleteUser = async () => {
    try {
      await authService.deleteUser(); 
      localStorage.removeItem("token");
      setUser(null);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };
  
  const editProfile = async () => {
    try {
      const token = getToken();
      const updatedUser = await SafeMapService.editProfile(user._id, token);
      setUser(updatedUser);
    } catch (error) {
      console.error('Error al editar perfil:', error);
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
      await getUser()
      navigate("/tuperfil")
    } catch (error) {
    }}
    
    
    
    useEffect(() => {
      getUser()
    }, [])
    
  

  return (
    <AuthContext.Provider value={{ user,setUser, contributions, editProfile, logout, login, isLoading, createWarning, deleteUser }}>
      {children}
    </AuthContext.Provider>
  )
}
