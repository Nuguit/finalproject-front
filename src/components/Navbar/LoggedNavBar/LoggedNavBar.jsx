import { Flex, Text } from "@chakra-ui/layout"
import { useLocation } from "react-router-dom"
import CustomLink from "../../CustomLink/CustomLink"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Image, flexbox } from '@chakra-ui/react'
import icono from "../../../utils/icono.jpg"
import NavigationLink from "../../NavigationLink/NavigationLink"
import SafeWalkNavbar from "./SafeWalkNavbar.png"
import off from "./off.png"
import { Link } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import deleteuserpic from "../../../utils/deleteuserpic.png"


const LoggedNavbar = () => {
  
  const { user, logout, deleteUser } = useContext(AuthContext)
  const username = user?.username;
  const NAVIGATION_LINK = [
    {
      link: "/tuperfil",
      text: user ? `¡Hola, ${user.user.username}!` : "¡Hola!"
      
    },
    
    
  ]
  const location = useLocation()

  return (

    (
      <Flex
        padding={"34px 80px"}
        justifycontent={"space-between"}
        alignItems="center"
        backgroundColor={"#308c67"}
        color={"white"}
      >
        <Image justifycontent={"left"} src={SafeWalkNavbar} width={"300px"} height={"50px"} alt="SafeWalk Navbar" />
    
        <Flex gap={"34px"}>
          {NAVIGATION_LINK.map(({ link, text }) => {
            const isActiveLink = location.pathname === link;
            return (
              <NavigationLink alignItems="center" 
                to={link}
                key={text}
              >
                <Text>{text}</Text>
              </NavigationLink>
            );
          })}
    
          <Box width="200px" height="60px" display="flex" alignItems="center"> 
            <Link to="/">
              <Image
                borderRadius="full"
                boxSize="100px"
                src={off}
                alt="Cerrar sesión"
                onClick={logout}
              />
            </Link>
          </Box>
        </Flex>
    
        




        <Flex>        
          <CustomLink to="/">
            <Image
              borderRadius="full"
              boxSize="50px"
              src={icono}
              alt="SafeWalk"
            />
          </CustomLink>
        </Flex>
      </Flex>
    ))}
      
  

      export default LoggedNavbar