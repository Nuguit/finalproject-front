import { Flex, Text } from "@chakra-ui/react"
import LoggedNavbar from "../../components/Navbar/LoggedNavBar/LoggedNavBar"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import icono from "../../components/Navbar/MainNavbar/icono.png"
import ProfilePagePicture from "./ProfilePagePicture.jpg"
import Footer from "../../components/Footer/Footer"
import PageWrapper from "../../components/PageWrapper/PageWrapper"


const ProfilePage = () => {










  const { user } = useContext(AuthContext)
  const { username, email, avatar} = user

  

  return (
    <> 
   
    <LoggedNavbar />
    <img src={avatar} borderRadius='full' boxSize='50px' ></img>
    <Text>¡Bienvenid@ de nuevo!</Text>
    <Text>¿Qué te apetece hacer hoy?</Text>
    <Text>Ir al Safemap</Text>
    <Text>Ver tus contribuciones</Text>
    <img src={ProfilePagePicture}></img>

    <Footer />



     
  </>
  )}

export default ProfilePage
