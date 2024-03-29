import React, { useState, useEffect } from 'react';
import SafeMapService from '../../services/profile.service';
import { Flex , Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ContributionsComponent() {
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    const fetchWarnings = async () => {
      try {
        const warningsData = await SafeMapService.contributions();
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
    <Flex paddingTop="150px" paddingBottom="150px" display="flex" justifyContent="center" >
    <div >
      <p style={{ fontSize: '50px' }}>Aquí están tus contribuciones:</p>
      {warnings.length > 0 ? (
        <ol style={{ paddingTop: '150px', paddingBottom: '150px', fontSize: '25px', display: 'flex', justifyContent: 'center' }}>
          {warnings.map((warning, index) => (
            <li key={index}>
              <p> {warning.input}</p>
              <p>Coordenadas: {warning.location.coordinates.join(', ')}</p>
              </li>
          ))}
        </ol>
      ) : (
        <>
          <Text>¡Vaya! Aún no hay nada por aquí.</Text>
          <Link to="/safemap">
            <Text color="#308c67">¿Quieres añadir tu primer aviso?</Text>
          </Link>
        </>
      )}
    </div></Flex>
  );
}
export default ContributionsComponent;