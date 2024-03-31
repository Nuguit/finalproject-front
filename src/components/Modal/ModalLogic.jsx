import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SafeMapService from '../../services/profile.service';
import ModalEdi from './Modal';
import CustomForm from '../CustomForm/CustomForm';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import { getProfileDetails } from '../../utils';
import { useToast } from '@chakra-ui/react';
import UploaderImage from '../Navbar/LoggedNavBar/imageUploader';

const ModalLogic = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [editProfileData, setEditProfileData] = useState({
    username: '',
    password: '',
    email: '',
    avatar: ''
  });
  const toast = useToast();
  const userId = user?.user?._id;

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfileData({ ...editProfileData, [name]: value });
  };

  const handleAvatarChange = (file) => {
    // Convierte la imagen en base64 y guárdala en el estado editProfileData
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditProfileData({ ...editProfileData, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const updatedProfile = await SafeMapService.editProfile(userId, token, editProfileData);
        setShowModal(false);
        setUser(updatedProfile);
        toast({
          title: '¡Perfil actualizado!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        console.error('Token de autenticación no encontrado.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast({
          title: 'Error de autorización',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
        console.error('Error al editar perfil:', error);
        toast({
          title: 'Error al editar perfil',
          description: 'Ha ocurrido un error. Por favor, intenta nuevamente.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const PROFILE_DETAILS = getProfileDetails(user.username, user.password, user.email, user.avatar);
  const PROFILE_OPTIONS = ['username', 'password', 'email', 'avatar'];

  return (
    <div>
      <ProfileDetails onOpen={() => setShowModal(true)} profileDetails={PROFILE_DETAILS} />
      {showModal && (
        <ModalEdi isOpen={showModal} onClose={() => setShowModal(false)}>
          <CustomForm options={PROFILE_OPTIONS} onChange={handleChange} onSubmit={handleSubmit} title={'Edita tu perfil'}>
            <UploaderImage onChange={handleAvatarChange} />
          </CustomForm>
        </ModalEdi>
      )}
    </div>
  );
};

export default ModalLogic;