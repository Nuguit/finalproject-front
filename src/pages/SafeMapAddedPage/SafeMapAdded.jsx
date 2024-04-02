import React from 'react'
import SafeMapTitle from "../../components/SafeMap/SafeMapTitle.png"
import { Text, Box, Flex, Image } from '@chakra-ui/react'
import TurnMainPage from '../../components/Buttons/SafeMapAddedPage/TurnMainPage'
import TurnSafeMap from '../../components/Buttons/SafeMapAddedPage/TurnSafeMap'
import SafeMapAddedPicture from "./SafeMapAddedPicture.jpg"
import { Link } from 'react-router-dom'



const SafeMapAdded = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Box width={{ base: '60%', md: '40%' }} textAlign="center" paddingTop="10px">
        <Image src={SafeMapTitle} />
      </Box>

      <Flex textAlign="center" justifyContent="center">
        <Text paddingTop="50px" fontSize={{ base: '30px', md: '40px' }}>
          ¡Gracias! <br />
          Tu aviso ha sido añadido al SafeMap con éxito.
        </Text>
      </Flex>

      <Text paddingTop="50px" textAlign="center" fontSize={{ base: '30px', md: '40px' }}>
        ¿Qué te apetece hacer ahora?
      </Text>

      <Flex justifyContent="center" paddingBottom="100px">
        <Link to="/">
          <TurnMainPage />
        </Link>
        <Box width="50px" />
        <Link to="/safemap">
          <TurnSafeMap />
        </Link>
      </Flex>

      <Image src={SafeMapAddedPicture} maxWidth="40%" />
    </Flex>
  );
};

export default SafeMapAdded;