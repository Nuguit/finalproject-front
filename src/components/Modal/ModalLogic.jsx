import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SafeMapService from '../../services/profile.service';
import ModalEdi from './Modal';
import CustomForm from '../CustomForm/CustomForm';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import { getProfileDetails } from '../../utils';
import { useDisclosure, useToast } from '@chakra-ui/react';
import UploaderImage from '../Navbar/LoggedNavBar/imageUploader';

const ModalLogic = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
  
  const ParentComponent = () => {
    const [showModal, setShowModal] = useState(false)};
  
    const handleOpenModal = () => {
      setShowModal(true)};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfileData({ ...editProfileData, [name]: value });
  };

  const handleAvatarChange = (imageUrl) => { 
    setEditProfileData({ ...editProfileData, avatar: imageUrl }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form...');
          
        const updatedProfile = await SafeMapService.editProfile(userId, editProfileData);
        setShowModal(false) 
        setUser(updatedProfile);
        toast({
          title: '¡Perfil actualizado!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      
    } catch (error) {
      console.error('Error al editar perfil:', error);
      if (error.response && error.response.status === 401) {
        toast({
          title: 'Error de autorización',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
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


  const PROFILE_DETAILS = getProfileDetails(user.user.username, user.user.password, user.user.email, user.user.avatar);
  const PROFILE_OPTIONS = ['username', 'password', 'email', 'avatar'];

  return (
    <div>
      <ProfileDetails showModal={showModal}
        onOpen={handleOpenModal} profileDetails={PROFILE_DETAILS} />
      <ModalEdi isOpen={showModal} onClose={() => setShowModal(false)} >
        <CustomForm options={PROFILE_OPTIONS} onChange={handleChange} onSubmit={handleSubmit} title={'Edita tu perfil'}>
          <UploaderImage onChange={handleAvatarChange} />
        </CustomForm>
        </ModalEdi>
    </div>
  );
};

export default ModalLogic;
