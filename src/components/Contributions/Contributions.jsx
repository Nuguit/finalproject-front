import React, { useState, useEffect , useContext } from 'react';
import SafeMapService from '../../services/profile.service';
import { Flex , Text } from '@chakra-ui/react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


function ContributionsComponent() {
  const [warnings, setWarnings] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const userId = user?.user?._id;
  useEffect(() => {
    const fetchWarnings = async () => {
      try {
        const token = localStorage.getItem("token")
        const warningsData = await SafeMapService.contributions(userId, token);
        console.log("WARNINGSOWNER", warningsData)
        setWarnings(warningsData);
        console.log("WARNINGSDATA", warningsData)
      } catch (error) {
        console.error('Error al obtener las contribuciones:', error);
      }
    };

    fetchWarnings();
  }, []);

  return (
    <Flex paddingTop="10px" paddingBottom="150px" justifyContent="center">
      <div>
        <p style={{ fontSize: '50px', textAlign: 'center' }}>Aquí están tus contribuciones:</p>
        {warnings.length > 0 ? (
          <ol style={{ flexDirection: "column", paddingTop: '50px', paddingBottom: '50px', fontSize: '25px', display: 'flex', justifyContent: 'center' }}>
            {warnings.map((warning, index) => (
              <li key={index}>
                <p> {warning.input}</p>
                <p>Coordenadas: {warning.location.coordinates.join(', ')}</p>
              </li>
            ))}
          </ol>
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