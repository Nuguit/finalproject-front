import { Flex, Text } from '@chakra-ui/react';
import MainTitle from '../Title/MainTitle';
import MainPageButton from '../Buttons/MainPage/MainPageButton';
import { Link } from 'react-router-dom';
import PageWrapper from '../PageWrapper/PageWrapper';

import option2 from "./option2.png"

const Centralcont = () => {
  return (
    <PageWrapper>
      <Flex position="relative" alignItems="flex-start" justifyContent="flex-start" minHeight="100vh">
        <img
          src={option2}
          alt="MainImage"
          style={{
            marginTop: "200px",
            width: "45%",
            height: "auto",
            maxWidth: "80%",
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: -1
          }}
        />
        <Flex flexDir="column" alignItems="flex-start" justifyContent="flex-start" marginLeft="20px">
          <MainTitle />
          <Text fontSize="60px" fontWeight="300" fontStyle="italic" textAlign="left" mb="6" marginTop="20px">
            Encuentra tu camino.
          </Text>
          <Text maxWidth="50vw"
            fontSize="25px" fontWeight="300" fontStyle="italic" textAlign="left" mt="6">
            La primera web que te permite conocer de antemano los espacios públicos seguros tras la experiencia de otros usuari@s.
          </Text>
          <Link to="/signup" style={{ marginTop: "60px" }}>
            <MainPageButton />
          </Link>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};

export default Centralcont;






