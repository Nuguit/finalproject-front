import React from 'react'
import icono from "../../utils/icono.jpg"
import { Image, Text, Box, Flex } from '@chakra-ui/react'
import CustomLink from '../../components/CustomLink/CustomLink'
import { Link } from 'react-router-dom'
import ContributionsKittie from "./ContributionsKittie/ContributionsKittie.png"
import ContributionsComponent from '../../components/Contributions/Contributions'



export const ContributionPage = () => {
  return (
    <div>
      <Flex justifyContent="center" paddingTop={{ base: '20px', md: '50px' }}>
        <CustomLink to="/">
          <Image
            borderRadius='full'
            boxSize={{ base: '80px', md: '100px' }}
            src={icono}
            alt='SafeWalk'
          />
        </CustomLink>
      </Flex>

      <ContributionsComponent />

      <Box paddingTop="10px" paddingBottom="5px" fontSize={{ base: '20px', md: '30px' }} display="flex" justifyContent="center">
        <Text>
          ¡Gracias por formar parte de la comunidad SafeWalk! Tu ayuda es imprescindible ❤
        </Text>
      </Box>

      <Box display="flex" justifyContent="center">
        <img width="10%" src={ContributionsKittie} alt="Kittie" />
      </Box>

      <Box paddingTop="50px" paddingBottom="5px" fontSize={{ base: '20px', md: '30px' }} display="flex" justifyContent="center">
        <Link to="/safemap">
          <Text color="#308c67">
            ¿Quieres añadir un nuevo aviso?
          </Text>
        </Link>
      </Box>
    </div>
  );
};

export default ContributionPage;