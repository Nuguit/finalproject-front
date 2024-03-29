import React, { useState, useEffect } from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ContributionsComponent = () => {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/profile/safemap');
        if (!response.ok) {
          throw new Error('Error al obtener la ruta');
        }
        const data = await response.json();
        setRoute(data.route);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex justifycontent="center" textAlign="center">
        <Text fontSize="50px">Aquí están tus contribuciones:</Text>
      </Flex>
      <Box paddingTop="150px" paddingBottom="150px" fontSize="50px" display="flex" justifycontent="center">
        {route ? (
          <Text>Contribuciones disponibles en <a href={route}>safemap</a>.</Text>
        ) : (
            <><Text>¡Vaya! Aún no hay nada por aquí. </Text>
            <Link to="/safemap"><Text color="#ff4f5a">¿Quieres añadir tu primer aviso?</Text>
          </Link></>
        )}
      </Box>
    </Flex>
  );
};

export default ContributionsComponent;