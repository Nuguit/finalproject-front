import React, { useContext } from "react"
import { Text, Flex } from "@chakra-ui/react"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import ModalLogic from "../../components/Modal/ModalLogic"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import DeleteUserButton from "../../components/DeleteUser/DeleteUser"
import ImageUploader from "../../components/Navbar/LoggedNavBar/imageUploader"

const ProfilePage = ({ }) => {
  const { user } = useContext(AuthContext)

  return (
    <PageWrapper>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginTop="20px"
        minHeight="calc(100vh - 20px)"
      >
        <ImageUploader />
        <ModalLogic />
        <Text textAlign="center" marginBottom="10px" fontSize="60px">
          ¡Bienvenid@ de nuevo!
        </Text>
        <Text textAlign="center" marginBottom="10px" fontSize="30px">
          ¿Qué te apetece hacer hoy?
        </Text>
        <Text textAlign="center" marginBottom="10px" fontSize="15px">
          <Link to="/safemap">Ir al Safemap</Link>
        </Text>
        <Text textAlign="center" marginBottom="10px" fontSize="15px">
          <Link to="/contribuciones">Ver tus contribuciones</Link>
        </Text>
        <DeleteUserButton />
      </Flex>
    </PageWrapper>
  );
};

export default ProfilePage;



