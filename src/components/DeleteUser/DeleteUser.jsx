import React from 'react';
import SafeMapService from "../../services/profile.service";
import { Button, Input } from '@chakra-ui/react';

const DeleteUser = () => {
    
    const handleDeleteUser = async () => {
        console.log("soy un boton")
        try {
            const safeMapService = new SafeMapService();
            await safeMapService.deleteUser(); 
            console.log('Usuario eliminado exitosamente');
            window.location.href = '/'; 
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            
        }
    };

    return (
        <>
            
            <Button onClick={handleDeleteUser}>Darme de baja</Button>
        </>
    );
};

export default DeleteUser;