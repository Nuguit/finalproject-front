import { Flex, Text } from "@chakra-ui/layout"
import { useLocation } from "react-router-dom"
import { Image } from '@chakra-ui/react'
import icono from "./icono.png"
import CustomLink from "../../CustomLink/CustomLink"
import NavigationLink from "../../NavigationLink/NavigationLink"
import { AuthContext } from "../../contexts/AuthContext"




const Navbar = () => {
  const NAVIGATION_LINK = [
    {
      link: "/signup",
      text: "Regístrate",
      
    },
    { link: "/login", text: "Inicia sesión" },
    { link: "/comofunciona", text: "¿Cómo funciona?" },
  ]

  const location = useLocation()

  return (

    <Flex
      padding={"34px 80px"}
      justifyContent={"space-between"}
      alignItems={"right"}
      backgroundColor={"#ff4f5a"}
      color={"white"}
    >
      <Flex gap={"34px"}>
        {NAVIGATION_LINK.map(({ link, text }) => {
          const isActiveLink = location.pathname === link
          return (
            <NavigationLink
              to={link}
              key={text}
              textDecoration={isActiveLink ? "underline" : "none"}
              
            >
              <Text>{text}</Text>
            </NavigationLink>
          )
        })}
      </Flex>
      <Flex>        
            <CustomLink to="/">
              <Image
                borderRadius='full'
                boxSize='50px'
                src={icono}
                alt='SafeWalk'></Image></CustomLink></Flex></Flex>

         
          )}
      
      
  

      export default Navbar