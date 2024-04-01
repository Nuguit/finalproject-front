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
      direction={{ base: "column", md: "row" }}
      padding={{ base: "20px", md: "34px 80px" }}
      backgroundColor={"#308c67"}
      color={"white"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap="4">
        <Image src={SafeWalkNavbar} width={{ base: "200px", md: "300px" }} height="60px" alt="SafeWalk Navbar" />
        {NAVIGATION_LINK.map(({ link, text }) => (
          <NavigationLink to={link} key={text}>
            <Text>{text}</Text>
          </NavigationLink>
        ))}
      </Flex>

      <Flex alignItems="center" gap="15px"> {/* Alinea los elementos horizontalmente con espacio de 15px entre ellos */}
        <Flex>
          <ImageUploader />
        </Flex>

        <Box>
          <Link to="/">
            <Image
              borderRadius="full"
              boxSize={{ base: "50px", md: "100px" }}
              src={off}
              alt="Cerrar sesión"
              onClick={logout}
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default LoggedNavbar
