import { Flex, Text } from "@chakra-ui/layout"
import { useLocation } from "react-router-dom"
import CustomLink from "../../CustomLink/CustomLink"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Image } from '@chakra-ui/react'
import icono from "./../MainNavbar/icono.png"
import NavigationLink from "../../NavigationLink/NavigationLink"
import SafeWalkNavbar from "./SafeWalkNavbar.png"
import SafeMapPage from "../../../pages/SafeMapPage/SafeMapPage"

const LoggedNavbar = () => {
  
  
  
  
  
    const { user, logout } = useContext(AuthContext)
  const NAVIGATION_LINK = [
    {
      link: "/tuperfil",
      text: `¡Hola, ${user ? user.username : 'invitado'}!`,
      
    },
    
    
  ]

  const location = useLocation()

  return (

    <Flex
      padding={"34px 80px"}
      justifyContent={"right"}
      alignItems={"right"}
      backgroundColor={"#ff4f5a"}
      color={"white"}
    >

    <img src={SafeWalkNavbar} width={"300px"} height={"50px"}></img>


      <Flex gap={"34px"}>
        {NAVIGATION_LINK.map(({ link, text }) => {
          const isActiveLink = location.pathname === link
          return (
            <NavigationLink
              to={link}
              key={text}
                            
            >
              <Text>{text}</Text>
            </NavigationLink>
          )
        })}
        <a href="/" onClick={logout}>Chao pescao</a>
      </Flex>
      <Flex>        
            <CustomLink to="/">
              <Image
                borderRadius='full'
                boxSize='50px'
                src={icono}
                alt='SafeWalk'></Image></CustomLink></Flex></Flex>

         
          )}
      
      
  

      export default LoggedNavbar