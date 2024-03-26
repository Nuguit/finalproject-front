import { Text, Box, Flex, Modal } from "@chakra-ui/react"
import ProfilePagePicture from "./ProfilePagePicture.jpg"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import ModalLogic from "../../components/Modal/ModalLogic"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const ProfilePage = ({ }) => {


  const user  = useContext(AuthContext);


  if (!user) {
    return <div>¡Vaya! Parece que no estás logueado. ¡Debes iniciar sesión para ver tu perfil!</div>;
  }

  const { username, email, avatar } = user || {};





  return (
    <PageWrapper>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" marginTop="20px">
        <Box
          as="img"
          src={avatar}
          borderRadius="full"
          boxSize="50px"
          alt="Avatar"
        />
        <ModalLogic />
        <Text textAlign="center" marginBottom="10px">
          ¡Bienvenid@ de nuevo!
        </Text>
        <Text textAlign="center" marginBottom="10px">
          ¿Qué te apetece hacer hoy?
        </Text>
        <Text textAlign="center" marginBottom="10px">
          <Link to="/safemap">Ir al Safemap</Link>
        </Text>
        <Text textAlign="center" marginBottom="10px">
          <Link to="/contribuciones">Ver tus contribuciones</Link>
        </Text>
        <Box
          as="img"
          src={ProfilePagePicture}
          alt="Profile Picture"
          width="100%"
          maxWidth="400px"
          height="auto"
          marginTop="20px"
        />



      </Flex>
    </PageWrapper>
  )
}

export default ProfilePage
