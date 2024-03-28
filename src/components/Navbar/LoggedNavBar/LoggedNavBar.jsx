import { Flex, Text } from "@chakra-ui/layout"
import { useLocation } from "react-router-dom"
import CustomLink from "../../CustomLink/CustomLink"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Image, flexbox } from '@chakra-ui/react'
import icono from "./../MainNavbar/icono.png"
import NavigationLink from "../../NavigationLink/NavigationLink"
import SafeWalkNavbar from "./SafeWalkNavbar.png"
import off from "./off.png"
import { Link } from "react-router-dom"
import { Box } from "@chakra-ui/react"

const LoggedNavbar = () => {
  
    const { user, logout } = useContext(AuthContext)
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
        justifyContent={"space-between"}
        alignItems="center"
        backgroundColor={"#ff4f5a"}
        color={"white"}
      >
        <img justifyContent={"left"} src={SafeWalkNavbar} width={"300px"} height={"50px"} alt="SafeWalk Navbar" />
    
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
                alt="SafeWalk"
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