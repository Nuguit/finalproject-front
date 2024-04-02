import React from 'react';
import SafeMapTitle from "../../components/SafeMap/SafeMapTitle.png";
import { Text, Box, Flex } from '@chakra-ui/react';
import Formulario from '../../components/SafeMap/Form/SafeMapForm';
import MyMap from '../../components/SafeMap/SafeMap';

const SafeMapPage = () => {
  return (
    <Flex direction="column" alignItems="flex-start" minHeight="1000px" margin="0 auto">
      <Flex width="100%" justifyContent="center" >
        <img src={SafeMapTitle} alt="SafeMap Title"  style={{ width: '70%', marginTop:'30px'  }} />
      </Flex>
      <Text
        width="100%"
        paddingTop="100px"
        paddingBottom="100px"
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight="400"
        fontStyle="bold"
        textAlign="center"
      >
        Bienvenid@ al SafeMap. Clica en la zona del mapa donde quieras introducir alguna información valiosa para hacer el camino de tod@s más seguro.
      </Text>
      <Box width="100%" margin="0 auto" alignSelf="flex-end">
        <MyMap
          markers={[{ lat: 40.4165000, lng: -3.7025600 }]}
          width="100%"
          height="800px"
        />
      </Box>
    </Flex>
  );
};

export default SafeMapPage;

   

         
    

