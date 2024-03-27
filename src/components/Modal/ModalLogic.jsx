import React from 'react'
import PenEditIcon from '../PenEditIcon/PenEditIcon';
import ModalEdi from './Modal';
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import SafeMapService from "../../services/profile.service"
import CustomForm from '../CustomForm/CustomForm';



const ModalLogic = () => {
    const { user , setUser } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [editProfileData, setEditProfileData] = useState({username: "",
    avatar:"", 
    email:""});
    const [error, setError] = useState(null);
    
const handleIconClick = () => {
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
      if (updatedProfile) {
        
        setUser(updatedProfile);
        
        setShowModal(false);
      } else {
        setError("La solicitud para editar el perfil no fue exitosa.");
      }
    } catch (error) {
      console.error("Error al editar tu perfil", error);
      setError("Error al editar tu perfil. Por favor, inténtalo más tarde.")
    }
  };
  const PROFILE_OPTIONS = [
    "username",
    "avatar", 
    "email"
  ];

    return (
        <div>
<PenEditIcon onClick={handleIconClick} />
{showModal && (
        <ModalEdi isOpen={showModal} onClose={() => setShowModal(false)}>
            <CustomForm
  options={PROFILE_OPTIONS}
  onChange={handleChange}
  onSubmit={handleSubmit}
  title={"Edita tu perfil"}
  submitButtonLabel={"¡Hecho!"}
/>

          </ModalEdi>)}


        </div>
  )
}

export default ModalLogic