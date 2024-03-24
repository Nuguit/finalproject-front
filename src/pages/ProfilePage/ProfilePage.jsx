import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Text, Box, Flex, Modal } from "@chakra-ui/react"
import LoggedNavbar from "../../components/Navbar/LoggedNavBar/LoggedNavBar"
import ProfilePagePicture from "./ProfilePagePicture.jpg"
import Footer from "../../components/Footer/Footer"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import CustomForm from "../../components/CustomForm/CustomForm"
import SafeMapService from "../../services/profile.service"
import PenEditIcon from "../../components/PenEditIcon/PenEditIcon"


const ProfilePage = ({}) => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [editProfileData, setEditProfileData] = useState({});
     

  if (!user) {
    return <div>¡Vaya! Parece que no estás logueado. ¡Debes iniciar sesión para ver tu perfil!</div>; 
  }

  const { username, email, avatar } = user || {};

  const onOpen = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfileData({ ...editProfileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const updatedProfile = await SafeMapService.editProfile(user._id, editProfileData);
      console.log("Perfil actualizado:", updatedProfile);
      setShowModal(false);
    
    } catch (error){console.error("Error al editar tu perfil", error)}
  };

const PROFILE_OPTIONS = [
  "Username",
  "avatar", 
  "email"]



  return (
    <PageWrapper>
      <LoggedNavbar />
      <Flex alignItems="center" justifyContent="center" flexDirection="column" marginTop="20px">
        <Box
          as="img"
          src={avatar}
          borderRadius="full"
          boxSize="50px"
          alt="Avatar"
        />
        <PenEditIcon onClick={onOpen} /> 
        <Text textAlign="center" marginBottom="10px">
          ¡Bienvenid@ de nuevo!
        </Text>
        <Text textAlign="center" marginBottom="10px">
          ¿Qué te apetece hacer hoy?
        </Text>
        <Text textAlign="center" marginBottom="10px">
          Ir al Safemap
        </Text>
        <Text textAlign="center" marginBottom="10px">
          Ver tus contribuciones
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
        
        {showModal && (
          <Modal isOpen={showModal} onClose={()=> setShowModal(false) }>
            <CustomForm
            options={PROFILE_OPTIONS}
            onChange={handleChange}
            onSubmit={handleSubmit}
            title={"Edita tu perfil"}
          />


          </Modal>
        )}



        </Flex>
        
      <Footer />
    </PageWrapper>
  )
}

export default ProfilePage