import { Flex, Text } from "@chakra-ui/layout"
import { useLocation } from "react-router-dom"
import { Image } from '@chakra-ui/react'
import icono from "../../../utils/icono.jpg"
import CustomLink from "../../CustomLink/CustomLink"
import NavigationLink from "../../NavigationLink/NavigationLink"





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
    direction={{ base: "column", md: "row" }} 
    padding={{ base: "20px", md: "34px 80px" }} 
    backgroundColor={"#308c67"}
    color={"white"}
    alignItems="center" // Alinea los elementos verticalmente
    justifyContent="space-between"
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
                alt='SafeWalk'
                title="Página principal"></Image></CustomLink></Flex></Flex>

         
          )}
      
      
  

      export default Navbar