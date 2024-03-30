import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import SafeMapService from '../../services/profile.service';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';



const DeleteUserButton = () => {
  const { user, setUser } = useContext(AuthContext); 
  const userId = user?.user?._id;
  const toast = useToast();
  const navigate = useNavigate();



  
const handleDeleteUser = async () => {
  try {
    const token = localStorage.getItem("token"); 
    await SafeMapService.deleteUser(userId, token);
    localStorage.removeItem("token");
    setUser(null);
    toast({
      title: "Tu cuenta ha sido borrada.",
      description: "¡Vuelve cuando quieras!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
  }
};
      






  return (
    <Button onClick={handleDeleteUser}>Eliminar usuario</Button>
  );
};

export default DeleteUserButton;