import { Flex, Text, Image, Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import NavigationLink from "../../NavigationLink/NavigationLink"
import off from "./off.png"
import icono from "../../../utils/icono.jpg"
import SafeWalkNavbar from "./SafeWalkNavbar.png"
import { Link } from "react-router-dom"
import CustomLink from "../../CustomLink/CustomLink"
import ImageUploader from "./imageUploader"



const LoggedNavbar = () => {
  const { user, logout } = useContext(AuthContext)
  const username = user?.username;
  const NAVIGATION_LINK = [
    {
      link: "/tuperfil",
      text: user ? `¡Hola, ${user.user.username}!` : "¡Hola!"
    }
  ]
  const location = useLocation()

  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Columna en dispositivos móviles, fila en dispositivos medianos y grandes
      padding={{ base: "20px", md: "34px 80px" }} // Menos relleno en dispositivos móviles
      backgroundColor={"#308c67"}
      color={"white"}
      alignItems="center" // Alinea los elementos verticalmente
      justifyContent="space-between" // Espacio uniforme entre los elementos
    >
      <Flex alignItems="center" gap="4">
        <Image src={SafeWalkNavbar} width={{ base: "200px", md: "300px" }} height="50px" alt="SafeWalk Navbar" />
        {NAVIGATION_LINK.map(({ link, text }) => (
          <NavigationLink to={link} key={text}>
            <Text>{text}</Text>
          </NavigationLink>
        ))}
      </Flex>

      <Box>
        <Link to="/">
          <Image
            borderRadius="full"
            boxSize={{ base: "50px", md: "100px" }} // Tamaño más pequeño en dispositivos móviles
            src={off}
            alt="Cerrar sesión"
            onClick={logout}
          />
        </Link>
      </Box>

      <Flex>
        
          <ImageUploader/>
        
      </Flex>
    </Flex>
  )
}

export default LoggedNavbar