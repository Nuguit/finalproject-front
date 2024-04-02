import React, { useState, useEffect , useContext } from 'react';
import SafeMapService from '../../services/profile.service';
import { Flex , Text } from '@chakra-ui/react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import WarningsList from './WarningList';

function ContributionsComponent() {
  const [warnings, setWarnings] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user?.user?._id;
  useEffect(() => {
    const fetchWarnings = async () => {
      try {
        const token = localStorage.getItem("token")
        const warningsData = await SafeMapService.contributions(userId, token);
        setWarnings(warningsData);
        } catch (error) {
        console.error('Error al obtener las contribuciones:', error);
      }
    };

    fetchWarnings();
  }, []);

  return (
    <Flex paddingTop="10px" paddingBottom="150px" justifyContent="center">
      <div>
       {warnings.length > 0 ? (
          <WarningsList warnings={warnings}/>
        ) : (
          <Flex flexDirection="column" alignItems="center" paddingTop="50px">
            <Text textAlign="center">¡Vaya! Aún no hay nada por aquí.</Text>
            <Link to="/safemap">
              <Text color="#308c67">¿Quieres añadir tu primer aviso?</Text>
            </Link>
          </Flex>
        )}
      </div>
    </Flex>
  );
}

export default ContributionsComponent;