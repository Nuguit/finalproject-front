import React, { useContext, useState } from 'react';
import PenEditIcon from '../PenEditIcon/PenEditIcon';
import ModalEdi from './Modal';
import { AuthContext } from "../../contexts/AuthContext";
import SafeMapService from "../../services/profile.service";
import CustomForm from '../CustomForm/CustomForm';
import { getProfileDetails } from '../../utils';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import { useToast } from '@chakra-ui/react';

const ModalLogic = () => {
    const { user, setUser } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [editProfileData, setEditProfileData] = useState({
      username: "",
      password: "",
      email: ""
    });
  
    
    const { username, password, email } = user;
    const PROFILE_DETAILS = getProfileDetails(username, password, email);
    const toast = useToast();
    const userId = user?.user?._id;
    const handleIconClick = () => {
        setShowModal(true);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Datos", name, value);
        setEditProfileData({ ...editProfileData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            console.log("Token de autenticación:", token);
            console.log("USER", userId)
          if (token) {
              
              
              
              console.log("Datos de perfil a editar:", editProfileData);
              const updatedProfile = await SafeMapService.editProfile(userId, token, editProfileData);
              console.log("SUPUESTO FALLO", userId)
             console.log("Perfil actualizado:", updatedProfile); // Agrega este log para verificar la respuesta
            setShowModal(false);
            setUser(updatedProfile);
            toast({
              title: "¡Perfil actualizado!",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          } else {
            console.error("Token de autenticación no encontrado.");
          }
        } catch (error) {
          // Manejar el error de autorización
          if (error.response && error.response.status === 401) {
            console.error("Error de autorización:", error.response.data.message);
            // Mostrar un mensaje de error al usuario
            toast({
              title: "Error de autorización",
              description: error.response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          } else {
            console.error("Error al editar perfil:", error);
            // Mostrar un mensaje de error genérico al usuario
            toast({
              title: "Error al editar perfil",
              description: "Ha ocurrido un error. Por favor, intenta nuevamente.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }
      };
  
    const PROFILE_OPTIONS = ["username", "password", "email"];
  
    return (
      <div>
        <ProfileDetails
          onOpen={() => setShowModal(true)}
          profileDetails={PROFILE_DETAILS}
        />
        {showModal && (
          <ModalEdi isOpen={showModal} onClose={() => setShowModal(false)}>
            <CustomForm
              options={PROFILE_OPTIONS}
              onChange={handleChange}
              onSubmit={handleSubmit}
              title={"Edita tu perfil"}
            />
          </ModalEdi>
        )}
      </div>
    );
  }
  
  export default ModalLogic;
