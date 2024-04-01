import React from 'react';
import SafeWalkTitle from '../Title/SafeWalkTitle.png';
import { Flex, Text, Box, Link } from '@chakra-ui/react';
import howworksimage from './howworksimage.jpg';
import PageWrapper from '../PageWrapper/PageWrapper';

const HowWorks = () => {
  return (
    <PageWrapper>
      <Flex flexDir="column" alignItems="center">
        <Flex justifyContent="center" paddingTop="30px">
          <img src={SafeWalkTitle} width="60%" height="auto" />
        </Flex>

        <Text
          width="100%"
          paddingTop="40px"
          paddingBottom="40px"
          fontSize={{ base: '30px', md: '50px' }}
          fontWeight="400"
          fontStyle="italic"
          textAlign="center"
        >
          ¿Cómo funciona?
        </Text>
        <Box width="100%" height="100%">
          <Text
            fontSize={{ base: '20px', md: '30px' }}
            fontWeight="400"
            fontStyle="italic"
            textAlign="center"
            paddingX={{ base: '20px', md: '0' }}
          >
            Al darte de alta en nuestra app estarás al día de todos los avisos nuevos que l@s usuari@s suban a las
            zonas del SafeMap que tú elijas. Además, podrás señalar zonas no seguras, mal iluminadas o no señalizadas
            (como, por ejemplo, calles sin salida) de tu ciudad o el lugar donde estés.
          </Text>
        </Box>

        <Text textAlign="center" paddingTop="40px" fontSize={{ base: '20px', md: '30px' }}>
          De este modo, ayudarás a que el camino de otr@s sea más{' '}
          <Text as="span" color="#3fa142">
            seguro
          </Text>
          .
        </Text>
        <Flex justifyContent="center" alignItems="center" paddingTop="40px">
          <img src={howworksimage} width="40%" height="auto" />
          <Box width="100%" textAlign="center">
            <Text fontSize={{ base: '30px', md: '50px' }} fontWeight="bold" color="#3fa142">
              <Link to="/signup">¿Comenzamos?</Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};

export default HowWorks;
