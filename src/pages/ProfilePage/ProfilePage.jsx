import { Text, Flex } from "@chakra-ui/react"
import ModalLogic from "../../components/Modal/ModalLogic"
import { Link } from "react-router-dom"
import DeleteUserButton from "../../components/DeleteUser/DeleteUser"
import ImageUploader from "../../components/Navbar/LoggedNavBar/imageUploader"

const ProfilePage = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginTop="20px"
        minHeight="calc(65vh - 20px)"
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
    </>
  );
};

export default ProfilePage;



